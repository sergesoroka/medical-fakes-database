import SearchAutoComplete from "../components/SearchAutoComplete/SearchAutoComplete";
import TagsLayout from "../components/Tag/TagsLayout";
import styles from "./../styles/Search.module.scss";
const search = () => {
  return (
    <div className={styles.searchWrap}>
      <SearchAutoComplete />
      <TagsLayout />
    </div>
  );
};

export default search;
