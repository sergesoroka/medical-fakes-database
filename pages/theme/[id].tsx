import styles from './../../styles/Home.module.scss'
import { useRouter } from "next/router";

const Theme = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  
  return (
    <div className={styles.singlePageMainContent}>Theme</div>
  )
}

export default Theme