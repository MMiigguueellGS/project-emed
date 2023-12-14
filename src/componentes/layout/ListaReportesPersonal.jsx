import React from 'react'
import { Link } from 'react-router-dom'

const ListaReportesPersonal = () => {
  return (
    <ul className="px-6  col-span-1 space-y-6">
      <li className="text-center  flex  justify-between items-center ">
        <Link to="/reportes/" className='flex items-center  pl-1 pr-2 rounded-l-2xl text-amber-700 hover:text-green-600 border-b-[6px] border-lime-700/30' ><i className='bx bx-rewind text-3xl'></i><span className='font-semibold text-lg '>Volver</span></Link>
        <h2 className='text-lg'>Reportes de Personal</h2>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-red-500/50  hover:cursor-pointer    rounded-r-[0px]">
        <Link to="/reportesPersonal/personalBrigadistas" className="w-full py-3">
          Numero de Brigadistas
        </Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]   border-l-red-500/50 border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3  group-hover:border-l-[#3cac78]/70 "></span>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-blue-500/60  hover:cursor-pointer  rounded-r-[0px]  ">
        <Link to="/reportesPersonal/PersonalModalidad" className=" w-full py-3">Modalidad de contrato</Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]  border-l-blue-500/60 border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3 group-hover:border-l-[#3cac78]/70   "></span>
      </li>
      <li className="pl-4 flex items-center relative group hover:bg-[#3cac78]/70 hover:text-red-500 hover:font-semibold bg-orange-500/60  hover:cursor-pointer  rounded-r-[0px] ">
        <Link to="/reportes/PersonalModalidad" className="w-full py-3">Especialidades</Link>
        <span className="absolute right-0 left-full -bottom-1/2 top-1/2  transform -translate-y-1/2 border-r-[0px] border-l-[45px] border-b-[35px] border-t-[35px]  border-l-orange-500/60  border-t-transparent border-b-transparent border-r-transparent first-letter:border-r-3  group-hover:border-l-[#3cac78]/70  "></span>
      </li>
   
     
    </ul>
  )
}

export default ListaReportesPersonal