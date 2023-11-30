import React from 'react'
import { Link } from 'react-router-dom'

const ListaReportes = () => {
  return (
    <ul className="mt-20 rounded-lg w-auto h-[500px]  px-2 text-center">
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">
      <Link to='/reportes/personalBrigadistas' >Reporte Numero de Brigadistas</Link></li>
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2 "><Link to= '/reportes/PersonalModalidad'>Reporte Modalidad de contrato</Link> </li>
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por Profesion</li>
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
    <li className="hover:bg-slate-50/40  hover:cursor-pointer px-4 py-2">Reporte Personal por especialidad</li>
  </ul>
  )
}

export default ListaReportes