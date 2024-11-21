import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export default function BadTodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };
  const changeStatus = (idx: number) => {
    const updatedTodos = [...todos];
    updatedTodos[idx].completed = !updatedTodos[idx].completed;
    setTodos(updatedTodos);
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <div>
        {todos.map((todo, idx) => (
          <div key={todo.id}>
            <span
              onClick={() => changeStatus(idx)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
