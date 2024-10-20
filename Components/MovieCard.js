import './MovieCard.css';

import { Link } from 'react-router-dom';
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;
