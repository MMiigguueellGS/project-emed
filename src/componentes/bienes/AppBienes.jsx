import React, { useEffect, useState } from "react";

import axios from "axios";

import Bienes from "./Bienes";
import ModalCreateUpdateBienes from "./ModalCreateUpdateBienes";
const vaciarFormulario = {
  codigoPatrimonial: "",
  codigoBien: "",
  nombreBien: "",
  estadoBien: "",
  descripcion: "",
  idEmed: ""
  
};
const AppBienes = () => {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [bienes, setBienes] = useState([]);
  const [isBienToUpdate, setIsBienToUpdate] = useState(null); // permite saber si hay informacion o no para editar
  const [valorInputEmed, setValorInputEmed] = useState(""); //guarda el valor del input de red

  const handelCreatebienes = () => {
    setIsShowModal(true);
  };
  const obtenerbienes = () => {
    const url = "http://localhost:8080/bienes";
    axios
      .get(url)
      .then(({ data }) => setBienes(data))
      .catch((err) => console.log(err));
  };
  const crearBien = (newbienes, reset) => {
    const url = "http://localhost:8080/bienes";
    axios
      .post(url, newbienes)
      .then(({}) => {
        obtenerbienes();
        reset(vaciarFormulario);
        setIsShowModal(false);       
        setValorInputEmed("");
      })
      .catch((err) => console.log(err));
  };
  const eliminarBien = (id) => {
    const url = "http://localhost:8080/bienes";
    axios
      .delete(url + `/${id}`)
      .then(() => obtenerbienes())
      .catch((err) => console.log(err));
  };
  const actualizarBien = (bienes, reset) => {
    const url = "http://localhost:8080/bienes";
    axios
      .put(url + `/${isBienToUpdate.id}`, bienes)
      .then(({}) => {
        obtenerbienes();
        reset(vaciarFormulario);
        setIsShowModal(false);
        setIsBienToUpdate(null);
      })
      .catch((err) => console.log(err));
  };
  const handleActualizar = (bienes) => {
    setIsShowModal(true);
    setIsBienToUpdate(bienes);
  };
  useEffect(() => {
    obtenerbienes();
  }, []);

  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
      <h2 className="uppercase font-semibold text-4xl">Bienes</h2>
      <section className=" flex justify-around">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black">
          <div className="ligthTheme p-4 rounded-md flex items-center gap-2  sm:w-[360px]">
            <i className="bx bx-search-alt-2 text-white text-lg"></i>
            <input
              id="countryName"
              className="outline-none flex-1 bg-white  placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
              placeholder="Ingresa el DNI..."
              type="text"
              autoComplete="off"
            />
          </div>
        </form>
        <button onClick={handelCreatebienes} className="cursor-pointer ">
          <div className=" grid first-letter:h-15 bg-[#43A49B] p-2 text-center">
            <i className="bx bx-plus-medical"></i>
            Nuevo
          </div>
        </button>
      </section>
      <ModalCreateUpdateBienes
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        setIsBienToUpdate={setIsBienToUpdate}
        isBienToUpdate={isBienToUpdate}
        crearBien={crearBien}
        actualizarBien={actualizarBien}
        vaciarFormulario={vaciarFormulario}
        setValorInputEmed={setValorInputEmed}
        valorInputEmed={valorInputEmed}
      />
    <Bienes
    bienes={bienes ?? []}
    eliminarBien={eliminarBien}
    handleActualizar={handleActualizar}
  />
    </section>
  );
};

export default AppBienes;
