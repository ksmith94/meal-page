import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import IngredientList from './components/GroceryList';
import MyRecipes from './components/MyRecipes';
import RecipePage from './components/RecipePage';
import SearchResults from './components/SearchResults';
import Home from './HomePage';
import CreateMealPlan from './components/CreateMealPlan';
import YourMealPlan from './components/YourMealPlan';
import CreateRecipe from './components/CreateRecipe';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
        <Route path="/search/:term" element={<SearchResults />} />
        <Route path="/ingredients" element={<IngredientList />} />
        <Route path="/create-meal-plan" element={<CreateMealPlan />} />
        <Route path="/your-meal-plan/:id" element={<YourMealPlan />} />
        <Route path="/create-a-recipe" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
