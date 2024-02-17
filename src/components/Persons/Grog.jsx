import React from "react";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Cards from "../../data/cards.js";
import mobileVideo from "../../assets/Grog.mp4"; 
import './cards.css';



const Grog = (props) => {
  const personInfo = Cards.find(card => card.titulo === 'Grog');

  if (!personInfo) {
    return <div>Não foi possível encontrar informações sobre o Grog.</div>;
  }

  const { titulo, url, alt, descricao, habilidades } = personInfo;

  return (
    <main className="section-person">
      <Header />
      <h1>{titulo}</h1>
      <section className="apresentation">
        <video autoPlay muted loop className="video-background">
          {/* Adicione os vídeos para desktop e celular como fontes */}
          <source src={mobileVideo} type="video/mp4" className="video-person"/>
        </video>
        <div className="person-descricao">
        <h2>História:</h2>
          <p>{descricao}</p>

          <ul>
            <h2>Habilidades:</h2>
            {habilidades.map((habilidade, index) => (
              <li key={index}>{habilidade}</li>
            ))}
          </ul>
        </div>
      </section>
      <img src={url} alt={alt} className="img-person" />
      <p>Imagens & Videos geradas Por IA</p>
      <Footer />
    </main>
  );
};

export default Grog;
