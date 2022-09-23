import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./../../styles/Home.module.scss";
import TagsLayout from "../../components/Tag/TagsLayout";
import Infografica from "../../components/Infografica/Infografica";
import YouTubeVideo from "../../components/YouTubeVideo/YouTubeVideo";
import Statistic from "../../components/Statistic/Statistic";
import VoxArticlesLayout from "../../components/VoxArticles/VoxArticlesLayout";
import { FaHandPointUp, FaThumbsUp } from "react-icons/fa";

// @ts-ignore
import { fakesData } from "./../../data/fakes/fakesData";
// @ts-ignore
import { fakesDataEn } from "./../../data/fakes-En/fakesDataEn";
// @ts-ignore
import { fakesDataRu } from "./../../data/fakes-Ru/fakesDataRu";

import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import Link from "next/link";

function CartPage() {
  const router = useRouter();
  const { id, locale } = router.query;

  const data =
    locale == "en" ? fakesDataEn : locale == "ru" ? fakesDataRu : fakesData;

  const renderedPage = data.map(
    (
      item: {
        id: string | string[] | undefined;
        theme:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | ReactFragment
          | ReactPortal
          | null
          | undefined;
        subtheme:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | ReactFragment
          | null
          | undefined;
        tags: any;
        verdict:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | ReactFragment
          | ReactPortal
          | null
          | undefined;
        discription: any;
        disproof: any;
        video_id: string;
        vox_article_id: string;
        infographic_id: string;
      },
      i: any
    ) => {
      if (item.id === id) {
        return (
          <>
            <Head>
              <title>Детокс від пропаганди | {item.subtheme}</title>
            </Head>
            <div>
              <div className={styles.themeSection}>
                <div className={styles.wordTheme}>
                  <Link href="/themes">
                    <a>ТЕМА</a>
                  </Link>
                </div>
                <div className={styles.arrowTheme}></div>
                <Link href={`/theme/${id}`}>
                  <a>
                    <h2 className={styles.theme}>{item.theme}</h2>
                  </a>
                </Link>
              </div>
              <h1 className={styles.subtheme}>{item.subtheme}</h1>
              <div style={{ marginLeft: "4rem" }}>
                {/* @ts-ignore */}
                {item.tags && <TagsLayout tags={item.tags} />}
              </div>
              <div className={styles.verdictWrap}>
                <FaHandPointUp
                  style={{ color: "#D12020", fontSize: "1.4rem" }}
                />
                <h4 className={styles.verdict}>{item.verdict}</h4>
              </div>
              <p
                className={styles.textDiscript}
                dangerouslySetInnerHTML={{ __html: item.discription }}
              />
              <div className={styles.verdictWrap}>
                <FaThumbsUp style={{ color: "#008A40", fontSize: "1.2rem" }} />
                <h4 className={styles.proof}>Як насправді?</h4>
              </div>
              <p
                className={styles.textDiscript}
                dangerouslySetInnerHTML={{ __html: item.disproof }}
              />

              <div className={styles.singlePageArticlesWrap}>
                {item.video_id && <YouTubeVideo video_id={item.video_id} />}
                <div>
                  {item.vox_article_id && <SectionLabel label="articles" />}
                  <VoxArticlesLayout vox_article_id={item.vox_article_id} />
                </div>
              </div>
              {item.infographic_id && (
                <>
                  <SectionLabel label="infograf" />
                  <Infografica infographic_id={item.infographic_id} />
                </>
              )}
            </div>
            <div>
              {/* @ts-ignore */}
              <Statistic subtheme={item.subtheme} />
            </div>
          </>
        );
      }
    }
  );

  return <div className={styles.singlePageMainContent}>{renderedPage}</div>;
}

export default CartPage;
