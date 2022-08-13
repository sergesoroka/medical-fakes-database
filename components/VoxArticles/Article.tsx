import React from "react";
import Image from "next/image";
import { VoxDataType } from '../../types/dataTypes'
import styles from "./VoxArticles.module.css";

const Article = ({
  link,
  imagelink,
  title,
  tags,
  authors,
}: VoxDataType ) => {
  return (
    <>
    <a href={link} target="_blank" rel="noreferrer" className={styles.articleLink}>
      <div className={styles.articleWrap}>
        <div className={styles.image}>
          <Image
            src={imagelink}
            alt={title}
            width={200}
            height={200}
            style={{ width: "200px", height: "auto" }}
            layout="fixed"
          />
        </div>
        <h2 className={styles.articleTitle}>{title}</h2>
      </div>
    </a></>
  );
};

export default Article;
