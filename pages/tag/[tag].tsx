import { useRouter } from "next/router";
import styles from './../../styles/TagPage.module.scss'

const TagPage = () => {
  const router = useRouter();
  const { tag } = router.query;
  return (
    <div className={styles.tagPageWrap}>{tag}</div>
  )
}

export default TagPage