import { NextPage } from "next";
import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "../styles/Home.module.scss";
import CardsLayout from "../components/Card/CardsLayout";
import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";
import Infografica from "../components/Infografica/Infografica";
import { articlesData } from "../data/fakes/articlesData";

const Home: NextPage = () => {
  // const vox_article_id: string[] = articlesData.slice(0, 2).map(item => item.vox_article_id)
  return (
    <div className={styles.mainContent}>
      <div className={styles.fakes}>
        <CardsLayout page='home'/>
        <Infografica infographic_id='1' />
      </div>
      <div className={styles.media}>
        <YouTubeVideo video_id='2'/>
        <VoxArticlesLayout vox_article_id='1'/>
      </div>
    </div>
  );
};

export default Home;
