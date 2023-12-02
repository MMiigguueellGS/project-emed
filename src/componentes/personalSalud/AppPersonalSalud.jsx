import React, { useEffect, useState } from "react";

import axios from "axios";
import ModalCreateUpdatePersonalSalud from "./ModalCreateUpdatePersonalSalud";
import PersonalSalud from "./PersonalSalud";
const vaciarFormulario = {
  redSalud: "",
  microRed: "",
  idEstablecimiento: "",
  dni: "",
  nombres: "",
  apellidos: "",
  correo: "",
  celular: "",
  direccionActual: "",
  profesion: "",
  especialidad: "",
  brigadista: "",
  plataformaDefensa: false,
  idCondicion: "",
  localidad: "",
};
const AppPersonalSalud = () => {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [personalSalud, setPersonalSalud] = useState([]);
  const [isPersonalSaludToUpdate, setIsPersonalSaludToUpdate] = useState(null); // permite saber si hay informacion o no para editar
  const [valorInputRed, setvalorInputRed] = useState(''); //guarda el valor del input de red
  const [valorInputMicroRed, setValorInputMicroRed] = useState('');
  const [valorInputEstablecimiento, setValorInputEstablecimiento] = useState('');

  const [valorInputProfesion, setValorInputProfesion] = useState("")
  const handelCreatePersonalSalud = () => {
    setIsShowModal(true);
  };
  const obtenerPersonalSalud = () => {
    const url = "http://localhost:8080/personalSalud";
    axios
      .get(url)
      .then(({ data }) => setPersonalSalud(data))
      .catch((err) => console.log(err));
  };
  const crearPersonalSalud = (newPersonalSalud, reset) => {
    const url = "http://localhost:8080/personalSalud";
    axios
      .post(url, newPersonalSalud)
      .then(({}) => {
        obtenerPersonalSalud();
        reset(vaciarFormulario);
        setIsShowModal(false);
        setvalorInputRed('');
        setValorInputMicroRed('');
        setValorInputEstablecimiento('');
        setValorInputProfesion("");
      })
      .catch((err) => console.log(err));
  };
  const eliminarPersonalSalud = (id) => {
    const url = "http://localhost:8080/personalSalud";
    axios
      .delete(url + `/${id}`)
      .then(() => obtenerPersonalSalud())
      .catch((err) => console.log(err));
  };
  const actualizarPersonalSalud = (PersonalSalud, reset) => {
    const url = "http://localhost:8080/personalSalud";
    axios
      .put(url + `/${isPersonalSaludToUpdate.id}`, PersonalSalud)
      .then(({}) => {        
        obtenerPersonalSalud();
        reset(vaciarFormulario);
        setIsShowModal(false);
        setIsPersonalSaludToUpdate(null);
      })
      .catch((err) => console.log(err));
  };
  const handleActualizar = (PersonalSalud) => {  
    setIsShowModal(true);
    setIsPersonalSaludToUpdate(PersonalSalud);
  };
  useEffect(() => {
    obtenerPersonalSalud();
  }, []);
// 
  return (
    <section className=" px-[70px] pt-4 mt-14  w-full bg-slate-50">
      <h2 className="uppercase font-semibold text-3xl text-gray-600 flex items-center gap-6"><span className="text-6xl"><i className='bx bx-male-female' ></i></span>Personal de Salud</h2>
      <section className=" flex justify-end   py-6 mr-8">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black justify-center items-center ">
          <div className=" p-2 rounded-md flex items-center gap-2  sm:w-[240px]  border-b-8 border-slate-300/40">
            <i className="bx bx-search-alt-2 text-[#26A69A] text-lg"></i>
            <input
              id="countryName"
              className="outline-none flex-1 bg-slate-50  placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
              placeholder="Ingresa el DNI..."
              type="text"
              autoComplete="off"
            />
          </div>
        </form>
        <button onClick={handelCreatePersonalSalud} className="cursor-pointer ">
          <div className=" grid  bg-[#43A49B] p-2 text-center text-white  rounded-xl hover:bg-blue-400 text-sm">
            <i className="bx bx-plus-medical"></i>
            Nuevo
          </div>
        </button>
      </section>
      <ModalCreateUpdatePersonalSalud
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        setIsPersonalSaludToUpdate={setIsPersonalSaludToUpdate}
        isPersonalSaludToUpdate={isPersonalSaludToUpdate}
        crearPersonalSalud={crearPersonalSalud}
        actualizarPersonalSalud={actualizarPersonalSalud}
        vaciarFormulario={vaciarFormulario}
        valorInputRed={valorInputRed}
        setvalorInputRed={setvalorInputRed}
        valorInputMicroRed={valorInputMicroRed}
        setValorInputMicroRed={setValorInputMicroRed}
        valorInputEstablecimiento={valorInputEstablecimiento}
        setValorInputEstablecimiento={setValorInputEstablecimiento}
        valorInputProfesion={valorInputProfesion}
        setValorInputProfesion={setValorInputProfesion}
      />
      <PersonalSalud
        PersonalSalud={personalSalud ?? []}
        eliminarPersonalSalud={eliminarPersonalSalud}
        handleActualizar={handleActualizar}
      />
    </section>
  );
};

export default AppPersonalSalud;
