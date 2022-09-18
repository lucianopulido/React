import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { type: "Add Todo", payload: todo };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = { type: "Remove Todo", payload: id };
    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = { type: "Toggle Todo", payload: id };
    dispatchTodo(action);
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
