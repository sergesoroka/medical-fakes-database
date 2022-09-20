import SearchAutoComplete from "../components/SearchAutoComplete/SearchAutoComplete";
import TagsLayout from "../components/Tag/TagsLayout";
import styles from "./../styles/Search.module.scss";

import { uniqueTags } from '../utils/uniqueTags'
import Tag from './../components/Tag/Tag'

const search = () => {
  const tagsList = uniqueTags.map((tag, i) => {
    //@ts-ignore
    return <Tag key={i} tag={tag} />;
  });
  return (
    <div className={styles.searchWrap}>
      <SearchAutoComplete />
      <div className={styles.tagsWrap}>{tagsList}</div>
     
    </div>
  );
};

export default search;
