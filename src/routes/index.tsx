import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BeachDetails from '../pages/BeachDetails';
import SearchResults from '../pages/SearchResults';
import ContinentDirectory from '../pages/ContinentDirectory';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beach/:id" element={<BeachDetails />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/continent/:id" element={<ContinentDirectory />} />
    </Routes>
  );
};

export default AppRoutes;