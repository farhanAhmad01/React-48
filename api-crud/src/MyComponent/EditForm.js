import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../App2";
function EditForm({ title, description, id, onCancel }) {
  const {dispatch} = useContext(MyContext)
  const [Title, setTitle] = useState(title);
  const [Description, setDescription] = useState(description);
const editPost = async () => {


    let url = " https://657c4a59853beeefdb991bd2.mockapi.io/todos/";
    let editTodo = {
        title:Title,
      description:Description,
    };
    try {
      let response = await axios.put(url + id, editTodo);
      dispatch({type:"editTodo",payload:response.data})

    } catch (err) {
      console.log(err.message);
    }

    onCancel();

  };

  return (
    <div className="container">
      <input type="text" value={Title}  onChange={(e)=>setTitle(e.target.value) } />
      <input type="text" value={Description} onChange={(e) =>setDescription(e.target.value)}/>
      <button onClick={editPost} >EditTodo</button>
    </div>
  );
}

export default EditForm;
