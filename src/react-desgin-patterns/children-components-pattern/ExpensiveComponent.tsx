export default function ExpensiveComponent() {
  let startTime = performance.now();

  while (performance.now() - startTime < 1000) {}
  console.log("Expensive Component");
  // Do nothing for
  return (
    <div>
      <h1>Expensive Component</h1>
    </div>
  );
}
