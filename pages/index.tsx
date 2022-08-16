import { NextPage } from "next";
import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "../styles/Home.module.scss";
import CardsLayout from "../components/Card/CardsLayout";
import YouTubeVideo from "../components/YouTubeVideo/YouTubeVideo";
import Infografica from "../components/Infografica/Infografica";

const Home: NextPage = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.fakes}>
        <CardsLayout />
        <Infografica />
      </div>
      <div className={styles.media}>
        <YouTubeVideo />
        <VoxArticlesLayout />
      </div>
    </div>
  );
};

export default Home;
