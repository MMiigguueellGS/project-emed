import React from "react";
import YoutubeVideo from "../utiles/YoutubeVideo";

const Home = () => {
  const youtubeVideoUrl = 'https://www.youtube.com/watch?v=DhR5raMwFO0'
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center  mx-16 mt-16 mb-8">
      <h1 className="font-bold text-center text-3xl pt-4">
        OFICINA DE GESTION DEL RIESGO DE DESASTRES Y DEFENSA NACIONAL EN SALUD
      </h1>
      <article  className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-4 px-10">
      <section className="grid gap-10 justify-center items-center pt-8 px-10">
      <div className="w-[520px]  hover:scale-110">
        <img className="" src="/img/equipo.jpeg" alt="" />
      </div>
      <div className="w-[520px] hover:scale-110">
        <img src="/img/brigadistas.jpeg" alt="" />
      </div>
      </section>
     <section className="grid gap-6">
     <p className="text-justify font-sans">
        Espacio de Monitoreo de Emergencias y Desastres - GERESA LA LIBERTAD
        Realizamos el monitoreo, seguimiento, procesamiento, consolidación y
        análisis de la información a través de documentos técnicos sobre
        peligros, emergencias o desastres a nivel regional que puedan afectar a
        la salud de las personas, a sedes administrativas y establecimientos de
        salud; además a través del módulo de logística se encarga del acopio y
        gestión de la información referente a las brechas y necesidades de los
        recursos en salud basados en el EDAN Salud, coordina, consolida y evalúa
        la distribución de los recursos. Así mismo, mantiene actualizada la
        información de la ubicación e inventario de los almacenes existentes,
        equipos operativos para la oportuna y adecuada res - puesta frente
        emergencias y desastres.
      </p>
      <div className="grid  gap-6 font-semibold text-xl justify-center items-center text-center ">
      <h2>TALLER GESTION DEL RIESGO DE DESASTRES EN SALUD</h2>
      <YoutubeVideo videoUrl={youtubeVideoUrl} />
    </div>
     </section>
      </article>
     
      <section className="">
   
      
     
      </section>
    </section>
  );
};

export default Home;
