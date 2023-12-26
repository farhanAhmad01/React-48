import React, { useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";
import { useContext } from "react";
import { MyContext } from "../App2";

function User({ title, description, completed, id }) {
  const {dispatch} = useContext(MyContext)
  const [isEdit, setIsEdit] = useState(false);

  const deletePost = async () => {
    let url = " https://657c4a59853beeefdb991bd2.mockapi.io/todos/";
    try {
      let response = await axios.delete(url + id);
       dispatch({type:"deleteTodo",payload:response.data})
    } catch (err) {
      console.log(err.message);
    }
  };
  
  
  return (
    <div className="container">
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <button onClick={deletePost}>Delete</button>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {isEdit && (
        <EditForm
          title={title}
          description={description}
          id={id}
          onCancel={() => setIsEdit(false)}
        />
      )}
    </div>
  );
}

export default User;
