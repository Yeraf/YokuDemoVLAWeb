import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Acerca from "./components/Acerca";
import Contacto from "./components/Contacto";
import Empleados from "./components/Empleados";
import Cursos from "./components/Cursos";
import Footer from "./components/Footer";
import Empresarial from "./components/Empresarial";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route path="/acerca" element={<Acerca />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/empleados" element={<Empleados />}></Route>
        <Route path="/cursos" element={<Cursos />}></Route>
        <Route path="/empresarial" element={<Empresarial />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
