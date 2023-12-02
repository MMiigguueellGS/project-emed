import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import AppAmbulancias from "./componentes/ambulancias/AppAmbulancias";
import AppPersonalSalud from "./componentes/personalSalud/AppPersonalSalud";
import Registros from "./paginas/Registros";
import AppEventos from "./componentes/eventos/AppEventos";
import AppBienes from "./componentes/bienes/AppBienes";
import Reportes from "./paginas/Reportes";
import PersonalBrigadistas from "./componentes/graficos/personalSalud/PersonalBrigadistas";
import PersonalModalidad from "./componentes/graficos/personalSalud/PersonalModalidad";

function App() {
  useEffect(() => {
    // const url = "http://localhost:3000/api/v1/personalSalud/";
    // axios.get(url)
    //   .then(({ data }) => {
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez al montar el componente.

  return (
    <main className=" ">
      <section className="min-h-screen grid grid-rows-[1fr_auto]   bg-gradient-to-b from-[#43A49B]/80 via-[#cdfaf6]/80 to-[#43A49B]/90">
        <nav className=" bg-gray-600 h-14 min-w-full fixed text-white">
          <ul className="flex justify-center items-center   font-semibold text-xl">
            <li className=" sm:w-40 w-24  from-[#43A49B] via-[#cdfaf6] to-[#43A49B] py-3 px-2 text-center mr-[1px] hover:text-[#cdfaf6] hover:bg-[#43A49B]">
              <Link to="/">BIENVENIDOS</Link>
            </li>
            <li className="sm:w-40 w-24 from-[#43A49B] via-[#cdfaf6] to-[#43A49B] py-3 px-2 text-center mr-[2px] hover:text-[#cdfaf6] hover:bg-[#43A49B]">
              <Link to="/registros">REGISTROS</Link>
            </li>
            <li className="sm:w-40 w-24 from-[#43A49B] via-[#cdfaf6] to-[#43A49B] py-3 px-2 text-center hover:text-[#cdfaf6] hover:bg-[#43A49B]">
              <Link to="/reportes">REPORTES</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Registros />} />

          <Route path="/reportes/*" >
    {/* Rutas anidadas dentro de /reportes */}
    <Route index element={<Reportes />} /> Componente por defecto
    <Route path="personalBrigadistas" element={<PersonalBrigadistas />} />
    <Route path="PersonalModalidad" element={<PersonalModalidad />} />
    {/* Agrega más rutas anidadas según sea necesario */}
  </Route>

          <Route path="/ambulancias" element={<AppAmbulancias />} />
          <Route path="/personalSalud" element={<AppPersonalSalud />} />
          <Route path="/bienes" element={<AppBienes />} />
          <Route path="/eventos" element={<AppEventos />} />

          <Route path="/dashbord" element="" />
        </Routes>
        {/* <footer className="h-14 bg-[#728f9e] text-white">Mi Fotter</footer> */}
      </section>
    </main>
  );
}

export default App;
