import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Junte-se ao newsletter do Adventure para receber nossas melhores
          ofertas
        </p>
        <p className="footer-subscription-text">
          Você pode se desinscrever quando quiser.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Inscreva-se</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Sobre nós</h2>
            <Link to="/sign-up">Como funciona</Link>
            <Link to="/">Testemunhos</Link>
            <Link to="/">Carreira</Link>
            <Link to="/">Investidores</Link>
            <Link to="/">Termos de serviço</Link>
          </div>
          <div class="footer-link-items">
            <h2>Fale Conosco</h2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Parcerias</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Envie seu video</Link>
            <Link to="/">Embaixadores</Link>
            <Link to="/">Agência</Link>
            <Link to="/">Influencers</Link>
          </div>
          <div class="footer-link-items">
            <h2>Redes Sociais</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">TRVL © 2021 </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
