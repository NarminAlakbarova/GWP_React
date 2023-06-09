import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Cards from "./component/Cards";
import { Route, Routes } from "react-router-dom";
import AddCard from "./component/AddCard";
import EditCard from "./component/EditCard";
import Header from "./component/Header";

const BASE_URL = "http://localhost:8080/movies";

function App() {
  const [movies, setMovies] = useState([]);

  const getAllData = async () => {
    let resp = await axios(BASE_URL);
    setMovies(resp.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/addcard" element={<AddCard />} />
        <Route path="/editcard/:id" element={<EditCard />} />
        <Route
          path="/cards"
          element={<Cards movies={movies} setMovies={setMovies} />}
        />

      </Routes>
    </div>
  );
}

export default App;
