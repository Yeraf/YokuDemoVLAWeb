import React from "react";
import Pcicon from "../img/Images/pc-icon-user.png"
function Main5() {
  return (
    <div>
      <article>
        <h1>¿Por qué elegir a VLA?</h1>
        <p>
          Aquí vamos un paso más allá y te damos asistencia para conseguir un
          nuevo empleo, preparándote para trabajar directamente con algunas de
          las empresas más importantes del mundo.{" "}
        </p>
        <p>
          Con VLA adquieres habilidades profesionales, certificados y títulos en
          línea.
        </p>
      </article>
      <article>
        <div>
            <img src={Pcicon}></img>
            <p>100% En vivo</p>
            <p>Todos los cursos de VLA son enseñados totalmete en vivo, con un método de enseñanza único. Las clases de VLA permiten a todos nuestros estudiantes interactuar con sus profesores y responder todas sus dudas en tiempo real.</p>
        </div>
        <div>
            <img src={Pcicon}></img>
            <p>Certifícate con VLA</p>
            <p>Te preparamos para ganar las certificaciones más importantes de la industria como Cisco, PMP, Microsoft Azure, Scrum y muchas más. Con profesores expertos y certificados 100% en vivo por Internet.</p>
        </div>
        <div>
            <img src={Pcicon}></img>
            <p>Ayuda gratis para buscar empleo</p>
            <p>Uno de los más grandes beneficios de VLA es que  aquí tienes un programa de asistencia completamente gratis que te prepara y ayuda a conseguir tu próxima entrevista de trabajo para asegurar tu éxito.</p>
        </div>
      </article>
    </div>
  );
}

export default Main5;
