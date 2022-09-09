import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Acerca from "./components/Acerca";
import Contacto from "./components/Contacto";
import Empleados from "./components/Empleados";
import Cursos from "./components/Cursos";
import Footer from "./components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Main />}></Route>
        <Route part="/acerca" element={<Acerca />}></Route>
        <Route part="/contacto" element={<Contacto />}></Route>
        <Route part="/empleados" element={<Empleados />}></Route>
        <Route part="/cursos" element={<Cursos />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default Router;
