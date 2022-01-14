require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const apiKey = process.env.API_KEY;

app.post("/searchmovies", async (req, res) => {
  // Send a request to the movie api
  console.log(req.body);
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${req.body.title}&page=1`
  );
  return res.json({
    result: response.data.results,
  });
});

app.post("/moviedata", async (req, res) => {
  console.log(req.body);
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${req.body.movieId}?api_key=${apiKey}&language=en-US`
  );
  return res.json({
    movieData: response.data,
  });
});

app.listen(process.env.PORT || 8001, () => {
  console.log("Server up and running");
});
