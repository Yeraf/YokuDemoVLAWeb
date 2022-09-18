import React from "react";
import "../CSS/Cursos.css";
import icon from "../img/Icons/check-mark.png";
import Marketing from "../img/ImagesCursos/marketing-digital.jpg";
import Ingles from "../img/ImagesCursos/Ingles.jpg";
import {Bounce} from 'react-reveal';
import Flash from 'react-reveal/Flash';

function Cursos() {
  return (
    <div>
      <article className="article-cursos">
        <div className="article-text">
          <div>
            <h1 className="article-h1">Catálogo de Cursos de VLA</h1>
          </div>
          <div>
            <button className="btn btn-warning btn-cursos">
              Quiero Información
            </button>
          </div>
        </div>
      </article>
      <article className="article-div-av">
        <div className="article-div-complete">
          <div className="article-text-cursos">
            <div>
            <Bounce right>
              <h5>
                <img className="icon-cursos-check" src={icon}></img> Clases en
                vivo (no pre-grabadas)
              </h5>
              </Bounce>
            </div>
            <div>
            <Bounce right>
              <h5>
                <img className="icon-cursos-check" src={icon}></img> Opciones
                flexibles de pago
              </h5>
              </Bounce>
            </div>
            <div>
            <Bounce right>
              <h5>
                <img className="icon-cursos-check" src={icon}></img> Ayuda
                gratis para buscar empleo
              </h5>
              </Bounce>
            </div>
          </div>
          <div className="div-cursos-2">
            <div>
            <Bounce left>
              <h5>
                <img className="icon-cursos-check" src={icon}></img> Consigue el
                empleo de tus sueños en 4-8 meses
              </h5>
              </Bounce>
            </div>
            <div>
            <Bounce left>
              <h5>
                <img className="icon-cursos-check" src={icon}></img> Tutorías
                ilimitadas
              </h5>
              </Bounce>
            </div>
            <div>
            <Bounce left>
              <h5>
                <img className="icon-cursos-check" src={icon}></img>{" "}
                Certificados Oficiales
              </h5>
              </Bounce>
            </div>
          </div>
        </div>
      </article>
      <main className="main-cursos">
        <div className="main-cursos-div">
          <div className="div-cursos-4">
            <div class="card col-2">
              <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Marketing Digital</h5>
                <p class="card-text">
                  Duración: 3 Meses/nivel
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
              <Flash>
              <img src={Ingles} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Inglés</h5>
                <p class="card-text">
                  Duración: 4 Meses/nivel
                  <br />
                  Límite: 15 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Técnico en Cisco CCNA</h5>
                <p class="card-text">
                  Duración: 6 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Web Developer</h5>
                <p class="card-text">
                  Duración: 7 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
          </div>
          <div className="div-cursos-4">
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Bootcamp examen CCNA</h5>
                <p class="card-text">
                  Duración: 3 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div></div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Linux</h5>
                <p class="card-text">
                  Duración: 3 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de AWS</h5>
                <p class="card-text">
                  Duración: 2 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Python</h5>
                <p class="card-text">
                  Duración: 3 Meses
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
          </div>
          <div className="div-cursos-4">
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Portugués</h5>
                <p class="card-text">
                  Duración: 8 Meses
                  <br />
                  Límite: 15 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Español</h5>
                <p class="card-text">Próximamente</p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
            <div class="card col-2">
            <Flash>
              <img src={Marketing} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Cursos de Excel</h5>
                <p class="card-text">
                  Duración: 2 Meses/nivel
                  <br />
                  Límite: 30 estudiantes
                </p>
                <a href="#" class="btn btn-primary">
                  Haz click aquí
                </a>
              </div>
              </Flash>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cursos;
