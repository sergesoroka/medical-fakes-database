import { useRouter } from "next/router";
import Card from "../../components/Card/Card";
import { useGetFakesQuery } from "../../store/api";
import styles from "./../../styles/TagPage.module.scss";

const TagPage = () => {
  const { data } = useGetFakesQuery("fakes_ua/?limit=1600");
  const router = useRouter();
  const { tag } = router.query;

  const uniqueSubthemesByTag = [];

  return (
    <div className={styles.tagPageWrap}>
      <h2 className={styles.tagHeading}># {tag}</h2>
      {data
        ? data.items.map((item, i) => {
            if (item.tags && item.tags.split(", ").includes(tag)) {
              if (!uniqueSubthemesByTag.includes(item.subtheme)) {
                uniqueSubthemesByTag.push(item.subtheme);
                return (
                  <Card
                    key={i}
                    id={item.id}
                    source={item.source}
                    theme={item.theme}
                    subtheme={item.subtheme}
                    tags={item.tags}
                  />
                );
              }
            }
          })
        : "Loading..."}
    </div>
  );
};

export default TagPage;
