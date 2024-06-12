import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx"
// import { Link } from "react-router-dom";
import "./CSS/game.css";
import Cards from "../data/cards.js";
import { Link } from "react-router-dom";

function Game(props) {
    
    function getCards() {
        return Cards.map((card, i) => (
          <div className="card" key={i}>
              
            {card.url ? (
                <Link to={card.href} className="link-image">
                  <img src={card.url} alt={card.alt} width={'150px'}/>
            </Link>
            ) : (
              <Link to={card.href} className="link-image">
              <img src="https://i.ibb.co/7rJY454/user-Padrao.png" alt="Imagem Padrão" width={'100px'}/> 
            </Link>
            )}
            {/* <Link to={card.href}>Saber mais</Link> */}
          </div>
        ));
      }
      
  return (
    <section className="game">
    <Header/>
      <aside className="home">
        <div className="cards">
        {getCards()}
        </div>
      </aside>
      <Footer/>
    </section>
  );
}
export default Game;