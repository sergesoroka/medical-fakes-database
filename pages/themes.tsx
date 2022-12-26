import styles from "./../styles/Home.module.scss";

import { medicalFake } from "./../types/dataTypes";

import ThemeItem from "../components/theme/ThemeItem";
import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";

import { useState, useEffect } from "react";

const Theme = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://apex.oracle.com/pls/apex/sergespace/fakes_ua/?limit=1200")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const { fakes } = useLangSwitcher();
  /* @ts-ignore */
  const themesUnique = [];
  if (data) {
    data.items.map((item: medicalFake) => {
      /* @ts-ignore */
      if (!themesUnique.includes(item.theme)) {
        themesUnique.push(item.theme);
      }
    });
  }
  /* @ts-ignore */
  const theme = themesUnique.map((theme) => (
    <ThemeItem key={theme} theme={theme} />
  ));
  return (
    <div>
      <Head>
        <title>Усі теми | Detox від пропаганди</title>
      </Head>
      <div className={styles.themePage}>{data ? theme : 'loading'}</div>
    </div>
  );
};

export default Theme;
