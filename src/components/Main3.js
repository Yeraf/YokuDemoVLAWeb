import React from "react";
import "../CSS/Main3.css";
import Zoom from "../img/Images/zoom.jpg";

function Main3() {
  return (
    <div className="main3-zoom">
      <img className="main3-img-zoom" src={Zoom}></img>
      <article className="main3-article">
        <div className="main3-div-text">
        <h5 class="animate__swing">Empieza hoy</h5>
        <h2 className="main3-h2-article">Solicita una clase gratuita</h2>
        <p>
          <b>Toma una clase gratis y vive la experiencia VLA.</b> <br/>El 87 % de las
          personas que aprenden para el desarrollo profesional <br/> reportan haber
          obtenido un ascenso, un aumento o comenzar una mejor carrera.
        </p>
        <button className="btn btn-info">Elige tu clase gratis</button>
        </div>
      </article>
    </div>
  );
}

export default Main3;
