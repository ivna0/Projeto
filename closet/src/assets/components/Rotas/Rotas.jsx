/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filtro from "../components/Filtro/Filtro";
import Home from "../components/Home/Home";
import Curtidas from "../components/Curtidas/Curtidas";
import Detalhes from "../components/DetalhesPdt/Detalhes";

function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filtro" element={<Filtro />} />
          <Route path="/curtidas" element={<Curtidas />} />
          <Route path="/detalhes" element={<Detalhes/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rotas;
