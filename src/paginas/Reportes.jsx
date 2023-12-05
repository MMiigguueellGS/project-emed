import React from "react";

import { Outlet } from "react-router-dom";
import ListaReportes from "../componentes/layout/ListaReportes";

const Reportes = () => {
 
  return (
    <section className=" grid grid-cols-4 px-4 mt-28 ">
     <ListaReportes/>
         
    </section>
  );
};

export default Reportes;
