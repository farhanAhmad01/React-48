import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import User from "./User";
import { MyContext } from "../App";

function Users() {
  // const [data, setData] = useState();

  const {data, dispatch} = useContext(MyContext)
  console.log("data ", data)
  useEffect(() => {
    const fetch = async () => {
      try {
        let getData = await axios.get(
          "https://657c4a59853beeefdb991bd2.mockapi.io/todos"
        );
        let userData = getData.data;
        dispatch({type: "addTodos" , payload : userData});
      } catch (error) {
        console.log("error", error);
      }
    };

    fetch();
  }, []);
  return (
    <div className="user-container">
      {data &&
        data.map((user, index) => {
          return (
            <User user = {user} key = {index}/>
              
          );
        })}
    </div>

  );
}

export default Users;
