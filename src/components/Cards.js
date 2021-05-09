import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import foto1 from "../images/img-9.jpg";
import foto2 from "../images/img-2.jpg";
import foto3 from "../images/img-3.jpg";
import foto4 from "../images/img-4.jpg";
import foto5 from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Checa só essas Viagens INCRÍVEIS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={foto1}
              text="Explore a cachoeira escondida dentro da Floresta Amazônica"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src={foto2}
              text="Viaje pelas Ilhas de Bali em um Cruzeiro Privado"
              label="Luxo"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={foto3}
              text="Zarpe pelo Oceano Atlântico visitando Águas Inexploradas"
              label="Mistério"
              path="/services"
            />
            <CardItem
              src={foto4}
              text="Experimente jogar Futebol no topo das Montanhas do Himalaia"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src={foto5}
              text="Caminhe pelo Deserto do Saara em um tour guiado de camelo"
              label="Adrenalina"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
