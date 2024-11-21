export default function BadCard() {
  const data = {
    title: "Card Title",
    content: "Card content",
    action: "Action",
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3>{data.title}</h3>
      </div>
      <div className="card-body">
        <p>{data.content}</p>
      </div>
      <div className="card-footer">
        <button>{data.action}</button>
      </div>
    </div>
  );
}
