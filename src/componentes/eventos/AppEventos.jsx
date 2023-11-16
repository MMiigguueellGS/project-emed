import React, { useEffect, useState } from "react";

import axios from "axios";
import ModalCreateUpdateEvento from "./ModalCreateUpdateEvento";
import Evento from "./Evento";
const vaciarFormulario = {
  redSalud: "",
  microRed: "",
  idEstablecimiento: "",
  matricula: "",
  marcaVehiculo: "",
  nPlaca: "",
  modelo: "",
  anioFabricacion: "",
  propietario: "",
  soat: false,
  revicionTecnica: false,
};
const AppEventos = () => {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [Evento, setEvento] = useState([]);
  const [isEventoToUpdate, setIsEventoToUpdate] = useState(null); // permite saber si hay informacion o no para editar

  const handelCreateEvento = () => {
    setIsShowModal(true);
  };
  const obtenerEventos = () => {
    const url = "http://localhost:8080/eventos";
    axios
      .get(url)
      .then(({ data }) => setEvento(data))
      .catch((err) => console.log(err));
  };
  const crearEvento = (newEvento, reset) => {
    const url = "http://localhost:8080/eventos";
    axios
      .post(url, newEvento)
      .then(({}) => {
        obtenerEventos();
        reset(vaciarFormulario);
        setIsShowModal(false);
      })
      .catch((err) => console.log(err));
  };
  const eliminarEvento = (id) => {
    const url = "http://localhost:8080/eventos";
    axios
      .delete(url + `/${id}`)
      .then(() => obtenerEventos())
      .catch((err) => console.log(err));
  };
  const actualizarEvento = (Evento, reset) => {
    const url = "http://localhost:8080/eventos";
    axios
      .put(url + `/${Evento.id}`, Evento)
      .then(({}) => {
        obtenerEventos();
        reset(vaciarFormulario);
        setIsShowModal(false);
        setIsEventoToUpdate(null)
      })
      .catch((err) => console.log(err));
  };
  const handleActualizar = (Evento) => {
    console.log(Evento);
    setIsShowModal(true);
    setIsEventoToUpdate(Evento);
  };
  useEffect(() => {
    obtenerEventos();
  }, []);

  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
    <h2 className="uppercase font-semibold text-4xl">Eventos</h2>
    <section className=" flex justify-around">
      <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black">
        <div className="ligthTheme p-4 rounded-md flex items-center gap-2  sm:w-[360px]">
          <i className="bx bx-search-alt-2 text-white text-lg"></i>
          <input
            id="countryName"
            className="outline-none flex-1 bg-white"
            placeholder="Ingresa el evento..."
            type="text"
            autoComplete="off"
          />
        </div>
      </form>
      <button onClick={handelCreateEvento} className="cursor-pointer ">
        <div className=" grid first-letter:h-15 bg-[#43A49B] p-2 text-center">
          <i className="bx bx-plus-medical"></i>
          Nuevo
        </div>
      </button>
    </section>
    <ModalCreateUpdateEvento
      setIsShowModal={setIsShowModal}
      isShowModal={isShowModal}
      setIsEventoToUpdate={setIsEventoToUpdate}
      isEventoToUpdate={isEventoToUpdate}
      crearEvento={crearEvento}
      actualizarEvento={actualizarEvento}
      vaciarFormulario={vaciarFormulario}
    />
    {/* <Evento
      Eventos={Eventos ?? []}
      eliminarEvento={eliminarEvento}
      handleActualizar={handleActualizar}
    /> */}
  </section>
  )
}

export default AppEventos