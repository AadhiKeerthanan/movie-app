import { createContext, useCallback, useState } from "react";
import axios from "axios";
import _ from "lodash";

export const UserContext = createContext();

function UserContextProvider(props) {
  // Create a state for user
  const [details, setDetails] = useState(null);
  const [detailsTwo, setDetailsTwo] = useState(null);
  const [showMovieData, setShowMovieData] = useState(false);
  const [showMovieDataTwo, setShowMovieDataTwo] = useState(false);
  const [search, setSearch] = useState(null);
  const [searchTwo, setSearchTwo] = useState(null);
  const [text, setText] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);

  // eslint-disable-next-line
  const loadFromApi = useCallback(
    _.debounce(async (e) => {
      setShowMovieData(false);
      if (e.target.value === "") {
        setText("");
        return [];
      }
      setText(e.target.value);
      setIsLoading(true);
      const response = await axios.post(
        "https://mini-movie-backend.herokuapp.com/searchmovies",
        {
          title: e.target.value,
        }
      );
      console.log(response.data);
      const lists = response.data.result;
      console.log("api call has been made", lists);
      setIsLoading(false);
      setSearch(lists);
    }, 500),
    []
  );

  // eslint-disable-next-line
  const loadFromApiTwo = useCallback(
    _.debounce(async (e) => {
      setShowMovieDataTwo(false);
      if (e.target.value === "") {
        setTextTwo("");
        return [];
      }
      setTextTwo(e.target.value);
      setIsLoadingTwo(true);
      const response = await axios.post(
        "https://mini-movie-backend.herokuapp.com/searchmovies",
        {
          title: e.target.value,
        }
      );
      const lists = response.data.result;
      console.log("api call has been made", lists);
      setIsLoadingTwo(false);
      setSearchTwo(lists);
    }, 500),
    []
  );

  return (
    <UserContext.Provider
      value={{
        loadFromApi,
        text,
        search,
        setText,
        showMovieData,
        setShowMovieData,
        isLoading,
        setIsLoading,
        details,
        setDetails,
        loadFromApiTwo,
        showMovieDataTwo,
        setShowMovieDataTwo,
        isLoadingTwo,
        setIsLoadingTwo,
        textTwo,
        setTextTwo,
        searchTwo,
        detailsTwo,
        setDetailsTwo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
