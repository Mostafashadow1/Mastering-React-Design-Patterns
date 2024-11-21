import { useState } from "react";

export default function Component({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {children}
    </div>
  );
}
