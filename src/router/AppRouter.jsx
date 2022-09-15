import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "../LandingPage";
import { Menu } from "../components/Menu";
import { Contacto } from "../pages/Contacto";
import { Estudios } from "../pages/Estudios";
import { Experiencia } from "../pages/Experiencia";
import { Portafolio } from "../pages/Portafolio";
import { Proyectos } from "../pages/Proyectos";

export const AppRouter = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Navigate to='../LandingPage' />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="portafolio" element={<Portafolio />} />
        <Route path="estudios" element={<Estudios />} />
        <Route path="experiencia" element={<Experiencia />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};
