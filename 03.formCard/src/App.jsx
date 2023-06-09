import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./companent/Movies";
import axios from "axios"
import Header from "./companent/Header";
import Form from "./companent/Form";
const BASE_URL = "http://localhost:8080/movies";
function App() {
  const [data, setData] = useState([]);
  const getAllData = async () => {
    let resp = await axios(BASE_URL);
    let data = resp.data;
    setData(data);
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
    <Form/>
    <Header/>
      <Movies data={data} setData={setData} BASE_URL={BASE_URL}/>
    </>
  );
}

export default App;
