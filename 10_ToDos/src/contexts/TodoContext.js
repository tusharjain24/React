/* eslint-disable no-unused-vars */
import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Test Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
