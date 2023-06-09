
import Card from "./Card"
const Cards = ({ movies }) => {
  return (
    <div className="cards">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Cards;
