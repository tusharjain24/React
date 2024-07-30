import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

export default function useTodo() {
  return useContext(TodoContext);
}
