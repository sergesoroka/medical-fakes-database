import Tag from "./Tag";
import styles from './Tag.module.scss'
const tags = [
  { id: 1, tagName: " Гуманітарна катастрофа", active: true },
  { id: 2, tagName: " Вакцинація", active: true },
  { id: 3, tagName: " COVID-19", active: true },
];

const TagsLayout = () => {
  const tagsList = tags.map((tag) => {
    return <Tag key={tag.id} name={tag.tagName} active={tag.active} />;
  });
  return <div className={styles.tagsLayout}>{tagsList}</div>;
};

export default TagsLayout;
