import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SugerenciasEmed from "../layout/SugerenciasEmed";

const ModalCreateUpdateBienes = ({
  setIsShowModal,
  isShowModal,
  setIsBienToUpdate,
  isBienToUpdate,
  crearBien,
  actualizarBien,
  vaciarFormulario,
  valorInputEmed,
  setValorInputEmed,
}) => {
  // const {handleSubmit, register, reset, formState:{errors}} = useForm();
  //RED
  
  const [emedInput, setEmedInput] = useState(null); // ESTABLECIMIENTOS con su red , microred
  const { handleSubmit, register, reset, setValue } = useForm();
  const [emeds, setEmeds] = useState([]);
  const obtenerEmeds = () => {
    const url = "http://localhost:8080/emeds";
    axios
      .get(url)
      .then(({ data }) => setEmeds(data))
      .catch((err) => console.log(err));
  };
  const onChangeEmed = (e) => {
    const emedABuscar = e.target.value;
    if (emedABuscar !== "") {
      const nombresEmed = emeds
        .filter((emed) =>
          emed.nombreEmed.toLowerCase().includes(valorInputEmed)
        )
        .map((emed) => emed.nombreEmed.toLowerCase());

      const sugerenciasEmed = nombresEmed.filter((emed) =>
        emed.toLowerCase().includes(emedABuscar)
      );
      console.log(emedABuscar)
      setEmedInput(sugerenciasEmed); // actualiza las sugerencias deacuerdo a lo que se ingresa en el input
      
    } else {
      setEmedInput(null); //si el input esta vacio , oculta las sugerencias
    }
    setValorInputEmed(emedABuscar);
  };
  const hallarIdEmed = (emed) => {
   
    const emedId = emeds.find(
      (em) => em.nombreEmed.toLowerCase() === emed
    );
    console.log( emedId.id)
    return emedId.id;
  };
  const clickAgregarAinputEmed = (emed) => {
    setValorInputEmed(emed);
    const idEmed = hallarIdEmed(emed);
    console.log(idEmed)
    setValue("idEmed", idEmed);
    setEmedInput(null);
  };
  // dispara el modal setIsShowModal = true se mostrara
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    setIsBienToUpdate(null);
    reset(vaciarFormulario);   
    setValorInputEmed(""); 
  };
  const limpiarFormulario = () => {
    reset(vaciarFormulario);   
    setValorInputEmed("");  
  };
  const submit = (data) => {
   
    if (isBienToUpdate) {
      const emed =
      isBienToUpdate.BienEmed.nombreEmed.toLowerCase();
      const idBien = hallarIdEmed(emed);
      data.idEmed = Number(idBien);
      actualizarBien(data, reset);
    } else {
      crearBien(data, reset);
    }
  };

  useEffect(() => {
    obtenerEmeds();   
  }, []);
  useEffect(() => {
    if (isBienToUpdate) {
      console.log(isBienToUpdate)
       isBienToUpdate.idEmed = isBienToUpdate.BienEmed.nombreEmed.toLowerCase(),     
      reset(isBienToUpdate);
    }
  }, [isBienToUpdate]);
  return (
    <section
      className={`fixed bg-black/40 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-300 ${
        isShowModal
          ? "visible opacity-100 sclae-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[80%] h-[70%]   grid  grid-rows-[auto_1fr_auto]  gap-4 p-2 rounded-md relative   bg-[#ffffff]"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="font-bold absolute top-1 right-2"
        >
          <i className="bx bx-x-circle text-[#263339] text-2xl font-semibold"></i>
        </button>
        <h2 className="text-center uppercase text-[#263339] font-bold text-2xl">
          {isBienToUpdate ? "Editar Bien" : "Crear Bien"}
        </h2>
        <section className="grid grid-cols-1  sm:grid-cols-2 ">
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="codigoPatrimonial"
                type="text"
                placeholder="codigo Patrimonial ..."
                {...register("codigoPatrimonial")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="codigoBien"
                type="text"
                placeholder="Codigo del Bien ... "
                {...register("codigoBien")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="nombreBien"
                type="text"
                placeholder="Nombre del Bien ... "
                {...register("nombreBien")}
              />
            </div>
          </section>
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="estadoBien"
                type="text"
                placeholder="Estado del Bien ..."
                {...register("estadoBien")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="descripcion"
                type="text"
                placeholder="Descripcion ..."
                {...register("descripcion")}
              />
            </div>
            <div className="flex gap-2 relative">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="idEmed"
                value={valorInputEmed}
                type="text"
                placeholder="Emed ..."
                {...register("idEmed", {
                  onChange: (e) => onChangeEmed(e),
                })}
              />
              {emedInput && (
                <SugerenciasEmed
                emedInput={emedInput}
                clickAgregarAinputEmed={clickAgregarAinputEmed}
                />
              )}
            </div>
          </section>
        </section>

        <section className="flex justify-center gap-8">
          <button className=" rounded-md text-[#43A49B] bg-[#263339] py-2 px-2">
            {isBienToUpdate ? "Guardar Cambios" : "Crear "}
          </button>
          <button
            onClick={limpiarFormulario}
            className="rounded-md  text-[#43A49B] bg-[#263339] py-2 px-2"
            type="button"
          >
            Limpiar
          </button>
        </section>
      </form>
    </section>
  );
};

export default ModalCreateUpdateBienes;
