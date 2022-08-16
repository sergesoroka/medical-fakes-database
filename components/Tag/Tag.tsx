import styles from "./Tag.module.scss";

const Tag = ({ name, active }: { name: string; active: boolean }) => {
  return (
    <div className={styles.tagWrap}>
      <div className={styles.tag}>#</div>
      <div className={styles.tag}>{name}</div>
    </div>
  );
};

export default Tag;
