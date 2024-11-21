import { InputHTMLAttributes } from "react";

interface BadTextInputProps {
  props: InputHTMLAttributes<HTMLInputElement>;
}

export default function BadTextInput(props: BadTextInputProps) {
  return <input type="text" style={{ padding: 10, margin: 10 }} {...props} />;
}
