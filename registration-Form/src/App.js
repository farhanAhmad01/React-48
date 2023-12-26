import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [submited,setSubmited] = useState(false)
  const [valid,setValid] = useState(false)
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleFirstName = (e) => {
    setValues({...values,firstName:e.target.value})
  }
  const handleLastName = (e) => {
    setValues({...values,lastName:e.target.value})
  }
  const handleEmail = (e) => {
    setValues({...values,email:e.target.value})
  }

  const handleSubmit = (e) => {
     e.preventDefault();
     if(values.firstName && values.lastName && values.email){
      setValid(true)
     }
     setSubmited(true)
  }
  return (
    <div class="form-container" onSubmit={handleSubmit}>
      <form class="register-form">
        {submited && valid ?<div class="success-message">Success! Thank you for registering</div> : null } 
        <input
          id="first-name"
          value={values.firstName}
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleFirstName}
        />
        {submited && values.firstName ==="" ? <span id="first-name-error">Please enter a first name</span> : null} 
        <input
          id="last-name"
          value={values.lastName}
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleLastName}
        />
         {submited && values.lastName ==="" ?<span id="last-name-error">Please enter a last name</span> : null }
        <input
          id="email"
          value={values.email}
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmail}
        />
        {submited && values.email === "" ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
