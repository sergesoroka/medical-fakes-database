import React from "react";
import Image from "next/image";
import { VoxDataType } from "../../types/dataTypes";
import styles from "./VoxArticles.module.css";

const Article = ({
  link,
  imagelink,
  title,
  tags,
  authors,
  articleId,
}: VoxDataType) => {
  return (
    <>
      <div className={styles.articleWrap}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.articleLink}
        >
          <div className={styles.image}>
            <Image
              src={imagelink}
              alt={title}
              width={500}
              height={500}
              // style={{ width: "300px", height: "auto" }}
              layout="intrinsic"
            />
          </div>
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.articleLink}
        >
          <h2 className={styles.articleTitle}>{title}</h2>
        </a>
      </div>
    </>
  );
};

export default Article;
