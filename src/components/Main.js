import React from "react";

function Main() {
  return (
    <div className="main-main">
      <article>
        <h1>TU CAMINO HACIA EL ÉXITO</h1>
        <p>
          Las empresas buscan personas con habilidades informáticas,
          gerenciales, de idiomas y mercadeo digital. Aprende con las clases
          100% en vivo por Internet de VLA. Tu rumbo a un mejor empleo empieza
          aquí.
        </p>
        <button className="btn btn-info">Ver Cursos</button>
        <button className="btn btn-warning">Clase Gratis</button>
      </article>
      <div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Inglés</h5>
                <p>
                  Abre las puertas a más oportunidades.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Inicia tu carrera en Cisco</h5>
                <p>
                  70% de descuento en boucher del examen de certificación.
                </p>
                <button>Comienza ya</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Prueba tus conocimientos</h5>
                <p>
                  Demuestra tus habilidades con los siguientes test de Excel, Linux, CCNA, VMWare, Inglés y Portugués.
                </p>
                <button>Realizar Test</button>
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
  );
}

export default Main;
