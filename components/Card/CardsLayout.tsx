// @ts-ignore
import { useRouter } from "next/router";
import styles from "./Card.module.css";
import Card from "./Card";
import SectionLabel from "../SectionLabel/SectionLabel";
import { tableData } from "../../data/tableData";
import { fakesData } from "../../data/fakes/fakesData";
import Link from "next/link";

const CardsLayout = ({
  suggestions,
  suggestionIndex,
  tag,
  page,
  handleClick,
}: {
  suggestions?: string[];
  suggestionIndex?: number;
  tag?: string;
  page?: string;
  handleClick?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const router = useRouter();
  console.log(page);

  // .slice(0, 5)
  const uniqueSubthemes: string[] = [];
  const homePageRenderedData = fakesData.map((item, i) => {
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

  const uniqueSubthemesAll: string[] = [];
  const allFakesPageRenderedData = fakesData.map((item, i) => {
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
  const uniqueSubthemesByTag: string[] = [];
  const renderedDataByTag = fakesData.map((item, i) => {
    /* @ts-ignore */

    if (item.tags.split(", ").includes(tag)) {
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

  return (
    <div className={styles.cardWrap}>
      {/* @ts-ignore */}

      {!suggestions && !tag ? (
        <Link href="/fakes">
          <a>
            <SectionLabel label="fakes" />
          </a>
        </Link>
      ) : null}

      {page === "tag" ? renderedDataByTag : null}
      {router.asPath === "/fakes" ? allFakesPageRenderedData : null}
      {suggestions ? renderedSearchData : null}
      {page === "home" ? homePageRenderedData : null}
    </div>
  );
};

export default CardsLayout;
