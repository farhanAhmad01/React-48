import React, { useReducer, createContext } from "react";
import Users from "./Component/Users";
import Form from "./Component/Form";

const initalState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addTodos":
      return [...action.payload];

    case "addTodo":
      console.log(state, action);
      return [action.payload, ...state];

    case "delete":
      const filtered = state.filter((todo) => todo.id != action.payload);
      return filtered;
    case "deleteAll":
      return [];
    default:
      return state;
  }
};

// context api

export const MyContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, initalState);
  return (
    <>
      <MyContext.Provider value={{ data, dispatch }}>
        <Form />
        <Users />
      </MyContext.Provider>
    </>
  );
}
export default App;
