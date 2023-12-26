import { useState } from "react";
import "./index.css";

function App() {
  const [temperture, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");
  function increment() {
    if (temperture >= 30) return;
    let temperatureIncrement = temperture + 1;
    if (temperatureIncrement >= 15) {
      setColor("hot");
    }
    setTemperature(temperatureIncrement);
  }

  function decrement() {
    if (temperture <= 0) return;
    let temperatureIncrement = temperture - 1;
    if (temperatureIncrement < 15) {
      setColor("cold");
    }
    setTemperature(temperatureIncrement);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperture} C</div>
        <div className="button-container">
          <button onClick={() => increment()}>+</button>
          <button onClick={() => decrement()}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
