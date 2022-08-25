import SearchAutoComplete from "../components/SearchAutoComplete/SearchAutoComplete";
import TagsLayout from "../components/Tag/TagsLayout";
import styles from "./../styles/Search.module.scss";

const tags = 'Гуманітарна катастрофа, Covid-19, Медиціна'

const search = () => {
  return (
    <div className={styles.searchWrap}>
      <SearchAutoComplete />
      <TagsLayout tags={tags} />
    </div>
  );
};

export default search;
