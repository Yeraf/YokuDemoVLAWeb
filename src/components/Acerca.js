import React from "react";
import "../CSS/Acerca.css";
import jobs from "../img/ImagesJobs/jobs.jpg";

function Acerca() {
  return (
    <div>
      <article className="div-jobs-complete">
        <div className="acerca-text">
          <h1 className="acerca-certificaciones">Certificaciones que te pagan bien</h1>
          <input className="acerca-input" type="text" placeholder="keywords"></input>
          <select className="acerca-select" name="transporte">
            <option className="options-acerca">Todas Las Regiones</option>
            <option className="options-acerca">Alajuela</option>
            <option className="options-acerca">Heredia</option>
            <option className="options-acerca">Cartago</option>
            <option className="options-acerca">San Jose</option>
            <option className="options-acerca"> className="options-acerca"Puntarenas</option>
            <option className="options-acerca">Guanacaste</option>
            <option className="options-acerca">Limon</option>
          </select>
          <button className="btn btn-warning btn-acerca">Buscar</button>
        </div>
      </article>
    </div>
  );
}

export default Acerca;
