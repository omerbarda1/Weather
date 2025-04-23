import React, { useEffect, useState } from "react";
import "./UnderlineToggle.css";
interface UnderlineToggleProps<T> {
  title: string;
  options: T[];
  defaultOption?: T;
  getLabel: (option: T) => string;
  onSelect?: (option: T) => void;
}

function UnderlineToggle<T>({
  title,
  options,
  defaultOption,
  getLabel,
  onSelect,
}: UnderlineToggleProps<T>) {
  const [selected, setSelected] = useState<T | null>(defaultOption ?? null);

  useEffect(() => {
    if (defaultOption) {
      onSelect?.(defaultOption);
    }
  }, [defaultOption]);

  const handleClick = (option: T) => {
    setSelected(option);
    onSelect?.(option);
  };

  return (
    <div className="container">
      <h3>{title}</h3>
      <div style={{ display: "flex", gap: "12px" }}>
        {options.map((option, index) => {
          const isSelected = selected === option;
          return (
            <div
              key={index}
              style={{
                cursor: "pointer",
                borderBottom: isSelected
                  ? "2px solid black"
                  : "2px solid transparent",
              }}
              onClick={() => handleClick(option)}
            >
              {getLabel(option)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UnderlineToggle;
