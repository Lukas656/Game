import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx"
import "./CSS/notfound.css";
import { Link } from "react-router-dom";

function NotFound(props) {
  return (
    <>
      <aside className="not-found">
        <h1>Ops.. Pagina não Encontrada...</h1>
        <Link to="/" class="menu-item">Voltar</Link>
      </aside>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}
export default NotFound;
