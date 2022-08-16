import Link from "next/link";
import styles from "./Card.module.css";
import { medicalFake } from "../../types/dataTypes";

import TagsLayout from "../Tag/TagsLayout";

const Card = ({ id, source, theme, subtheme }: medicalFake) => {
  return (
    <div className={styles.card} key={id}>
      <Link href={`/card/${id}`}>
        <a>
          <h3 className={styles.cardTitle}>{subtheme}</h3>
        </a>
      </Link>
      <TagsLayout />
    </div>
  );
}; 

export default Card;
