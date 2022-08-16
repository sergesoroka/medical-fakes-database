import React from "react";
import Article from "./Article";
import { dataVox } from "../../data/dataVox";
import styles from "./VoxArticles.module.css";

import SectionLabel from "../SectionLabel/SectionLabel";

const VoxArticlesLayout = () => {
  const DataVoxRendered = dataVox.slice(0, 2).map((article) => {
    return (
      <Article
        key={article.articleId}
        link={article.link}
        imagelink={article.imagelink}
        title={article.title}
        tags={article.tags}
        authors={article.authors}
        articleId={article.articleId}
      />
    );
  });
  return (<div className={styles.articlesWrap}>
    <SectionLabel label="articles" />
    {DataVoxRendered}
    </div>);
};

export default VoxArticlesLayout;
