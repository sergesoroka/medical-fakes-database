import styles from "./../styles/Home.module.scss";

import { medicalFake } from "./../types/dataTypes";

import ThemeItem from "../components/theme/ThemeItem";
import useLangSwitcher from "../utils/langSwitcher";
import Head from "next/head";

import { useGetFakesQuery } from "../store/api";

const Theme = () => {


  const { data } = useGetFakesQuery("fakes_ua/?limit=1200");


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
