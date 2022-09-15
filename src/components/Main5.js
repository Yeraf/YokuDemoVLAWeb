import React from "react";
import '../CSS/Main5.css';
import Pcicon from "../img/Images/pc-icon-user.jpg";
import Certificacion from "../img/Images/certificado.jpg";
import Manos from "../img/Images/manos.jpg";

function Main5() {
  return (
    <div className="main5-principal">
      <article className="main5-text-article">
        <h1 className="main5-h1-article">¿Por qué elegir a VLA?</h1>
        <p>
          Aquí vamos un paso más allá y te damos asistencia para conseguir un
          nuevo empleo, preparándote para trabajar directamente con algunas de
          las empresas más importantes del mundo.
        </p>
        <p>
          Con VLA adquieres habilidades profesionales, certificados y títulos en
          línea.
        </p>
      </article>
      <article className="main5-article-img">
        <div>
            <img className="main5-img-article" src={Pcicon}></img>
            <p className="main5-p-article">100% En vivo</p>
            <p className="main5-p-text">Todos los cursos de VLA son enseñados totalmete en vivo, con un método de enseñanza único. Las clases de VLA permiten a todos nuestros estudiantes interactuar con sus profesores y responder todas sus dudas en tiempo real.</p>
        </div>
        <div>
            <img className="main5-img-article" src={Certificacion}></img>
            <p className="main5-p-article">Certifícate con VLA</p>
            <p className="main5-p-text">Te preparamos para ganar las certificaciones más importantes de la industria como Cisco, PMP, Microsoft Azure, Scrum y muchas más. Con profesores expertos y certificados 100% en vivo por Internet.</p>
        </div>
        <div>
            <img className="main5-img-article" src={Manos}></img>
            <p className="main5-p-article">Ayuda gratis para buscar empleo</p>
            <p className="main5-p-text">Uno de los más grandes beneficios de VLA es que  aquí tienes un programa de asistencia completamente gratis que te prepara y ayuda a conseguir tu próxima entrevista de trabajo para asegurar tu éxito.</p>
        </div>
      </article>
      <div className="main5-div-button">
          <button className="btn btn-info main5-button">Conoce más sobre VLA</button>
      </div>
    </div>
  );
}

export default Main5;
