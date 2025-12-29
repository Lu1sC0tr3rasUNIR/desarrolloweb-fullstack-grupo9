import { ICheckbox } from "@/interfaces/components/ICheckbox";

export default function Checkbox({
  label,
  checked = false,
  onChange,
  onClick,
  disabled = false,
}: ICheckbox) {
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onClick={onClick}
        onChange={onChange ? (e) => onChange(e.target.checked) : undefined}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-custom">{label}</span>
    </div>
  );
}
