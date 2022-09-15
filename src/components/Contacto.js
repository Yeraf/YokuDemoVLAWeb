import React from "react";
import "../CSS/Contacto.css";
import Exito from "../img/ImageContacto/landing-copia-100.jpg";
import Logo from "../img/Icons/vlamerica-logo.png";
import Monitor from "../img/Icons/monitor.png";
import User from "../img/Icons/user.png";
import Graphic from "../img/Icons/graphic.png";

function Contacto() {
  return (
    <div className="">
      <article className="Contacto-article">
        <div className="contacto-img-text">
          <div>
            <img src={Exito} width="550px"></img>
          </div>
          <div className="contacto-div-text">
            <h4>
              Te preparamos con las habilidades que necesitas para un mejor
              futuro.
            </h4>
            <button className="btn btn-success contacto-button">
              Quiero información
            </button>
            {/* <img className="contacto-img-logo" src={Logo}></img> */}
          </div>
        </div>
      </article>
      <div className="contacto-div-icons">
          <div className="contacto-img-div">
            <img className="icons-contact" src={User}></img>
            <p className="contac-p"><b>+1800 estudiantes activos</b></p>
          </div>
          <div>
            <img className="icons-contact monitor" src={Monitor}></img>
            <p className="contac-p"><b>Clases en directo online</b></p>
          </div>
          <div>
            <img className="icons-contact" src={Graphic}></img>
            <p className="contac-p"><b>Convenios de empleos empresariales</b></p>
          </div>
        </div>
    </div>
  );
}

export default Contacto;
