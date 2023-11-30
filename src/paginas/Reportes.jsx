import React from "react";

import PersonalBrigadistas from "../componentes/graficos/personalSalud/PersonalBrigadistas";
import PersonalModalidad from "../componentes/graficos/personalSalud/PersonalModalidad";

const Reportes = () => {
 
  return (
    <section className="flex gap-8  px-8">
      <ul className="mt-20 rounded-lg w-auto h-[500px]  px-2 text-center">
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Numero de Brigadistas</li>
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2 ">Reporte Modalidad de contrato</li>
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por Profesion</li>
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
        <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
      </ul>
      <PersonalBrigadistas/>
      <PersonalModalidad/>
    </section>
  );
};

export default Reportes;
