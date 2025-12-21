import { useId } from "react";
import { ISelect } from "@/interfaces/components/ISelect";

export default function Select({
  id,
  label = "Label",
  options = [],
  value,
  onChange,
  disabled = false,
  className = "",
}: ISelect) {
  const generatedId = useId();
  const selectId = id ?? `select-${generatedId}`;

  return (
    <div className="select-wrapper">
      <label className="select-label" htmlFor={selectId}>
        {label}
      </label>
      <select
        id={selectId}
        className={`select-base ${className}`}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        aria-label={label}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}