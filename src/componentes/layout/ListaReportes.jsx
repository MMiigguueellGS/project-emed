import React from "react";
import { Link } from "react-router-dom";

const ListaReportes = () => {
  return (
    <ul className="px-6  col-span-1 space-y-6">
      <li className="text-center  ">
        <h2>Reportes</h2>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-red-500/50  hover:cursor-pointer rounded-r-[0px]">
        <Link to="/reportesPersonal" className="w-full py-3">
          Reportes de personal de salud
        </Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]   border-l-red-500/50 border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3  group-hover:border-l-[#3cac78]/70 "></span>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-blue-500/60  hover:cursor-pointer  rounded-r-[0px]  ">
        <Link to="/reportesAmbulancias" className=" w-full py-3">Reportes de Ambulancias</Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]  border-l-blue-500/60 border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3 group-hover:border-l-[#3cac78]/70   "></span>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-orange-500/60  hover:cursor-pointer  rounded-r-[0px] ">
        <Link to="/reportesBienes" className="py-3 w-full">Reportes de Bienes</Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]  border-l-orange-500/60  border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3  group-hover:border-l-[#3cac78]/70  "></span>
      </li>
    
    </ul>
  );
};

export default ListaReportes;
