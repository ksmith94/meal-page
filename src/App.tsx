import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MyRecipes from './components/MyRecipes';
import RecipePage from './components/RecipePage';
import recipes from './DemoData/DemoRecipes';
import Home from './HomePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/recipes" element={<RecipePage {...recipes[0]} />} />
        <Route path="/recipe/:id" element={<RecipePage {...recipes[0]}/>} />
        <Route path="/myrecipes" element={<MyRecipes {...recipes} />} />
      </Routes>
    </Router>
  );
}

export default App;
