// @ts-ignore
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Card.module.css";
import Card from "./Card";
import SectionLabel from "../SectionLabel/SectionLabel";
import useLangSwitcher from "../../utils/langSwitcher";

import { useState, useEffect } from "react";

const CardsLayout = ({
  suggestions,
  suggestionIndex,
  theme,
  tag,
  page,
  handleClick,
}: {
  suggestions?: string[];
  suggestionIndex?: number;
  theme?: string;
  tag?: string;
  page?: string;
  handleClick?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const router = useRouter();

  const { fakes } = useLangSwitcher();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://apex.oracle.com/pls/apex/sergespace/fakes_ua/?limit=1200")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const uniqueSubthemes: string[] = [];
  /* @ts-ignore */
  const homePageRenderedData = fakes.slice(0, 80).map((item, i) => {
    if (!uniqueSubthemes.includes(item.subtheme)) {
      uniqueSubthemes.push(item.subtheme);

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
  /* @ts-ignore */
  const uniqueSubthemesAll = [];
  /* @ts-ignore */
  const allFakesPageRenderedData = fakes.map((item, i) => {
    /* @ts-ignore */
    if (!uniqueSubthemesAll.includes(item.subtheme)) {
      uniqueSubthemesAll.push(item.subtheme);
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
  /* @ts-ignore */
  const uniqueSearch = [];
  /* @ts-ignore */
  const renderedSearchData = fakes.map((item, i) => {
    /* @ts-ignore */
    if (!uniqueSearch.includes(item.subtheme)) {
      uniqueSearch.push(item.subtheme);
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
    }
  });
  /* @ts-ignore */
  const uniqueSubthemesByTag = [];
  /* @ts-ignore */
  const renderedDataByTag = fakes.map((item, i) => {
    /* @ts-ignore */

    if (item.tags && item.tags.split(", ").includes(tag)) {
      /* @ts-ignore */
      if (!uniqueSubthemesByTag.includes(item.subtheme)) {
        uniqueSubthemesByTag.push(item.subtheme);
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
  /* @ts-ignore */
  const uniqueThemes = [];
  /* @ts-ignore */
  const renderedForThemePage = fakes.map((item, i) => {
    /* @ts-ignore */
    if (!uniqueThemes.includes(item.subtheme)) {
      uniqueThemes.push(item.subtheme);
      if (theme === item.theme) {
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

      {page !== "themePage" && !suggestions && !tag ? (
        <Link href="/fakes">
          <a>
            <SectionLabel label="fakes" />
          </a>
        </Link>
      ) : null}

      {data && page === "tag" ? 
      
      data.items.map((item, i) => {
        /* @ts-ignore */
    
        if (item.tags && item.tags.split(", ").includes(tag)) {
          /* @ts-ignore */
          if (!uniqueSubthemesByTag.includes(item.subtheme)) {
            uniqueSubthemesByTag.push(item.subtheme);
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
      })

      
      : 'loading...'}
      {router.asPath === "/fakes" ? allFakesPageRenderedData : null}
      {suggestions ? renderedSearchData : null}
      {data && router.asPath === "/"
        ? data.items.slice(0, 160).map((item, i) => {
            if (!uniqueSubthemes.includes(item.subtheme)) {
              uniqueSubthemes.push(item.subtheme);

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
          })
        : "loading..."}
      {page === "themePage" ? renderedForThemePage : null}
    </div>
  );
};

export default CardsLayout;
