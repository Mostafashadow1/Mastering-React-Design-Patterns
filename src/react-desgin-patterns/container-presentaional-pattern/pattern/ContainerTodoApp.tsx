import React, { useState } from "react";
import PresentaionalTodoApp from "./PresentaionalTodoApp";

export type Todo = {
  text: string;
  completed: boolean;
};
export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const changeStatus = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <PresentaionalTodoApp
      newTodo={newTodo}
      todos={todos}
      changeStatus={changeStatus}
      onValueChange={onValueChange}
      addTodo={addTodo}
    />
  );
}
