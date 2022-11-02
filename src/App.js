import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Recipies from "./components/Recipies/recipies";
import SingleRecipe from "./components/SingleRecipe/singleRecipe";
import "./App.css";
import "./responsive.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/single-recipe/:id" element={<SingleRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
