import { createContext, useContext } from "react";
import { Data } from "./Card";

type CardContextType = {
  data: Data;
};
export const CardContext = createContext<CardContextType | undefined>(
  undefined
);

export default function useCardrdContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
}
