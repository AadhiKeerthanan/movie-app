import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import { UserContext } from "../context/context";
import { Spinner } from "react-bootstrap";

export default function MovieData() {
  const { details, isLoading } = useContext(UserContext);
  return (
    <ListGroup>
      {details && !isLoading ? (
        <>
          <ListGroup.Item className="p-4">
            Title: {details.original_title}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            IMDB Id: {details.imdb_id}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Budget: {details.budget}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Genres:{" "}
            {details.genres.map((genre, idx) => {
              return idx === details.genres.length - 1
                ? genre.name
                : genre.name + ", ";
            })}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Box Office: {details.revenue}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Runtime: {details.runtime} Minutes
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Release Date: {details.release_date}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Rating:{" "}
            <HiStar
              style={{
                color: "#e4572e",
                fontSize: "22px",
              }}
            />{" "}
            {details.vote_average}
          </ListGroup.Item>
        </>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </ListGroup>
  );
}
