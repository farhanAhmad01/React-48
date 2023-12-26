import React, { createContext, useReducer } from "react";
import Users from "./MyComponent/Users";
import Form from "./MyComponent/Form";

export const MyContext = createContext();

let initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "addTodos":
      return [...action.payload];
    case "addTodo":
      return [action.payload, ...state];
    case "deleteTodo":
      return state.filter((todo) => todo.id !== action.payload.id);

    case "editTodo":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            }
          : todo
      );

    default:
      return state;
  }
};

function App2() {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <MyContext.Provider value={{ data, dispatch }}>
        <Form />
        <Users />
      </MyContext.Provider>
    </div>
  );
}

export default App2;
