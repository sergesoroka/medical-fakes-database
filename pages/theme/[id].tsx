import styles from "./../../styles/Home.module.scss";
import { useRouter } from "next/router";

// @ts-ignore
import { fakesData } from "./../../data/fakes/fakesData";
import { medicalFake } from "./../../types/dataTypes";
import { useMemo } from "react";

const Theme = () => {
  const router = useRouter();
  const { id } = router.query;

  const fakeTheme = fakesData.map((item) => {
    if (item.id === id) {
      return item.theme;
    }
  });
  const listOfSubtheme = fakesData.map((item) => {
    if (fakeTheme[0] === item.theme) {
      return item.subtheme;
    }
  });
  const subthemesUnique = new Set([...listOfSubtheme])
  // const subthemes = subthemesUnique.map((theme) => <p key={theme}>{theme}</p>)
  return (
    <div>
      <h2>Theme: {fakeTheme}</h2>
      <div>{subthemesUnique}</div>
    </div>
  );
};

export default Theme;
