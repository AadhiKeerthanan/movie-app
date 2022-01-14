import React, { useContext, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieData from "../components/MovieData";
import MovieDataTwo from "../components/MovieDataTwo";
import { UserContext } from "../context/context";
import InputFieldOne from "../components/InputFieldOne";
import InputFieldTwo from "../components/InputFieldTwo";
import AutocompleteOne from "../components/AutocompleteOne";
import AutocompleteTwo from "../components/AutocompleteTwo";

export default function Home() {
  const { text, showMovieData, showMovieDataTwo, textTwo } =
    useContext(UserContext);
  const resultsRef = useRef();

  return (
    <Container>
      <Row>
        <Col>
          <InputFieldOne />
          <div
            ref={resultsRef}
            className={text === "" ? "hide-autocomplete" : "show-autocomplete"}
          >
            <AutocompleteOne />
          </div>
          {showMovieData ? <MovieData /> : <div></div>}
        </Col>
        <Col>
          <InputFieldTwo />
          <div
            className={
              textTwo === "" ? "hide-autocomplete" : "show-autocomplete"
            }
          >
            <AutocompleteTwo />
          </div>
          {showMovieDataTwo ? <MovieDataTwo /> : <div></div>}
        </Col>
      </Row>
    </Container>
  );
}
