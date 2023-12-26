import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../App";

function User({ user }) {
    const {dispatch} = useContext(MyContext)
  const Delete = async () => {
    try {
      //   const response = await fetch(
      //     "https://657c4a59853beeefdb991bd2.mockapi.io/todos/" + user.id,
      //     {
      //       method: "DELETE",
      //       headers: {
      //         "Content-Type": "application/json", // Specify the content type as JSON
      //       },
      //     }
      //   );

         await axios.delete(
        "https://657c4a59853beeefdb991bd2.mockapi.io/todos/" + user.id
      );

      dispatch({type : "delete", payload : user.id})
      
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <div className={user.completed ? "container completed" : "container"}>
        <p> {user.title}</p>
        <p> {user.description}</p>
        <p> {user.completed}</p>
        <button onClick={Delete}>Delete</button>
        <br />
        <br />
        <button>Edit</button>
      </div>
    </div>
  );
}

export default User;
