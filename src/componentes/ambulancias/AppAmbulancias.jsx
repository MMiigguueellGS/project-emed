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
    <section className=" px-[70px] pt-10 mt-24  bg-slate-50">
       <h2 className="uppercase font-semibold text-3xl text-gray-600 flex items-center gap-6"><span className="text-6xl"><i className='bx bxs-ambulance'></i></span>Ambulancias</h2>
       <section className=" flex justify-end   pb-9 mr-8">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black justify-center items-center ">
          <div className=" p-2 rounded-md flex items-center gap-2  sm:w-[240px]  border-b-8 border-slate-300/40">
          
            <i className="bx bx-search-alt-2 text-[#26A69A] text-lg"></i>
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
          <div className=" grid  bg-[#43A49B] p-2 text-center text-white  rounded-xl hover:bg-blue-400 text-sm">
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
