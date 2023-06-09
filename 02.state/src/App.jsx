import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./companent/Cards";
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    let resp = await axios(BASE_URL);
    let data = resp.data;
    setUsers(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="App">
        
        <h1>Vite.js</h1>
        <Cards users={users}/>
      </div>
    </>
  );
}

export default App;
