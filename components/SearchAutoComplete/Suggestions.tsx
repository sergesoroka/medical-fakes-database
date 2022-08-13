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
    <div className="suggestions">
      {suggestions.map((suggestion: string, index: number) => {
        return (
          <p
            className={index === suggestionIndex ? "active" : ""}
            key={index}
            onClick={handleClick}
          >
            {suggestion}
          </p>
        );
      })}
    </div>
  );
};

export default Suggestions;
