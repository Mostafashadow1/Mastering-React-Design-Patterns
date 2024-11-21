import { InputHTMLAttributes } from "react";
import WithStyles from "./WithStyles";

interface TextInputProps {
  props: InputHTMLAttributes<HTMLInputElement>;
}

function TextInput(props: TextInputProps) {
  return <input type="text" {...props} />;
}

export const StyledTextInput = WithStyles(TextInput);
