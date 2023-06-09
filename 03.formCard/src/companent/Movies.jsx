import React from "react";
import Movie from "./Movie";
import axios from "axios";

const Movies = ({ data, setData, BASE_URL }) => {
  const handleDlete = (moviId) => {
    axios.delete(`${BASE_URL} / ${moviId}`);
    let filteredData = data.filter((item) => item.id !== moviId);
    setData(filteredData);
  };
  return (
    <div className="movies">
      {data.map((obj) => {
        return <Movie key={obj.id} obj={obj} handleDlete={handleDlete} />;
      })}
    </div>
  );
};

export default Movies;
