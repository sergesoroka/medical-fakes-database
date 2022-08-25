import { useRouter } from "next/router";
import styles from "./../../styles/Home.module.scss";
import TagsLayout from "../../components/Tag/TagsLayout";

import YouTubeVideo from "../../components/YouTubeVideo/YouTubeVideo";
import Statistic from '../../components/Statistic/Statistic'
import VoxArticlesLayout from "../../components/VoxArticles/VoxArticlesLayout";
import { FaHandPointUp, FaThumbsUp } from "react-icons/fa";
import { tableData } from "./../../data/tableData";

function CartPage() {
  const router = useRouter();
  const { id } = router.query;

  const renderedPage = tableData.map((item, i) => {
    if (item.id === id) {
      return (
        <>
          <div>
            <div className={styles.themeSection}>
            <div className={styles.wordTheme}>ТЕМА</div>
            <div className={styles.arrowTheme}></div>
              <h3 className={styles.theme}>{item.theme}</h3>
            </div>
            <h2 className={styles.subtheme}>{item.subtheme}</h2>
            <div style={{ marginLeft: "4rem" }}>
              {/* @ts-ignore */}
             {item.tags && <TagsLayout tags={item.tags}/>}
            </div>
            <div className={styles.verdictWrap}>
              <FaHandPointUp style={{ color: "#D12020", fontSize: "1.4rem" }} />
              <h4 className={styles.verdict}>{item.verdict}</h4>
            </div>
            <p className={styles.textDiscript}>{item.discription}</p>
            <div className={styles.verdictWrap}>
              <FaThumbsUp style={{ color: "#008A40", fontSize: "1.2rem" }} />
              <h4 className={styles.proof}>Як насправді?</h4>
            </div>
            <p className={styles.textDiscript}>{item.disproof}</p>

            <div className={styles.articlesWrap}>
              {/* <YouTubeVideo /> */}
              <VoxArticlesLayout />
            </div>
          </div>
          <div><Statistic /></div>
        </>
      );
    }
  });

  return <div className={styles.singlePageMainContent}>{renderedPage}</div>;
}

export default CartPage;
