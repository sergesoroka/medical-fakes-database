import React, { useState } from "react";

const useSearchAutoComplete = ({ data }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion) => suggestion.toLowerCase().indexOf(query) > -1
      );
      console.log("filterSuggestions", filterSuggestions);

      setSuggestions(filterSuggestions);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionsActive(false);
  };

  return {
    suggestionsActive,
    suggestionIndex,
    value,
    handleChange,
    handleClick,
    suggestions,
  };
};

export default useSearchAutoComplete;
