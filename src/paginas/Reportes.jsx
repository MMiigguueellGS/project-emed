import React from "react";

import PersonalBrigadistas from "../componentes/graficos/personalSalud/PersonalBrigadistas";
import PersonalModalidad from "../componentes/graficos/personalSalud/PersonalModalidad";
import { Link, Route, Routes } from "react-router-dom";
import ListaReportes from "../componentes/layout/ListaReportes";

const Reportes = () => {
 
  return (
    <section className="flex gap-8  px-8">
     <ListaReportes/>

     
    </section>
  );
};

export default Reportes;
