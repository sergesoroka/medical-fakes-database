// @ts-ignore
import { useRouter } from "next/router";
import styles from "./Card.module.css";
import Card from "./Card";
import SectionLabel from "../SectionLabel/SectionLabel";
import { tableData } from "../../data/tableData";
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
  const homePageRenderedData = tableData.slice(0, 5).map((item, i) => {
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
  });

  const allFakesPageRenderedData = tableData.map((item, i) => {
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

  const renderedDataByTag = tableData.map((item, i) => {
    
      /* @ts-ignore */
   
    if (item.tags.split(", ").includes(tag)) {
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
