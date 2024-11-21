import { ButtonHTMLAttributes } from "react";

interface BadButtonProps {
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function BadButton(props: BadButtonProps) {
  return (
    <button style={{ padding: 10, margin: 10 }} {...props}>
      Click Me!
    </button>
  );
}
