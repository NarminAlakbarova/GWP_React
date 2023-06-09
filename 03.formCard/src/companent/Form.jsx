import { useState } from "react";
import Header from "./Header";
import axios from "axios";
const BASE_URL = "http://localhost:8080/movies";
const Form = () => {
  const [inputs, setInputs] = useState({
    title: "",
    year: "",
    imbd: "",
  });

  const handleSubmit = async (e) => {
    // console.log();
    e.preventDefault();
    setInputs({
      title: "",
      year: "",
      imbd: "",
    });
    await axios.post(BASE_URL, {
      Title:inputs.title,
      Year:inputs.year,
      imdbRating:inputs.imbd
    });
    setInputs({ title: "", year: "", imdb: "" });
    console.log(inputs);
  };
  // useEffect(()=>{
  //   handleSubmit()
  // },[])
  return (
    <div className="form">
      <Header />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
          placeholder=" Enter a movie name"
        />

        <label htmlFor="">Year</label>
        <input
          type="text"
          placeholder="Enter a Year..."
          value={inputs.year}
          onChange={(e) => setInputs({ ...inputs, year: e.target.value })}
        />
        <label htmlFor="">Genre</label>
        <input type="text" />
        <label htmlFor="">Language</label>
        <input type="text" placeholder="Enter a year" />
        <label htmlFor="">IMBD</label>
        <input
          type="text"
          placeholder="Enter a year"
          value={inputs.imbd}
          onChange={(e) => setInputs({ ...inputs, imbd: e.target.value })}
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
