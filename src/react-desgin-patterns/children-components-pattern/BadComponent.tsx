import { useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

export default function BadComponent() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ExpensiveComponent />
    </div>
  );
}
