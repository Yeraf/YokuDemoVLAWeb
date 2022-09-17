import React from "react";
import "../CSS/Team.css";
import "../CSS/swiper-bundle.min.css";
import "../JS/swiper-bundle.min.js";
import User1 from "../img/ImagesTeam/user1.jpg";
import User2 from "../img/ImagesTeam/user2.jpg";
import User3 from "../img/ImagesTeam/user3.jpeg";
import User4 from "../img/ImagesTeam/user4.jpg";

function Empleados() {
  return (
    <div>
      <article className="principal-team-contenedor">
        <div className="div-team-text">
          <h1>Conozca a nuestros Asesores Profesionales</h1>
          <p className="p-team-text">
            Contamos con un gran equipo de personas dispuestas a ayudarle a
            lograr su meta por medio de la educación. Actualmente contamos con
            asesores de distintas nacionalidades a lo largo del continente,
            México, Nicaragua, Costa Rica, Colombia, Venezuela y Argentina son
            parte de los países de los que ellos proceden y residen. Cualquier
            duda o consulta, no dude en contactar a su Asesor Profesional
            asignado, estamos para servirle.{" "}
          </p>
        </div>
        <div className="slide-container">
            <div className="slide-content">
              <div className="card-wrapper">
                <div className="card">
                  <div className="image-content">
                    <span className="overlay"></span>
                    <div className="card-image">
                      <img src={User1} alt="" className="card-img"></img>
                    </div>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Nahuel Soprano</h2>
                    <p className="description">asoprano@grupovla.com</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </article>
    </div>
  );
}

export default Empleados;
