import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import React from 'react';
import SearchResultsPage from './Pages/SearchResultsPage';
import SingleMoviePage from './Pages/SingleMoviePage';
import TopRatedPage from './Pages/TopRatedPage';
import UpcomingPage from './Pages/UpcomingPages';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
