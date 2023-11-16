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

  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
      <h2 className="uppercase font-semibold text-4xl">Personal de Salud</h2>
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
        <button onClick={handelCreatePersonalSalud} className="cursor-pointer ">
          <div className=" grid first-letter:h-15 bg-[#43A49B] p-2 text-center">
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
