import React from "react";

const Form = ({ formData, onChange, onSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="Title"
          value={formData.Title}
          onChange={onChange}
        />
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="Year"
          value={formData.Year}
          onChange={onChange}
        />
        <label htmlFor="imdb">IMDB</label>
        <input
          type="text"
          id="imdb"
          name="imdbRating"
          value={formData.imdbRating}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
