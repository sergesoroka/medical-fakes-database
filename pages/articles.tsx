import VoxArticlesLayout from "../components/VoxArticles/VoxArticlesLayout";
import styles from "./../styles/Home.module.scss";

import SectionLabel from "../components/SectionLabel/SectionLabel";

// import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";
import { useGetFakesQuery } from "../store/api";

const Articles = () => {
  // const { articles } = useLangSwitcher();
  const { data } = useGetFakesQuery("articles_ua/");
  // const renderedArticles = articles.map((item, id) => {
  //   return (
  //     <VoxArticlesLayout
  //       key={item.vox_article_id}
  //       vox_article_id={item.vox_article_id}
  //     />
  //   );
  // });
  return (
    <>
      <Head>
        <title>Статті | Detox від пропаганди</title>
      </Head>
      <div className={styles.articlesPage}>
        <SectionLabel label="articles" />
        <div className={styles.articlesWrap}>
          {data
            ? data.items.map((item, id) => {
                return (
                  <VoxArticlesLayout
                    key={item.vox_article_id}
                    vox_article_id={item.vox_article_id}
                  />
                );
              })
            : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default Articles;
