import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{joke}</h1>
        <button className="button" onClick={fetchJoke}>
          <span>GIVE ME JOKE</span>
        </button>
      </div>
    </div>
  );
};

export default App;
