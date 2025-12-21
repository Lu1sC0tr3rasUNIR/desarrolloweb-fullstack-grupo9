import { ICheckbox } from "@/interfaces/components/ICheckbox";

export default function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = true,
}: ICheckbox) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-custom">{label}</span>
    </div>
  );
}
