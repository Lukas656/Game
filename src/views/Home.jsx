import React from "react";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx"
import "./CSS/home.css";

function Home(props) {
  return (
    <>
      <aside className="home">
    <Header/>
    <h1>The Grand Arena</h1>
        <h2>Mortal kombat 11 | injustice 2 | Street Fighter 6</h2>
    <div class="content">
        <div class="incons">
        <img src="https://i.ibb.co/hRdbG8g/pngwing-com.png" alt="" srcset="" width="10%"/>
        <img src="https://i.ibb.co/gR0YK6X/pngwing-com-1.png" alt="" srcset=""width="10%"/>
        <img src="https://i.ibb.co/dgQ8bgx/Street-fighter-6-logo.png" alt="" width="15%"/>
    </div>
        <h3>Welcome to the Game!</h3>
        <p>The best fighters from your favorite games gathered in one place!.</p>
    </div>
      </aside>
      <Footer/>
    </>
  );
}
export default Home;