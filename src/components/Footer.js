import React from "react";
import '../CSS/Footer.css';
import Copa from '../img/Images/Copa Airlines.png';
import CableOnda from '../img/Images/Cable-onda.png';
import ROCCA from '../img/Images/Rocca.png';
import Auxios from '../img/Images/Auxix-logo.jpg';
import Concentrix from '../img/Images/concentrix.jpg';
import Fujitsu from '../img/Images/logo-fujitsu.png';


function Footer() {
  return (
    <div className="Footer-main">
      <div className="footer-taxt">
      <div className="footer-contact">
          
      </div>
        <h5 className="footer-h5">Copañías que confían  en VLA</h5>
        <div className="footer-img">
          <img className="img-footer" src={Copa}></img>
          <img className="img-footer" src={CableOnda}></img>
          <img className="img-footer" src={ROCCA}></img>
          <img className="img-footer" src={Auxios}></img>
          <img className="img-footer" src={Concentrix}></img>
          <img className="img-footer" src={Fujitsu}></img>
        </div>
        <p className="footer-p">Developep by &copy;YokuStudios 2022</p>
        <p className="footer-p">studiosyoku@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
