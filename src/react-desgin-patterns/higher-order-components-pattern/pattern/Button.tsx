import { ButtonHTMLAttributes } from "react";
import WithStyles from "./WithStyles";

interface ButtonProps {
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  return <button {...props}>Click Me!</button>;
}

export const StyledButton = WithStyles(Button);
