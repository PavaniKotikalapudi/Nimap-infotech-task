import './Navbar.css';

import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
};

export default Navbar;
