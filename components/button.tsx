import { IButton } from "@/interfaces/components/IButton";

export default function Button({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}: IButton) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button-base ${variant} ${className}`}
    >
      {label}
    </button>
  );
}
