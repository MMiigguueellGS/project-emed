import React from "react";
// import { useForm } from "react-hook-form"
const ModalCreateUpdate = ({
  setIsShowModal,
  isShowModal,
  setIsAmbulanciaToUpdate,
  isAmbulanciaToUpdate,
}) => {
  // const {handleSubmit, register, reset, formState:{errors}} = useForm();

  // dispara el modal setIsShowModal = true se mostrara
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    // reset(EMPTY_FORM_VALUES)
    setIsAmbulanciaToUpdate(null);
  };
  const submit = (data) => {};

  return (
    <section
      className={`fixed bg-[#26A69A]/30 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-300 ${
        isShowModal
          ? "visible opacity-100 sclae-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        // onSubmit={handleSubmit(submit)}
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
          {isAmbulanciaToUpdate ? "Editar Ambulancia" : "Crear Ambulancia"}
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 ">
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A]  text-[#26A69A] font-semibold "
                id="password"
                type="text"
                placeholder="Red de salud ..."
                // {...register("password", validationPasswordInput)}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none   bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="first_name"
                type="text"
                placeholder="Micro Red ..."
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="last_name"
                type="text"
                placeholder="Establemiento ..."
              />
            </div>

            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="email"
                type="text"
                placeholder="Matricula ..."
                // {...register("email", validationEmailInput)}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="email"
                type="text"
                placeholder="Marca ... "
                // {...register("email", validationEmailInput)}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="email"
                type="text"
                placeholder="Num placa ... "
                // {...register("email", validationEmailInput)}
              />
            </div>
          </section>
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="password"
                type="text"
                placeholder="Modelo ..."
                // {...register("password", validationPasswordInput)}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="first_name"
                type="text"
                placeholder="Anio Fabricacion ..."
                // {...register("first_name", validationNameInput)}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="last_name"
                type="text"
                placeholder="Propietario ..."
                // {...register("last_name", validationNameInput)}
              />
            </div>
            <section>
            <div className="flex gap-4  ">
              <label> Soat Vigente</label>
              <input type="checkbox" name="male" value="male" />
            </div>
            <div className="flex gap-4  ">
              <label> Revision Tecnica</label>
              <input type="checkbox" name="male" value="male" />
            </div>
            <div className="flex gap-2  ">
              <label htmlFor="">Condicion</label>
              <select name="" id="">
                <option value="1">condicion1</option>
                <option value="2">Condicion2</option>
                <option value="3">Condicion3</option>
              </select>
            </div>
            </section>
          </section>
        </div>

        <section className="flex justify-center gap-8">
          <button className=" rounded-md text-[#43A49B] bg-[#263339] py-2 px-2">
            {isAmbulanciaToUpdate ? "Guardar Cambios" : "Crear "}
          </button>
          <button className="rounded-md  text-[#43A49B] bg-[#263339] py-2 px-2">Limpiar</button>
        </section>
      </form>
    </section>
  );
};

export default ModalCreateUpdate;