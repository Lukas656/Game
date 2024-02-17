import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../views/Home.jsx";
import About from "../views/About.jsx";
import Game from "../views/Game.jsx";
import NotFound from "../views/NotFound.jsx";
import Batman from "../components/Persons/Batman.jsx";
import SuperMan from "../components/Persons/Superman.jsx";
import Akuma from "../components/Persons/Akuma.jsx";
import Coringa from "../components/Persons/Coringa.jsx";
import BlackBolt from "../components/Persons/BlackBolt.jsx";
import Alekao from "../components/Persons/Alekao.jsx";
import Dragon from "../components/Persons/Dragon.jsx";
import SamuraiJack from "../components/Persons/Samuraijack.jsx";
import Grog from "../components/Persons/Grog.jsx";
import Homelander from "../components/Persons/Homelander.jsx";
import OminiMan from "../components/Persons/Ominiman.jsx";
import SuperGril from "../components/Persons/Supergril.jsx";
import Hellboy from "./Persons/Hellboy.jsx";
import Atrocitus from "../components/Persons/Atrocitus.jsx";
import AdaoNegro from "../components/Persons/AdaoNegro.jsx";



const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/game" element={<Game />} />
      <Route path="/batman" element={<Batman />} />
      <Route path="/superman" element={<SuperMan />} />
      <Route path="/akuma" element={<Akuma />} />
      <Route path="/coringa" element={<Coringa />} />
      <Route path="/blackBolt" element={<BlackBolt />} />
      <Route path="/alekao" element={<Alekao />} />
      <Route path="/dragon" element={<Dragon />} />
      <Route path="/samuraijack" element={<SamuraiJack />} />
      <Route path="/grog" element={<Grog />} />
      <Route path="/homelander" element={<Homelander />} />
      <Route path="/ominiman" element={<OminiMan />} />
      <Route path="/supergril" element={<SuperGril />} />
      <Route path="/hellboy" element={<Hellboy />} />
      <Route path="/atrocitus" element={<Atrocitus />} />
      <Route path="/adaoNegro" element={<AdaoNegro />} />
    </Routes>
  </main>
);

export default Content;
