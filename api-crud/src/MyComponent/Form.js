import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../App2";

function Form() {
  const {data,dispatch} = useContext(MyContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message,setMessage] = useState()
  const post = async () => {
    let url = "https://657c4a59853beeefdb991bd2.mockapi.io/todos/";
    let postTodo = {
      title: title,
      description: description,
    }
    try {
      let response = await axios.post(url, postTodo);
      console.log(response);
      dispatch({type:"addTodo", payload:response.data})
      setDescription('')
      setTitle('')
    } catch (err) {
      setMessage(err.message)
      console.log(err.message);
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={post}>AddTodo</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;
