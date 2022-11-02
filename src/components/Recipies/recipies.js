import React, { useEffect, useState } from "react";
import Header from "../Header/header";
import "./recipies.css";
import dish1 from "../../assets/dish1.jpg";
import dish2 from "../../assets/dish2.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY, cuisines } from "../../constants/constant";
const Recipies = () => {
  const navigate = useNavigate();
  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    axios
      .get(`${API_URL}/recipes/random?number=10&apiKey=${API_KEY}`)
      .then((res) => {
        setRecipies(res.data.recipes);
        console.log(res.data);
      });
  }, []);

  const searchRecipies = () => {
    setRecipies([]);
    axios
      .get(`${API_URL}/recipes/complexSearch?query=${search}&apiKey=${API_KEY}`)
      .then((res) => {
        setRecipies(res.data.results);
        console.log(res.data);
      });
  };

  const onSearch = (e) => {
    if (e.key == "Enter") {
      searchRecipies();
    }
  };

  const getRecepiesByCuisine = (cuisine) => {
    setRecipies([]);
    axios
      .get(
        `${API_URL}/recipes/complexSearch?cuisine=${cuisine}&number=15&apiKey=${API_KEY}`
      )
      .then((res) => {
        setRecipies(res.data.results);
        console.log(res.data);
      });
  };
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  return (
    <section className="recipies">
      <Header toggleNav={toggleNav} />
      {isNavOpen ? (
        <div className="side-bar">
          <div className="nav-cuisines">
            <div className="nav-cuisine-cards">
              {cuisines.map((cuisine) => (
                <div
                  className="cuisine-card"
                  onClick={() => {
                    toggleNav();
                    getRecepiesByCuisine(cuisine);
                  }}
                >
                  <img src={dish2} alt="" height="40px" />
                  <h3>{cuisine}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="recipies-container">
        <div className="search-bar">
          <input
            type="search"
            onKeyDown={(e) => onSearch(e)}
            placeholder="Enter your favorite cuisines"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="cuisine-cards">
          {cuisines.map((cuisine) => (
            <div
              className="cuisine-card"
              onClick={() => getRecepiesByCuisine(cuisine)}
            >
              <img src={dish2} alt="" height="40px" />
              <h3>{cuisine}</h3>
            </div>
          ))}
        </div>

        <div className="recipe-cards">
          {recipies.map((recipe) => (
            <div
              className="recipe-card"
              onClick={() => navigate(`/single-recipe/${recipe.id}`)}
              key={recipe.id}
            >
              <h4>{recipe.title}</h4>
              <img src={recipe.image} alt="" className="recipe-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Recipies;
