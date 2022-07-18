import styles from "./SearchAutoComplete.module.css";
import useSearchAutoComplete from "./hooks/useSearchAutoComplete";
import Suggestions from "./Suggestions";

import { SuggestionsType } from "../../types/dataTypes";
import { data } from '../../data/data'

const SearchAutoComplete = () => {
  const {
    handleChange,
    handleClick,
    value,
    suggestionsActive,
    suggestionIndex,
    suggestions,
  } = useSearchAutoComplete({ data });

  return (
    <div className={styles.searchWrap}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
      />
      {suggestionsActive && (
        <Suggestions
          handleClick={handleClick}
          suggestionIndex={suggestionIndex}
          suggestions={suggestions}
        />
      )}
    </div>
  );
};

export default SearchAutoComplete;
