import React from "react";
import Article from "./Article";
import styles from "./VoxArticles.module.css";
import { useGetFakesQuery } from "../../store/api";
import Loader from "../Loader/Loader";

const VoxArticlesLayout = ({ vox_article_id }: { vox_article_id: string }) => {
  const { data } = useGetFakesQuery("articles_ua/");

  return (
    <div className={styles.articlesWrap}>
      {data
        ? data.items.map((article) => {
            if (vox_article_id == article.vox_article_id) {
              return (
                <Article
                  key={article.vox_article_id}
                  link={article.vox_article_link}
                  imagelink={article.vox_article_image_link}
                  title={article.vox_article_title}
                  articleId={article.vox_article_id}
                />
              );
            }
          })
        : <Loader/>}
    </div>
  );
};

export default VoxArticlesLayout;
