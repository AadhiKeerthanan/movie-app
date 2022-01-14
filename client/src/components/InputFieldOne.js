import React, { useContext } from "react";
import { UserContext } from "../context/context";
import { InputGroup, FormControl } from "react-bootstrap";

export default function InputFieldOne() {
  const { loadFromApi } = useContext(UserContext);
  return (
    <InputGroup
      style={{
        marginTop: "100px",
      }}
      className="mb-3"
    >
      <FormControl
        onChange={loadFromApi}
        placeholder="Search for a movie"
        className="text-dark"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
}
