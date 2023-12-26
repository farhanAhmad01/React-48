import { useState } from "react";
import "./App.css";
import jsonData from "./MOCK_DATA.json";
function App() {
  const [searchName, setSearchName] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        id="input"
        placeholder="Search...."
        onChange={(e) => setSearchName(e.target.value)}
      />
      {jsonData.filter((value)=>{
        if(searchName === ""){
          return value
        }else if (value.first_name.toLowerCase().includes(searchName.toLowerCase())){
          return value
        }
      }).map((user, key) => {
        return (
          <div key={key}>
            <p>{user.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
