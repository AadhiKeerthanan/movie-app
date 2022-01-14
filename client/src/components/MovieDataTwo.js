import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import { UserContext } from "../context/context";
import { Spinner } from "react-bootstrap";

export default function MovieDataTwo() {
  const { detailsTwo, isLoadingTwo } = useContext(UserContext);
  return (
    <ListGroup>
      {detailsTwo && !isLoadingTwo ? (
        <>
          <ListGroup.Item className="p-4">
            Title: {detailsTwo.original_title}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            IMDB Id: {detailsTwo.imdb_id}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Budget: {detailsTwo.budget}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Genres:{" "}
            {detailsTwo.genres.map((genre, idx) => {
              return idx === detailsTwo.genres.length - 1
                ? genre.name
                : genre.name + ", ";
            })}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Box Office: {detailsTwo.revenue}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Runtime: {detailsTwo.runtime} Minutes
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Release Date: {detailsTwo.release_date}
          </ListGroup.Item>
          <ListGroup.Item className="p-4">
            Rating:{" "}
            <HiStar
              style={{
                color: "#e4572e",
                fontSize: "22px",
              }}
            />{" "}
            {detailsTwo.vote_average}
          </ListGroup.Item>
        </>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </ListGroup>
  );
}
