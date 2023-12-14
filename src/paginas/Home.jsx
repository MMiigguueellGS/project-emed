import React, { useEffect } from "react";
import YoutubeVideo from "../utiles/YoutubeVideo";
import { useNavigate } from "react-router-dom";
const ls = localStorage
const Home = ({setIsLogin}) => {
  const navigate= useNavigate()
  useEffect(()=>{
   const token = ls.getItem('token');
   if(!token) {navigate("/auth/login")}else{setIsLogin(true)}
  },[])
  const youtubeVideoUrl = "https://www.youtube.com/watch?v=DhR5raMwFO0";
  return (
    <section className="flex flex-col gap-16 w-full  bg-cover bg-center bg-imagen-home justify-center">
      <article className="text-center">
        <h1 className="my-8 font-bold  text-3xl pt-4 text-white">
          OFICINA DE GESTION DEL RIESGO DE DESASTRES Y DEFENSA NACIONAL EN SALUD
        </h1>
      </article>
      <article className="flex px-28 ">
        <section className="grid gap-8">
          <div className="w-[520px] h-[300px] hover:scale-110">
            <img className="" src="/img/equipo.jpeg" alt="" />
          </div>
          <div className="w-[520px] h-[300px] overflow-hidden hover:scale-110">
            <img src="/img/brigadistas.jpeg" className="" alt="" />
          </div>
        </section>
        <section className="grid gap-6 justify-center items-center">
          <p className="text-center pl-32   font-sans text-white text-lg">
            Espacio de Monitoreo de Emergencias y Desastres - GERESA LA LIBERTAD
            Realizamos el monitoreo, seguimiento, procesamiento, consolidación y
            análisis de la información a través de documentos técnicos sobre
            peligros, emergencias o desastres a nivel regional que puedan
            afectar a la salud de las personas, a sedes administrativas y
            establecimientos de salud; además a través del módulo de logística
            se encarga del acopio y gestión de la información referente a las
            brechas y necesidades de los recursos en salud basados en el EDAN
            Salud, coordina, consolida y evalúa la distribución de los recursos.
            Así mismo, mantiene actualizada la información de la ubicación e
            inventario de los almacenes existentes, equipos operativos para la
            oportuna y adecuada res - puesta frente emergencias y desastres.
          </p>
          <div className="grid  gap-6 font-semibold text-xl justify-center text-center text-white">
            <h2>TALLER GESTION DEL RIESGO DE DESASTRES EN SALUD</h2>
            <YoutubeVideo videoUrl={youtubeVideoUrl} />
          </div>
        </section>
      </article>
    </section>
  );
};

export default Home;
