import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../videos/video-1.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>AVENTURA ESPERA</h1>
      <p>O que você está esperando?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          INICIAR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          ASSISTIR TRAILER <i classname="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
