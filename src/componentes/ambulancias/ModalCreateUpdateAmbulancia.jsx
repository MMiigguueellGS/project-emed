import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form"
const ModalCreateUpdateAmbulancia = ({
  setIsShowModal,
  isShowModal,
  setIsAmbulanciaToUpdate,
  isAmbulanciaToUpdate,
  crearAmbulancia
}) => {
  // const {handleSubmit, register, reset, formState:{errors}} = useForm();
  const [isRed, setIsRed] = useState(null);
  const [isMicroRed, setIsMicroRed] = useState([]);
  const [isEstablecimiento, setIsEstablecimiento] = useState([]);
  const [redMrEeSs, setRedMrEeSs] = useState(null);
  const [codiRed, setCodiRed] = useState("");

  const {handleSubmit,register,reset,setValue} = useForm()
  const { onChange, onBlur, name, ref } = register('redSalud')


  const obtenerRedMicroredEeSs = () => {
    const url = "http://localhost:8080/establecimientos";
    axios
      .get(url)
      .then(({ data }) => {
        // obtento los establecimientos con sus redes y micrordes
        const dataps = data.map((elem) => ({
          idEstablecimiento: elem.idEstablecimiento,
          NombreEstablecimiento: elem.NombreEstablecimiento,
          codiMicroRed: elem.codiMicroRed,
          microRed: elem.microRed,
          codiRed: elem.codiRed,
          red: elem.red,
        }));
        setRedMrEeSs(dataps);

        // Obtengo todas la redes , valores unicos de redes
        const dataRed = data.map((elem) => ({
          codiRed: elem.codiRed,
          red: elem.red,
        }));
        const dataRedUnicos = [];
        const redUnicos = new Set();
        dataRed.forEach((elem) => {
          if (!redUnicos.has(elem.codiRed)) {
            redUnicos.add(elem.codiRed);
            dataRedUnicos.push({
              codiRed: elem.codiRed,
              red: elem.red,
            });
          }
        });
        setIsRed(dataRedUnicos);

        // Obtengo todas las microredes , valores unicos de las microredes
      })
      .catch((err) => console.log(err));
  };

  const changeSelectRed = (e) => {
    setCodiRed(e.target.value); //Actualiza el estado del codigo de la red
    console.log(e.target.value)
    const dataMicroRed = redMrEeSs.map((elem) => ({
      codiMicroRed: elem.codiMicroRed,
      microRed: elem.microRed,
      red: elem.red,
    }));

    //AGREGA DATOS AL SELECT DE MICROREDES DEPENDIENDO DE LA RED
    const dataMicroRedUnicos = []; //contendra todas las microredes
    const MicroRedUnicos = new Set(); //para validar mis microredes
    dataMicroRed.forEach((elem) => {
      if (!MicroRedUnicos.has(elem.codiMicroRed)) {
        MicroRedUnicos.add(elem.codiMicroRed);
        dataMicroRedUnicos.push({
          codiMicroRed: elem.codiMicroRed,
          microRed: elem.microRed,
          red: elem.red,
        });
      }
    });
    // filtra las microredes dependiendo de la red
    const microRed = dataMicroRedUnicos.filter(
      (elem) => elem.red === e.target.value
    );
    setIsMicroRed(microRed);
    setValue('redSalud',e.target.value)
  };

  const changeSelectMicroRed = (e) => {
   
    const establecimientos = redMrEeSs.filter(
      (elem) => elem.red === codiRed && elem.microRed === e.target.value
    );
    setIsEstablecimiento(establecimientos);
    setValue('microRed',e.target.value)
  };

  // dispara el modal setIsShowModal = true se mostrara
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    setIsAmbulanciaToUpdate(null);
  };
  const submit = (data) => {
    crearAmbulancia(data,reset)
  };

  useEffect(() => {
    obtenerRedMicroredEeSs();
  }, []);

  return (
    <section
      className={`fixed bg-[#26A69A]/30 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-300 ${
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
          {isAmbulanciaToUpdate ? "Editar Ambulancia" : "Crear Ambulancia"}
        </h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 ">
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <select
               
                className="outline-none   bg-transparent   capitalize text-[#26A69A] font-semibold"
                name='redSalud'
                {...register('redSalud', {
                  onChange: (e) => changeSelectRed(e)
                })}
              >
                <option value="">Selecciona tu red</option>
                {redMrEeSs &&
                  isRed.map((elem) => (
                    <option key={elem.codiRed} value={elem.red}>
                      {elem.red}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-2 ">
              <select
                
                className="outline-none   bg-transparent   capitalize text-[#26A69A] font-semibold"
                name='microRed'
                {...register('microRed', {
                  onChange: (e) => changeSelectMicroRed(e)
                })}
              >
                <option value="">Selecciona tu Micro Red</option>
                {redMrEeSs &&
                  isMicroRed?.map((elem) => (
                    <option
                      className="capitalize"
                      key={elem.codiMicroRed}
                      value={elem.microRed}
                    >
                      {elem.microRed}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex gap-2 ">
              <select className="outline-none   bg-transparent  capitalize text-[#26A69A] font-semibold"
              name='idEstablecimiento'
             {...register('idEstablecimiento')}
                >
                <option value="">Selecciona tu Establecimiento</option>
                {redMrEeSs &&
                  isEstablecimiento.map((elem) => (
                    <option
                      className="capitalize"
                      key={elem.idEstablecimiento}
                      value={elem.idEstablecimiento}
                    >
                      {elem.NombreEstablecimiento}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="matricula"
                type="text"
                placeholder="Matricula ..."
              {...register("matricula")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="marcaVehiculo"
                type="text"
                placeholder="Marca ... "
                {...register("marcaVehiculo")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="nPlaca"
                type="text"
                placeholder="Num placa ... "
                {...register("nPlaca")}
              />
            </div>
          </section>
          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="modelo"
                type="text"
                placeholder="Modelo ..."
                {...register("modelo")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="anioFabricacion"
                type="text"
                placeholder="Anio Fabricacion ..."
                {...register("anioFabricacion")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="propietario"
                type="text"
                placeholder="Propietario ..."
                {...register("propietario")}
              />
            </div>
            <section>
              <div className="flex gap-4  ">
                <label> Soat Vigente</label>
                <input type="checkbox" name="soat" value="Si"  {...register('soat')}/>
              </div>
              <div className="flex gap-4  ">
                <label> Revision Tecnica</label>
                <input type="checkbox" name="revicionTecnica" value="Si" {...register('revicionTecnica')} />
              </div>
              <div className="flex gap-2  ">
                <label htmlFor="">Condicion</label>
                <select  name="condicion" {...register('condicion')}  >
                  <option value="bueno">Bueno</option>
                  <option value="regular">Regular</option>
                  <option value="malo">Malo</option>
                </select>
              </div>
            </section>
          </section>
        </div>

        <section className="flex justify-center gap-8">
          <button className=" rounded-md text-[#43A49B] bg-[#263339] py-2 px-2">
            {isAmbulanciaToUpdate ? "Guardar Cambios" : "Crear "}
          </button>
          <button className="rounded-md  text-[#43A49B] bg-[#263339] py-2 px-2">
            Limpiar
          </button>
        </section>
      </form>
    </section>
  );
};

export default ModalCreateUpdateAmbulancia;
