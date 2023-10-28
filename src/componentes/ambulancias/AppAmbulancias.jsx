import React, { useState } from "react";

import Ambulancias from "./Ambulancias";
import ModalCreateUpdate from "./ModalCreateUpdate";

const AppAmbulancias = () => {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  // const [ambulancias, setAmbulancias] = useState([]);
  const [isAmbulanciaToUpdate, setIsAmbulanciaToUpdate] = useState(null); // permite saber si hay informacion o no para editar

  const ambulancias = [1,2,3,4,6]
  const  handelCreateAmbulancia = ()=>{
    setIsShowModal(true)
  } 
  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
      <h2 className="uppercase font-semibold text-4xl">Ambulancias</h2>
      <section className=" flex justify-around">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black">
          <div className="ligthTheme p-4 rounded-md flex items-center gap-2  sm:w-[360px]">
            <i className="bx bx-search-alt-2 text-white text-lg"></i>
            <input
              id="countryName"
              className="outline-none flex-1 bg-white"
              placeholder="Ingresa la placa..."
              type="text"
              autoComplete="off"
              // onChange={handleChangeCountryName}
              // value={countryName}
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
      <ModalCreateUpdate setIsShowModal={setIsShowModal} isShowModal={isShowModal}  setIsAmbulanciaToUpdate={setIsAmbulanciaToUpdate}  isAmbulanciaToUpdate={isAmbulanciaToUpdate}/>
      <Ambulancias ambulancias={ambulancias ?? []}/>
    </section>
  );
};

export default AppAmbulancias;