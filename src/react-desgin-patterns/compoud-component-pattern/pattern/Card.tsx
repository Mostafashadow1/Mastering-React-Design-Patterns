import { useContext } from "react";
import useCardrdContext, { CardContext } from "./useCardContext";

export type Data = {
  title: string;
  content: string;
  action: string;
  footer: string;
};
export default function Card({ children }: any) {
  const data: Data = {
    title: "Card Title",
    content: "Card content",
    action: "Action",
    footer: "Card footer",
  };
  return (
    <CardContext.Provider value={{ data }}>
      {<div className="card">{children}</div>}
    </CardContext.Provider>
  );
}

Card.Title = function () {
  const context = useCardrdContext();
  return (
    <div className="card-header">
      <h3>{context.data.title}</h3>
    </div>
  );
};

Card.Content = function () {
  const context = useCardrdContext();

  return (
    <div className="card-body">
      <p>{context.data.content}</p>
    </div>
  );
};

Card.Footer = function () {
  const context = useCardrdContext();

  return (
    <div className="card-body">
      <p>{context.data.footer}</p>
    </div>
  );
};

Card.Action = function () {
  const context = useCardrdContext();

  return (
    <div className="card-footer">
      <button>{context.data.action}</button>
    </div>
  );
};
