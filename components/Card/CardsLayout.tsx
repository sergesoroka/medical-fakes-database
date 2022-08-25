// @ts-ignore
import React from "react";
import styles from "./Card.module.css";
import Card from "./Card";
import SectionLabel from "../SectionLabel/SectionLabel";
import { tableData } from "../../data/tableData";

const CardsLayout = ({
  suggestions,
  suggestionIndex,
  tag,
  handleClick,
}: {
  suggestions?: string[];
  suggestionIndex?: number;
  tag?: string;
  handleClick?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const renderedData = tableData.map((item, i) => {
    if (item.theme && !suggestions) {
      return (
        <Card
          key={i}
          id={item.id}
          source={item.source}
          theme={item.theme}
          subtheme={item.subtheme}
          tags={item.tags}
        />
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
          <Card
            key={i}
            id={item.id}
            source={item.source}
            theme={item.theme}
            subtheme={item.subtheme}
            tags={item.tags}
          />
        );
      }
    }
  });

  return (
    <div className={styles.cardWrap}>
      {/* @ts-ignore */}
    
      {!suggestions && !tag ? <SectionLabel label="fakes" /> : null }
      {suggestions ? renderedSearchData : renderedData}
    </div>
  );
};

export default CardsLayout;
