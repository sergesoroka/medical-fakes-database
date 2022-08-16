import styles from "./SectionLabel.module.scss";

import {
  BsFillCaretRightFill,
  BsStack,
  BsFillFileEarmarkMedicalFill,
  BsBarChartFill,
} from "react-icons/bs";

type labelType = { label: string };
//@ts-ignore
const SectionLabel: React.FC<labelType> = ({ label }: labelType) => {
  if (label === "video") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconVideo}>
          <BsFillCaretRightFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelVideo}>Видео</div>
        <div className={styles.arrowVideo}></div>
      </div>
    );
  } else if (label === "fakes") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconFakes}>
          <BsStack style={{ fontSize: "1rem" }} />
        </div>
        <div className={styles.labelFakes}>Усі фейки</div>
        <div className={styles.arrowFakes}></div>
      </div>
    );
  } else if (label === "articles") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconArticles}>
          <BsFillFileEarmarkMedicalFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelArticles}>Статті</div>
        <div className={styles.arrowArticles}></div>
      </div>
    );
  } else if (label === "infograf") {
    return (
      <div className={styles.labelWrap}>
        <div className={styles.iconInfograf}>
          <BsBarChartFill style={{ fontSize: "1.2rem" }} />
        </div>
        <div className={styles.labelInfograf}>Інфографіка</div>
        <div className={styles.arrowInfograf}></div>
      </div>
    );
  } else {
    null
  }
};

export default SectionLabel;
