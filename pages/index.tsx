import { NextPage } from "next";
import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "../styles/Home.module.scss";
import Loader from "../components/Loader/Loader";
import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";
import Infografica from "../components/Infografica/Infografica";
import SectionLabel from "../components/SectionLabel/SectionLabel";
import Link from "next/link";
import { useGetFakesQuery } from "../store/api";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  const { data } = useGetFakesQuery('fakes_ua/?limit=100')
  const uniqueSubthemes: string[] = [];
  return (
    <div className={styles.mainContent}>
      <div className={styles.fakes}>
      <Link href="/themes">
            <a>
              <SectionLabel label="fakes" />
            </a>
          </Link>
      {data 
        ? data.items.slice(0, 160).map((item, i) => {
            if (!uniqueSubthemes.includes(item.subtheme)) {
              uniqueSubthemes.push(item.subtheme);

              return (
                <Card
                  key={i}
                  id={item.id}
                  source={item.source}
                  theme={item.theme}
                  subtheme={item.subtheme}
                  tags={item.tags}
                />
              );
            }
          })
        : <Loader />}
        <div style={{marginTop: '2rem'}}>
          <Link href="/infografica">
            <a>
              <SectionLabel label="infograf" />
            </a>
          </Link>
          <Infografica infographic_id="1" />
        </div>
      </div>
      <div className={styles.media}>
        <YouTubeVideo video_id="2" />
        <>
        <Link href="/articles">
            <a>
              <SectionLabel label="articles" />
            </a>
          </Link>
          <VoxArticlesLayout vox_article_id="1" />
        </>
      </div>
    </div>
  );
};

export default Home;
