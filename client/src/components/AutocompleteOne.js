import React, { useContext } from "react";
import { UserContext } from "../context/context";
import axios from "axios";
import { Card, Image, Spinner } from "react-bootstrap";

export default function AutocompleteOne() {
  const {
    search,
    isLoading,
    setText,
    setShowMovieData,
    setDetails,
    setIsLoading,
  } = useContext(UserContext);

  const movieInfo = async (movId) => {
    try {
      setText("");
      setShowMovieData(true);
      setIsLoading(true);
      const response = await axios.post(
        "https://mini-movie-backend.herokuapp.com/moviedata",
        {
          movieId: movId,
        }
      );
      const movieDetials = response.data.movieData;
      setIsLoading(false);
      setDetails(movieDetials);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {search && !isLoading ? (
        search.map((movie) => {
          return (
            <Card
              style={{
                cursor: "pointer",
              }}
              key={movie.id}
              onClick={() => movieInfo(movie.id)}
            >
              <Card.Body className="text-dark d-flex p-2 justify-content-between align-items-center">
                <Image
                  style={{
                    width: "20px",
                  }}
                  rounded
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />{" "}
                {movie.original_title}
                <Card.Text>{movie.vote_average}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </div>
  );
}
