import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "./../styles/Home.module.scss";

import { articlesData } from "../data/fakes/articlesData";
const Articles = () => {
  const renderedArticles = articlesData.map((item, id) => {
    return (
      <VoxArticlesLayout key={item.vox_article_id} vox_article_id={item.vox_article_id}/>

    )
  })
  return <div className={styles.singlePageMainContent}>
    {renderedArticles}
  </div>;
};

export default Articles;
