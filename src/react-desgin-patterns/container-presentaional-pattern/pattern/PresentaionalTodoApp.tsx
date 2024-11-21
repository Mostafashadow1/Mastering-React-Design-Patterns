import { Todo } from "./ContainerTodoApp";
import React from "react";
interface TodoPresintionalProps {
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newTodo: string;
  addTodo: () => void;
  todos: Todo[];
  changeStatus: (index: number) => void;
}

export default function TodoPresintional({
  onValueChange,
  newTodo,
  addTodo,
  todos,
  changeStatus,
}: TodoPresintionalProps) {
  return (
    <div>
      <input
        value={newTodo}
        onChange={onValueChange}
        type="text"
        placeholder="type todo.."
      />
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {todos.map((todo, idx) => (
          <li
            key={idx}
            onClick={() => changeStatus(idx)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
