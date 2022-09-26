import { useState } from "react";
import Link from "next/link";
// import { fakesData } from "../../data/fakes/fakesData";
import styles from "./Statistic.module.scss";
import useLangSwitcher from "../../utils/langSwitcher";

const Statistic = ({ subtheme }: { subtheme: string }) => {
  const [showAllSourses, setShowAllSourses] = useState<boolean>(false);
const { fakes } = useLangSwitcher()
  // @ts-ignore
  const sources = [];
  // @ts-ignore
  fakes.map((item) => {
    // @ts-ignore
    if (!sources.includes(item.source) && item.subtheme == subtheme) {
      sources.push(item);
    }

    return item;
  });
// @ts-ignore
  const listOfSources = sources.slice(0, 3).map((item, i) => (
    <li key={i} className={styles.sourceItem}>
      <Link href={item.link}><a>{item.source}</a></Link>
      
    </li>
  ));
// @ts-ignore
  const listOfAllSources = sources.map((item, i) => (
    <li key={i} className={styles.sourceItem}>
     <Link href={item.link}><a>{item.source}</a></Link>
    </li>
  ));
  return (
    <>
      <div>
        <span className={styles.numberSources}>{listOfAllSources.length}</span>
        <br />
        джерел
      </div>
      <ul className={styles.listSources}>
        {showAllSourses ? listOfAllSources : listOfSources}
      </ul>
      <div
        className={styles.btnAllSources}
        onClick={() => setShowAllSourses(!showAllSourses)}
      >
        Всі джерела
      </div>
    </>
  );
};

export default Statistic;
