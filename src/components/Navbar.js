import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Icons/vlamerica-logo.png";
import "../CSS/Cssnavbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img className="navbar-logo-VLA" src={Logo}></img>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="/contacto">
              Contacto VLA
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/empleados">
              VLA Team
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/cursos">
              Cursos
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/vlajobs">
              VLA Jobs
            </Link>
          </li>
          <li class="nav-item active">
            <Link className="nav-link" to="/empresarial">
              Empresarial
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
