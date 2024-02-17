import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx"
import "./CSS/home.css";

function About(props) {
  return (
    <>
    <Header/>
      <aside className="home">
        <h1>Abount</h1>
      </aside>
      <Footer/>
    </>
  );
}
export default About;