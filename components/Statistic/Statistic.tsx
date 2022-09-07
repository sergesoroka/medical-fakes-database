import { useState } from "react";

import { tableData } from "../../data/tableData";
import styles from "./Statistic.module.scss";

const Statistic = () => {
  const [showAllSourses, setShowAllSourses] = useState<boolean>(false);

  const sources: string[] = [];
  const numberOfSources = tableData.map((item) => {
    if (!sources.includes(item.source)) {
      sources.push(item.source);
    }

    return sources;
  });

  const listOfSources = sources
    .slice(0, 3)
    .map((source, i) => <li key={i} className={styles.sourceItem}>{source}</li>);
  const listOfAllSources = sources.map((source, i) => (
    <li key={i} className={styles.sourceItem}>{source}</li>
  ));
  return (
    <>
      <div>
        <span className={styles.numberSources}>{numberOfSources.length}</span>
        <br />
        джерел
      </div>
      <ul className={styles.listSources}>{showAllSourses ? listOfAllSources : listOfSources}</ul>
      <div className={styles.btnAllSources}
      onClick={() => setShowAllSourses(!showAllSourses)}
      >Всі джерела</div>
    </>
  );
};

export default Statistic;
