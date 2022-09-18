import React from "react";
import "../CSS/Team.css";
import "../CSS/swiper-bundle.min.css";
import User1 from "../img/ImagesTeam/user1.jpg";
import User2 from "../img/ImagesTeam/user2.jpg";
import User3 from "../img/ImagesTeam/user3.jpeg";
import User4 from "../img/ImagesTeam/user4.jpg";
import {Flip} from 'react-reveal';

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
      </article>
      <div className="contenedor-team-cards">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <Flip>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area"><img src={User1} alt=""></img></div>
                        <div className="img-text">
                          <h2>Person one</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                    </Flip>
                    <Flip>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={User2} alt=""></img>
                        </div>
                        <div className="img-text">
                          <h2>Person Two</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                    </Flip>
                    <Flip>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={User3} alt=""></img>
                        </div>
                        <div className="img-text">
                          <h2>Person Three</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                    </Flip>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={User4} alt=""></img>
                        </div>
                        <div className="img-text">
                          <h2>Person Four</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={User2} alt=""></img>
                        </div>
                        <div className="img-text">
                          <h2>Person Five</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={User1} alt=""></img>
                        </div>
                        <div className="img-text">
                          <h2>Person Six</h2>
                          <p>person@onegmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Empleados;
