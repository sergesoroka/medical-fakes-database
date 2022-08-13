import React from "react";
import Article from "./Article";
import { dataVox } from "../../data/dataVox";
import styles from "./VoxArticles.module.css";

const VoxArticlesLayout = () => {
  const DataVoxRendered = dataVox.map((article) => {
    return (
      <Article
        key={article.articleId}
        link={article.link}
        imagelink={article.imagelink}
        title={article.title}
        tags={article.tags}
        authors={article.authors}
      />
    );
  });
  return <div className={styles.articlesWrap}>{DataVoxRendered}</div>;
};

export default VoxArticlesLayout;
