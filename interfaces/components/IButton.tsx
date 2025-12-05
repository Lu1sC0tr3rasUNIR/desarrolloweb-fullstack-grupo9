export interface IButton{
  label: string;
  onClick?: () => void;
  variant?: "primary" | "success" | "danger" | "alert";
  disabled?: boolean;
  className?: string;
}