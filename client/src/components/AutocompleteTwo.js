import React, { useContext } from "react";
import { UserContext } from "../context/context";
import axios from "axios";
import { Card, Image, Spinner } from "react-bootstrap";

export default function AutocompleteTwo() {
  const {
    searchTwo,
    isLoadingTwo,
    setTextTwo,
    setShowMovieDataTwo,
    setDetailsTwo,
    setIsLoadingTwo,
  } = useContext(UserContext);

  const movieInfoTwo = async (movId) => {
    try {
      setTextTwo("");
      setShowMovieDataTwo(true);
      setIsLoadingTwo(true);
      const response = await axios.post(
        "https://mini-movie-backend.herokuapp.com/moviedata",
        {
          movieId: movId,
        }
      );
      const movieDetials = response.data.movieData;
      setIsLoadingTwo(false);
      setDetailsTwo(movieDetials);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {searchTwo && !isLoadingTwo ? (
        searchTwo.map((movie) => {
          return (
            <Card
              style={{
                cursor: "pointer",
              }}
              key={movie.id}
              onClick={() => movieInfoTwo(movie.id)}
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
