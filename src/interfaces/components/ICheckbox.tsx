export interface ICheckbox {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}