import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ListaReportesPersonal from "../../componentes/layout/ListaReportesPersonal";
import { axiosURL } from "../../configuracion/axios.config";

const ReportePersonal = () => {
  // const [numBrigadista, setNumBrigadista] = useState(null);
  // const obtenerData = () => {
  //   const url = "/personalSalud/numBrigadistas";
  //   axiosURL
  //     .get(url)
  //     .then(({ data }) => setNumBrigadista(data))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   obtenerData();
   
  // }, []);
  return (
    <section className=" grid grid-cols-4 px-4 mt-28 ">
      <ListaReportesPersonal />
      
      <Outlet />
    </section>
  );
};

export default ReportePersonal;
