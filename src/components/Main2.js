import React from "react";
import "../CSS/Main2.css";
import Imggerenciales from "../img/Images/cursos-gerenciales.jpg";
import Imgidiomas from "../img/Images/cursos-idiomas.png";
import Imgninos from "../img/Images/cursos-ninos.jpg";
import Imgtecnologicos from "../img/Images/cursos-tecnologicos.jpg";
import Imgtodoscursos from "../img/Images/todos-cursos.jpg";

function Main2() {

  return (
    <div className="main-2">
      <div className="main-cuadros-cursos">
        <img className="Img-todos-cursos" src={Imggerenciales}></img>
        <img className="Img-todos-cursos" src={Imgidiomas}></img>
        <img className="Img-todos-cursos" src={Imgninos}></img>
        <img className="Img-todos-cursos" src={Imgtecnologicos}></img>
        <img className="Img-todos-cursos" src={Imgtodoscursos}></img>
      </div>
      <div className="main-p-cursos">
        <a className="a-cursos-main" href="">Cursos de Tecnología</a>
        <a className="a-cursos-main" href="">Cursos de idiomas</a>
        <a className="a-cursos-main" href="">Cursos gerenciales</a>
        <a className="a-cursos-main" href="">Cursos para niños</a>
        <a className="a-cursos-main" href="">Todos los cursos</a>
      </div>
    </div>
  );
}

export default Main2;
