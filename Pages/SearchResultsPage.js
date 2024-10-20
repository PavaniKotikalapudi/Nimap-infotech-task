import React, { useEffect, useState } from 'react';

import MovieList from '../Components/MovieList';
import { useSearchParams } from 'react-router-dom';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    if (query) {
      setApiUrl(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=1`);
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {apiUrl && <MovieList apiUrl={apiUrl} />}
    </div>
  );
};

export default SearchResultsPage;
