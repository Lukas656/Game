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
        <h3>Mortal kombat 11 | injustice 2 | Street Fighter 6</h3>
    <div class="content">
        <div class="incons">
        <img src="https://i.ibb.co/hRdbG8g/pngwing-com.png" alt="" srcset="" width="8%"/>
        <img src="https://i.ibb.co/gR0YK6X/pngwing-com-1.png" alt="" srcset=""width="7%"/>
        <img src="https://i.ibb.co/dgQ8bgx/Street-fighter-6-logo.png" alt="" width="7%"/>
    </div>
        <h2>Welcome to the Game!</h2>
        <p>The best fighters from your favorite games gathered in one place!.</p>
    </div>
      </aside>
      <Footer/>
    </>
  );
}
export default Home;