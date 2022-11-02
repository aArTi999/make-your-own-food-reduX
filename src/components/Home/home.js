import React from "react";
import Header from "../Header/header";
import "./home.css";
import welcomeImg from "../../assets/welcome.gif";
import hungry from "../../assets/hungry.gif";
import arrow from "../../assets/arrow.png";
import make from "../../assets/make.jpg";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home">
      <Header />
      <div className="main-container">
        <div className="heading">
          <img src={welcomeImg} alt="" />
        </div>
        <div className="content">
          <img src={hungry} alt="" height="150px" />
          <img src={arrow} alt="" height="70px" className="arrow" />
          <img
            src={make}
            alt=""
            height="150px"
            onClick={() => navigate("/recipies")}
          />
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
