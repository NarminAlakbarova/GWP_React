import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
const BASE_URL = "http://localhost:8080/movies";
const AddCard = () => {
  const [formData, setFormData] = useState({
    Title: "",
    Year: "",
    imdbRating: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
   await axios.post(BASE_URL, formData);
   
  };

  return (
    <div>
      <h1>Add</h1>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddCard;
