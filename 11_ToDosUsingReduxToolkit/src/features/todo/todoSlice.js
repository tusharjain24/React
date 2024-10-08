import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid generates unique Id

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // Here comes properties and functions
    // I will get access to state and action in the function
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log(state.todos);
      console.log(action);
      state.todos = state.todos.filter(
        (eachTodo) => eachTodo.id !== action.payload
      );
      console.log(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const modifyTodo = state.todos.find((todo) => todo.id === id);
      if (modifyTodo) {
        modifyTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice;
