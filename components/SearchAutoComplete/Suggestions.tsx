import { MouseEventHandler } from "react";

const Suggestions = ({
  suggestions,
  suggestionIndex,
  handleClick,
}: {
  suggestions: string[];
  suggestionIndex: number;
  handleClick: MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion: string, index: number) => {
        return (
          <li
            className={index === suggestionIndex ? "active" : ""}
            key={index}
            onClick={handleClick}
          >
            {suggestion}
          </li>
        );
      })}
    </ul>
  );
};

export default Suggestions;
