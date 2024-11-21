interface ButtonProps {
  variant?: "primary" | "secondary" | "danger" | "success" | "warning";
  title: string;
}
export default function Button({ variant = "secondary", title }: ButtonProps) {
  const style = { ...styles.variant[variant] };
  return <button style={style}>{title}</button>;
}

const styles = {
  variant: {
    primary: {
      backgroundColor: "blue",
      color: "white",
    },
    secondary: {
      backgroundColor: "#fff",
      color: "#000",
    },
    danger: {
      backgroundColor: "#f00",
      color: "#fff",
    },
    warning: {
      backgroundColor: "yellow",
      color: "#000",
    },
    success: {
      backgroundColor: "green",
      color: "#fff",
    },
  },
};
