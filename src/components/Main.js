import React from "react";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Englihs from '../img/Images/img-englihs.jpg';
import Cisco from '../img/Images/cisco2.jpg';
import Conocimiento from '../img/Images/prueba-conocimientos.jpg';
import '../CSS/Main.css';
import Main5 from "./Main5";

function Main() {
  return (
    <div>
    <div className="main-main">
      <article className="article-main">
        <div className="main1-article">
        <h1 className="h1-main-article animate__animated animate__bounce">TU CAMINO HACIA EL ÉXITO</h1>
        <p className="p-main-article">
          Las empresas buscan personas con habilidades informáticas,
          gerenciales, de idiomas y mercadeo digital. Aprende con las clases
          100% en vivo por Internet de VLA. Tu rumbo a un mejor empleo empieza
          aquí.
        </p>
        <button className="btn btn-info botones-main-article">Ver Cursos</button>
        <button className="btn btn-warning botones-main-article">Clase Gratis</button>
        </div>
      </article>
      <div className="">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Englihs} className="d-block main-h5-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Inglés</h5>
                <p>
                  Abre las puertas a más oportunidades.
                </p>
                <button className="btn btn-warning">Comienza ya</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Cisco} className="d-block main-h5-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Inicia tu carrera en Cisco</h5>
                <p>
                  70% de descuento en boucher del examen de certificación.
                </p>
                <button className="btn btn-warning">Comienza ya</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Conocimiento} className="d-block main-h5-img" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Prueba tus conocimientos</h5>
                <p>
                  Demuestra tus habilidades con los siguientes test de Excel, Linux, CCNA, VMWare, Inglés y Portugués.
                </p>
                <button className="btn btn-warning">Realizar Test</button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
    <Main2/>
    <Main3/>
    <Main4/>
    <Main5/>
    </div>
  );
}

export default Main;
