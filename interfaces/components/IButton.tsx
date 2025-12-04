export interface IButton{
  label: string;
  onClick?: () => void;
  variant?: "primary" | "confirm" | "danger" | "alert";
  disabled?: boolean;
  className?: string;
}