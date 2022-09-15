import React from "react";
import "../CSS/Footer.css";
import {Link} from 'react-router-dom';
import Copa from "../img/Images/Copa Airlines.png";
import CableOnda from "../img/Images/Cable-onda.png";
import ROCCA from "../img/Images/Rocca.png";
import Auxios from "../img/Images/Auxix-logo.jpg";
import Concentrix from "../img/Images/concentrix.jpg";
import Fujitsu from "../img/Images/logo-fujitsu.png";
import CR from "../img/Flag/costa-rica.png";
import Panama from "../img/Flag/panama.png";
import Spain from "../img/Flag/spain.png";
import Usa from "../img/Flag/united-states.png";
import Face from "../img/Icons/facebook.png";
import Instagram from "../img/Icons/instagram1.png";
import Linkedin from "../img/Icons/linkedin.png";
import Tiktok from "../img/Icons/tik-tok.png";

function Footer() {
  return (
    <footer>
    <div className="Footer-main">
      <div className="footer-taxt">
        <h5 className="footer-h5">Contactos</h5>
        <div className="footer-contact">
          <img className="img-flag" src={CR}></img>
          <p className="footer-p-numbers">+506 4102 3282</p>
          <img className="img-flag" src={Panama}></img>
          <p className="footer-p-numbers">+507 833-5602</p>
          <img className="img-flag" src={Spain}></img>
          <p className="footer-p-numbers">+34 911 23 5522</p>
          <img className="img-flag" src={Usa}></img>
          <p className="footer-p-numbers">+1 786-633-4717</p>
        </div>
        <h5 className="footer-h5-companias">Copañías que confían en VLA</h5>
        <div className="footer-img">
          <img className="img-footer" src={Copa}></img>
          <img className="img-footer" src={CableOnda}></img>
          <img className="img-footer" src={ROCCA}></img>
          <img className="img-footer" src={Auxios}></img>
          <img className="img-footer" src={Concentrix}></img>
          <img className="img-footer" src={Fujitsu}></img>
        </div>
        <div className="footer-media">
          <a className="footer-a-media">
            <img className="footer-img-media" src={Face}></img>
          </a>
          <a className="footer-a-media">
            <img className="footer-img-media" src={Instagram}></img>
          </a>
          <a className="footer-a-media">
            <img className="footer-img-media" src={Tiktok}></img>
          </a>
          <a className="footer-a-media">
            <img className="footer-img-media" src={Linkedin}></img>
          </a>
        </div>
        <p className="footer-p">
          developep by &copy; YokuStudios 2022 / studiosyoku@gmail.com
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
