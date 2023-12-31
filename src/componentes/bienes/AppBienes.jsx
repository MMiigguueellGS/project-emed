import React, { useEffect, useState } from "react";
import axios from "axios";
import Bienes from "./Bienes";
import ModalCreateUpdateBienes from "./ModalCreateUpdateBienes";
import { axiosURL } from "../../configuracion/axios.config";
const vaciarFormulario = {
  codigoPatrimonial: "",
  codigoBien: "",
  nombreBien: "",
  estadoBien: "",
  descripcion: "",
  idEmed: "",
};
const AppBienes = () => {
  const [isShowModal, setIsShowModal] = useState(false); 
  const [bienes, setBienes] = useState([]);
  const [isBienToUpdate, setIsBienToUpdate] = useState(null); // permite saber si hay informacion o no para editar
  const [valorInputEmed, setValorInputEmed] = useState(""); 
  const [bienSearch, setBienSearch] = useState("")
  const handelCreatebienes = () => {
    setIsShowModal(true);
  };
  const obtenerbienes = (codigoB) => {
    const url = `/bienes?codigoBien=${codigoB}`;
    axiosURL
      .get(url)
      .then(({ data }) => setBienes(data))
      .catch((err) => console.log(err));
  };
  const crearBien = (newbienes, reset) => {
    const url = "/bienes";
    axiosURL
      .post(url, newbienes)
      .then(({}) => {
        obtenerbienes('');
        reset(vaciarFormulario);
        setIsShowModal(false);
        setValorInputEmed("");
      })
      .catch((err) => console.log(err));
  };
  const eliminarBien = (id) => {
    const url = "/bienes";
    axiosURL
      .delete(url + `/${id}`)
      .then(() => obtenerbienes(''))
      .catch((err) => console.log(err));
  };
  const actualizarBien = (bienes, reset) => {
    const url = "/bienes";
    axiosURL
      .put(url + `/${isBienToUpdate.id}`, bienes)
      .then(({}) => {
        obtenerbienes('');
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
  //Buscar por codigo de bien
  const handleOnchangeSearch = (e)=>{
    const valorABuscar = e.target.value 
    obtenerbienes(valorABuscar)
    setBienSearch(valorABuscar)

  }
  useEffect(() => {
    obtenerbienes('');
  }, []);

  return (
    <section className=" px-[70px] pt-10 mt-24   bg-slate-50">
      <h2 className="uppercase font-semibold text-3xl text-gray-600 flex items-center gap-6">
        <span className="text-6xl">
        <i className='bx bx-store-alt' ></i>
        </span>
        Bienes
      </h2>
      <section className=" flex justify-end   pb-9 pt-4 mr-8">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black justify-center items-center ">
          <div className=" p-2 rounded-md flex items-center gap-2  sm:w-[240px]  border-b-8 border-slate-300/40">
            <i className="bx bx-search-alt-2 text-[#26A69A] text-lg"></i>
            <input
            onChange={handleOnchangeSearch}
              id="countryName"
              className="outline-none flex-1 bg-white  placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
              placeholder="Codigo del bien..."
              type="text"
              autoComplete="off"
              value={bienSearch}
            />
          </div>
        </form>
        <button onClick={handelCreatebienes} className="cursor-pointer ">
          <div className=" grid  bg-[#43A49B] p-2 text-center text-white  rounded-xl hover:bg-blue-400 text-sm">
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
