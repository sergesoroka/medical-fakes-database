import { useRouter } from "next/router";
import styles from "./../../styles/Home.module.scss";
import TagsLayout from "../../components/Tag/TagsLayout";

import { tableData } from "./../../data/tableData";

function CartPage() {
  const router = useRouter();
  const { id } = router.query;

  const renderedPage = tableData.map((item, i) => {
    if (item.id === id) {
      return (
        <>
          <div>
            <h3 className={styles.theme}>{item.theme}</h3>
            <h2 className={styles.subtheme}>{item.subtheme}</h2>
            <div style={{ marginLeft: "4rem" }}>
              <TagsLayout />
            </div>
            <h4 className={styles.verdict}>{item.verdict}</h4>
            <p className={styles.textDiscript}>{item.discription}</p>
            <h4 className={styles.proof}>Як насправді?</h4>
            <p className={styles.textDiscript}>{item.disproof}</p>
          </div>
          <div>39</div>
        </>
      );
    }
  });

  return <div className={styles.singlePageMainContent}>{renderedPage}</div>;
}

export default CartPage;
