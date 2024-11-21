import "./App.css";
import BadCard from "./react-desgin-patterns/compoud-component-pattern/BadCard";
import Card from "./react-desgin-patterns/compoud-component-pattern/pattern/Card";

function App() {
  return (
    <div className="container">
      <Card>
        <Card.Title />
        <Card.Footer />
      </Card>
    </div>
  );
}

export default App;
