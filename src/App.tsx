import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RecipePage from './components/RecipePage';
import { spaghettiCarbonara } from './DemoData/DemoRecipes';
import Home from './HomePage';

function App() {
  return (
    <Router>
      {
        <Header />
      }
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/recipes" element={<RecipePage {...spaghettiCarbonara} />} />
      </Routes>
    </Router>
  );
}

export default App;
