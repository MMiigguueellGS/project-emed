import React from "react";

import AppReporteGraficos from "../componentes/graficos/AppReporteGraficos";
import ListaReportes from "../componentes/layout/ListaReportes";

const Reportes = () => {
  return (
    <section className=" grid grid-cols-4 px-4 mt-28 ">
      <ListaReportes />
      <AppReporteGraficos />
      
    </section>
  );
};

export default Reportes;
