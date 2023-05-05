import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MyRecipes from './components/MyRecipes';
import RecipePage from './components/RecipePage';
import SearchResults from './components/SearchResults';
import Home from './HomePage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/search/:term" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
