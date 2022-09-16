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
      <div>
        <div>
          <h4>Idiomas</h4>
          <div>
            <label>
              <input type="radio"></input>
              <span> Inglés Laboral</span>
            </label>
            <label>
              <input type="radio"></input>
              <span> Inglés para Niños A1 | A2</span>
            </label>
            <label>
              <input type="radio"></input>
              <span> Portugués Integral</span>
            </label>
          </div>
        </div>
        <div>
          <h4>Tecnológicos</h4>

          <input type="radio"></input>
          <span> Master Front End Web Developer</span>

          <input type="radio"></input>
          <span> Cisco</span>

          <input type="radio"></input>
          <span> Bootcamp Cisco CCNA</span>

          <input type="radio"></input>
          <span> Linux Administrator</span>

          <input type="radio"></input>
          <span> Amazon Web Services Cloud Practitioner</span>

          <input type="radio"></input>
          <span> Amazon Web Services Architect</span>

          <input type="radio"></input>
          <span> Microsoft SQL</span>

          <input type="radio"></input>
          <span> Ciberseguridad</span>

          <input type="radio"></input>
          <span> Programación Python</span>

          <input type="radio"></input>
          <span> Microsoft Azure</span>

          <input type="radio"></input>
          <span> Marketing Digital</span>

          <input type="radio"></input>
          <span> Virtualización VMWare</span>
        </div>
        <div>
          <h4>Gerenciales</h4>
          <input type="radio"></input>
          <span> Gerencia de Proyectos</span>
          <input type="radio"></input>
          <span> Microsoft Excel Básico | Intermedio | Avanzado</span>
          <input type="radio"></input>
          <span> Lean Six Sigma Yellow Belt</span>
          <input type="radio"></input>
          <span> Scrum Master Professional</span>
          <input type="radio"></input>
          <span> ITIL v4</span>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
