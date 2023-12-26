import axios from "axios";
import React, { useContext, useState } from "react";
import { MyContext } from "../App";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState();

  const { data, dispatch } = useContext(MyContext);

  const show = async () => {
    try {
      //   const response = await fetch(
      //     "https://657c4a59853beeefdb991bd2.mockapi.io/todos",
      //     {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json", // Specify the content type as JSON
      //       },
      //       body: JSON.stringify({
      //         title: title,
      //         description: description,
      //         completed: false,
      //       }),
      //     }
      //   );

      const response = await axios.post(
        "https://657c4a59853beeefdb991bd2.mockapi.io/todos",
        { title: title, description: description, completed: false }
      );
      dispatch({ type: "addTodo", payload: response.data });

      setTitle("");
      setDescription("");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const deleteAll = () => {
    dispatch({ type: "deleteAll" });
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

      <button disabled={title === "" || description === ""} onClick={show}>
        Add Todo
      </button>

      <button disabled={data.length === 0 } onClick={deleteAll}>
        Delete All
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Form;
