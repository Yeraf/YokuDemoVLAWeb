import React from "react";
import "../CSS/Empresarial.css";
import learning from "../img/ImagesEmpresarial/e-learning.jpg";
import cunsolting from "../img/ImagesEmpresarial/cunsolting.jpg"; 

function Empresarial() {
  return (
    <div>
      <article className="article-empresarial">
        <div className="empresarial-text">
          <h1>VLA Empresarial</h1>
          <button className="btn btn-warning empresarial-btn">
            Quiero Información
          </button>
        </div>
      </article>
      <div>
        <h1 className="div-empresarial-h1">Soluciones Empresariales</h1>
      </div>
      <div className="empresarial-elearning">
        <div className="empresarial-text-2">
          <h6>Empieza hoy</h6>
          <h2>E-Learning</h2>
          <p>
            E-learning es una forma de aprender usando el internet de una manera
            guiada y ordenada, puedes contar con un profesor en línea o no, una
            de las principales ventajas es que se rompe la barrera de la
            distancia, o sea que no es necesario que te muevas del lugar donde
            te encuentres para adquirir el conocimiento, este tipo de servicio
            va a enfocado para todas aquellas empresas que quieran desarrollar
            un curso o proceso de una forma dinámica y fácil.
          </p>
          <button className="btn btn-warning">Contracto VLA</button>
        </div>
        <div>
          <img className="img-empresarial" src={learning}></img>
        </div>
      </div>
      <div className="empresarial-elearning">
      <div>
          <img className="img-empresarial" src={cunsolting}></img>
        </div>
        <div className="empresarial-text-2">
          <h6>PARA TU COMPAÑIA</h6>
          <h2>VLA Consulting</h2>
          <p>
          VLA Consulting es la forma mas fácil de desarrollar implementaciones tecnológicas, tanto nivel de cámaras de seguridad, servidores, Hardware, Redes inalámbricas y mucho más!!, esto permite que su empresa pueda dar el salto al mundo de la tecnología y llegar al próximo nivel, en donde puedes gestionar toda una red con un mismo proveedor, abarcando todas las tecnologías actuales en un solo lugar.
          </p>
          <button className="btn btn-warning">Contracto VLA</button>
        </div>
      </div>
    </div>
  );
}

export default Empresarial;
