import './MovieList.css';

import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

const MovieList = ({ apiUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [apiUrl]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
