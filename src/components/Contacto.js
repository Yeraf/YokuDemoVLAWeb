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
          <p className="contac-p">
            <b>+1800 estudiantes activos</b>
          </p>
        </div>
        <div>
          <img className="icons-contact monitor" src={Monitor}></img>
          <p className="contac-p">
            <b>Clases en directo online</b>
          </p>
        </div>
        <div>
          <img className="icons-contact" src={Graphic}></img>
          <p className="contac-p">
            <b>Convenios de empleos empresariales</b>
          </p>
        </div>
      </div>

      {/* cursos */}
      <div className="contenedor-de-cursos">
        <div className="contenedor-completo-text">
          <div className="contenedor-colores">
            <div className="contenedor-idiomas">
              <h3>Idiomas</h3>
              <div>
                <input type="radio"></input>
                <span>Inglés Laboral</span>
              </div>
              <div>
                <input type="radio"></input>
                <span>Inglés para Niños A1 | A2</span>
              </div>
              <div>
                <input type="radio"></input>
                <span>Portugués Integral</span>
              </div>
            </div>
            <div className="contenedor-tecnologicos">
              <h3>Tecnológicos</h3>
              <div>
                <input type="radio"></input>
                <span>Master Front End Web Developer</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Cisco</span>
              </div>
              <div>
                <input type="radio"></input>
                <span>Bootcamp Cisco CCNA</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Linux Administrator</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Amazon Web Services Cloud Practitioner</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Amazon Web Services Architect</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Microsoft SQL</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Ciberseguridad</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Programación Python</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Microsoft Azure</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Marketing Digital</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Virtualización VMWare</span>
              </div>
            </div>
            <div className="contenedor-gerenciales">
              <h3>Gerenciales</h3>
              <div>
                <input type="radio"></input>
                <span> Gerencia de Proyectos</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Microsoft Excel Básico | Intermedio | Avanzado</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Lean Six Sigma Yellow Belt</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> Scrum Master Professional</span>
              </div>
              <div>
                <input type="radio"></input>
                <span> ITIL v4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contacto-registro">
        <div className="contacto-form-complete">
          <form className="">
            <div class="form-group">
              <label for="exampleFormControlInput1">Nombre</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name" required>
                </input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Teléfono</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="88888888" required>
                </input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com" required>
                </input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">País</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="País">
                </input>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comentarios</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1" placeholder="Comentarios"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-warning formulario-btn" type="sudmit">Quiero aprender | enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
