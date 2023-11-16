import React, { useEffect, useState } from "react";

import axios from "axios";
import Ambulancias from "./Ambulancias";
import ModalCreateUpdateAmbulancia from "./ModalCreateUpdateAmbulancia";
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
const AppAmbulancias = () => {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [ambulancias, setAmbulancias] = useState([]);
  const [isAmbulanciaToUpdate, setIsAmbulanciaToUpdate] = useState(null); // permite saber si hay informacion o no para editar

  const handelCreateAmbulancia = () => {
    setIsShowModal(true);
  };
  const obtenerAmbulancias = () => {
    const url = "http://localhost:8080/ambulancias";
    axios
      .get(url)
      .then(({ data }) => setAmbulancias(data))
      .catch((err) => console.log(err));
  };
  const crearAmbulancia = (newAmbulancia, reset) => {
    const url = "http://localhost:8080/ambulancias";
    axios
      .post(url, newAmbulancia)
      .then(({}) => {
        obtenerAmbulancias();
        reset(vaciarFormulario);
        setIsShowModal(false);
      })
      .catch((err) => console.log(err));
  };
  const eliminarAmbulancia = (id) => {
    const url = "http://localhost:8080/ambulancias";
    axios
      .delete(url + `/${id}`)
      .then(() => obtenerAmbulancias())
      .catch((err) => console.log(err));
  };
  const actualizarAmbulancia = (Ambulancia, reset) => {
    const url = "http://localhost:8080/ambulancias";
    axios
      .put(url + `/${Ambulancia.id}`, Ambulancia)
      .then(({}) => {
        obtenerAmbulancias();
        reset(vaciarFormulario);
        setIsShowModal(false);
        setIsAmbulanciaToUpdate(null)
      })
      .catch((err) => console.log(err));
  };
  const handleActualizar = (ambulancia) => {
    console.log(ambulancia);
    setIsShowModal(true);
    setIsAmbulanciaToUpdate(ambulancia);
  };
  useEffect(() => {
    obtenerAmbulancias();
  }, []);

  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
      <h2 className="uppercase font-semibold text-4xl">Ambulancias</h2>
      <section className=" flex justify-around">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black">
          <div className="ligthTheme p-4 rounded-md flex items-center gap-2  sm:w-[360px]">
            <i className="bx bx-search-alt-2 text-white text-lg"></i>
            <input
              id="countryName"
              className="outline-none flex-1 bg-white placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
              placeholder="Ingresa la placa..."
              type="text"
              autoComplete="off"
            />
          </div>
        </form>
        <button onClick={handelCreateAmbulancia} className="cursor-pointer ">
          <div className=" grid first-letter:h-15 bg-[#43A49B] p-2 text-center">
            <i className="bx bx-plus-medical"></i>
            Nuevo
          </div>
        </button>
      </section>
      <ModalCreateUpdateAmbulancia
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        setIsAmbulanciaToUpdate={setIsAmbulanciaToUpdate}
        isAmbulanciaToUpdate={isAmbulanciaToUpdate}
        crearAmbulancia={crearAmbulancia}
        actualizarAmbulancia={actualizarAmbulancia}
        vaciarFormulario={vaciarFormulario}
      />
      <Ambulancias
        ambulancias={ambulancias ?? []}
        eliminarAmbulancia={eliminarAmbulancia}
        handleActualizar={handleActualizar}
      />
    </section>
  );
};

export default AppAmbulancias;
