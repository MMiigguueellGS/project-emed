import React from 'react'
import ListaReportesPersonal from '../../componentes/layout/ListaReportesPersonal'
import { Outlet } from 'react-router-dom'

const ReportePersonal = () => {
  return (
    <section className=" grid grid-cols-4 px-4 mt-28 ">
    <ListaReportesPersonal/>
    <Outlet/>
        
   </section>
  )
}

export default ReportePersonal