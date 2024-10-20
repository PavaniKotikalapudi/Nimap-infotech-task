import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      setMovie(data);
    };

    const fetchMovieCast = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`);
      const data = await response.json();
      setCast(data.cast);
    };

    fetchMovieDetail();
    fetchMovieCast();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ display: 'flex', padding: '20px', color: '#fff' }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '300px', borderRadius: '10px', marginRight: '20px' }}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>Release Date: {movie.release_date}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Cast</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cast.map((actor) => (
            <div key={actor.id} style={{ margin: '10px', textAlign: 'center' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                style={{ width: '100px', borderRadius: '50%' }}
              />
              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
