import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import RecipePage from './components/RecipePage';
import { spaghettiCarbonara, spicyGoatCheesePasta } from './DemoData/DemoRecipes';
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
        <Route path = "/recipe/:id" element={<RecipePage {...spicyGoatCheesePasta}/>} />
      </Routes>
    </Router>
  );
}

export default App;
