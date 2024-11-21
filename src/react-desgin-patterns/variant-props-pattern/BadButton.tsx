interface BadButtonProps {
  variant: "primary" | "secondary" | "danger";
}
export default function BadButton({ variant }: BadButtonProps) {
  const style = {
    backgroundColor:
      variant === "primary" ? "blue" : variant === "secondary" ? "gray" : "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <button style={style} className={`button-${variant}`}>
      click me
    </button>
  );
}
