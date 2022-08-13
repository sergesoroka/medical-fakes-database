import styles from "./Card.module.css";
import { medicalFake } from "../../types/dataTypes";

const Card = ({ id, source, theme, subtheme }: medicalFake) => {
  return (
    <div className={styles.card} key={id}>
      <h3 className={styles.cardTitle}>{theme}</h3>
      <p>{subtheme}</p>
      <div>
        <p>Link to</p>
      </div>
    </div>
  );
};

export default Card;
