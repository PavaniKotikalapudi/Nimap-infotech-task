import MovieList from '../Components/MovieList';
import React from 'react';

const HomePage = () => {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1`;

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList apiUrl={apiUrl} />
    </div>
  );
};

export default HomePage;
