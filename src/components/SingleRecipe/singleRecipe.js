import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import dish2 from "../../assets/dish2.jpg";
import "./singleRecipe.css";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../constants/constant";
import axios from "axios";
const SingleRecipe = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
    axios
      .get(
        `${API_URL}/recipes/${params.id}/information?number=10&apiKey=${API_KEY}`
      )
      .then((res) => {
        setRecipe(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <section className="single-recipe">
      <Header />
      <div className="single-recipe-container">
        <div className="recipe-image">
          <img src={recipe.image} alt="" />
        </div>
        <div className="recipe-info">
          <h2>{recipe.title}</h2>

          <div className="recipe-tabs">
            <h4
              onClick={() => setSelectedTab(0)}
              className={selectedTab == 0 ? "selected-tab" : "tab"}
            >
              Ingredients
            </h4>
            <h4
              onClick={() => setSelectedTab(1)}
              className={selectedTab == 1 ? "selected-tab" : "tab"}
            >
              Recipe
            </h4>
          </div>
          {selectedTab == 0 ? (
            <div className="ingredients">
              <ul>
                {recipe?.extendedIngredients &&
                  recipe?.extendedIngredients.map((ing) => <li>{ing.name}</li>)}
              </ul>
            </div>
          ) : (
            <div className="recipe">
              <p>${recipe.instructions}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default SingleRecipe;
