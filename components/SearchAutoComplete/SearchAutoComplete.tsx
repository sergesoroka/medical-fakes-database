import useSearchAutoComplete from "./hooks/useSearchAutoComplete";
import styles from "./SearchAutoComplete.module.scss";

import CardsLayout from "../Card/CardsLayout";
import { FiX, FiSearch } from "react-icons/fi";
// @ts-ignore
import { fakesData } from "../../data/fakes/fakesData"

const SearchAutoComplete = () => {
  const {
    handleChange,
    handleClick,
    handleClear,
    value,
    suggestionsActive,
    suggestionIndex,
    suggestions,
  } = useSearchAutoComplete({ data: fakesData });

  return (
    <div className={styles.searchWrap}>
      <div className={styles.searchIcon}>
        <FiSearch />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Пошук фейків"
      />
      {/* <button className={styles.clearBtn} onClick={handleClear}>
        <FiX />
      </button> */}
      {value && (
        <>
          <CardsLayout
            handleClick={handleClick}
            suggestionIndex={suggestionIndex}
            suggestions={suggestions}
          />
        </>
      )}
    </div>
  );
};

export default SearchAutoComplete;
