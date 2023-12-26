import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import { MyContext } from "../App2";
import { useContext } from "react";

function Users() {
  let { data, dispatch } = useContext(MyContext);
  useEffect(() => {
    const fetch = async () => {
      try {
        let response = await axios.get(
          "https://657c4a59853beeefdb991bd2.mockapi.io/todos"
        );
        dispatch({ type: "addTodos", payload: response.data });
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetch();
  }, []);
  return (
    <div className="user-container">
      {data &&
        data.map((user, index) => {
          return (
            <div key={index}>
              {user && (
                <User
                  title={user.title}
                  description={user.description}
                  completed={user.completed}
                  id={user.id}
                />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Users;
