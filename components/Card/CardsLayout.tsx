import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";
import Card from "./Card";
import { tableData } from "../../data/tableData";

const CardsLayout = ({
  suggestions,
  suggestionIndex,
  handleClick,
}: {
  suggestions?: string[];
  suggestionIndex?: number;
  handleClick?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const renderedData = tableData.map((item, i) => {
    if (item.theme && !suggestions) {
      return (
        <Link href={`/card/${item.id}`}>
          <a>
            <Card
              key={i}
              id={item.id}
              source={item.source}
              theme={item.theme}
              subtheme={item.subtheme}
            />
          </a>
        </Link>
      );
    }
  });

  const renderedSearchData = tableData.map((item, i) => {
    if (item.theme && suggestions) {
      if (
        suggestions.includes(item.theme) ||
        suggestions.includes(item.subtheme)
      ) {
        return (
         <Link href={`/card/${item.id}`}>
          <a>
            <Card
              key={i}
              id={item.id}
              source={item.source}
              theme={item.theme}
              subtheme={item.subtheme}
            />
          </a>
        </Link>
        );
      }
    }
  });

  return (
    <div className={styles.cardWrap}>
      {suggestions ? renderedSearchData : renderedData}
    </div>
  );
};

export default CardsLayout;
