import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import AppAmbulancias from "./componentes/ambulancias/AppAmbulancias";
import AppPersonalSalud from "./componentes/personalSalud/AppPersonalSalud";
import Registros from "./paginas/Registros";
import AppEventos from "./componentes/eventos/AppEventos";

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
      <section className="min-h-screen grid grid-rows-[1fr_auto]   bg-gradient-to-b from-[#D0EBEA] via-[#FFFFFF] to-[#cdfaf6]">
   
          <nav className="bg-[#728f9e]  h-14 min-w-full fixed ">
            <ul className="flex justify-center items-center  text-white ">
              <li className=" sm:w-40 w-24  bg-[#728f9e] py-4 px-2 text-center mr-[1px] hover:text-[#cdfaf6] hover:bg-[#43A49B]">
                <Link to="/">BIENVENIDOS</Link>
              </li>
              <li className="sm:w-40 w-24  bg-[#728f9e] py-4 px-2 text-center mr-[2px] hover:text-[#cdfaf6] hover:bg-[#43A49B]">
                <Link to="/registros">REGISTROS</Link>
              </li>
              <li className="sm:w-40 w-24  bg-[#728f9e] py-4 px-2 text-center hover:text-[#cdfaf6] hover:bg-[#43A49B]">
                <Link to="/">REPORTES</Link>
              </li>
            </ul>
          </nav>
    

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Registros/> }/>
          <Route path="/ambulancias" element={<AppAmbulancias/> }/>
          <Route path="/personalSalud" element={<AppPersonalSalud/> }/>
          <Route path="/eventos" element={<AppEventos/> }/>
          
          <Route path="/dashbord" element="" />
        </Routes>
        <footer className="h-14 bg-[#728f9e] text-white">Mi Fotter</footer>
      </section>
    </main>
  );
}

export default App;
