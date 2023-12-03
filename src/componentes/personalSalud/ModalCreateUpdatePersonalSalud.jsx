import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SugerenciaRed from "../layout/SugerenciaRed";
import SugerenciaMicroRed from "../layout/SugerenciaMicroRed";
import SugerenciaEstablecimiento from "../layout/SugerenciaEstablecimiento";
import SugerenciasProfesion from "../layout/SugerenciasProfesion";

const ModalCreateUpdatePersonalSalud = ({
  setIsShowModal,
  isShowModal,
  setIsPersonalSaludToUpdate,
  isPersonalSaludToUpdate,
  crearPersonalSalud,
  actualizarPersonalSalud,
  vaciarFormulario,
  valorInputRed,
  setvalorInputRed,
  valorInputMicroRed,
  setValorInputMicroRed,
  valorInputEstablecimiento,
  setValorInputEstablecimiento,
  valorInputProfesion,
  setValorInputProfesion,
}) => {
  // const {handleSubmit, register, reset, formState:{errors}} = useForm();
  //RED
  const [isRed, setIsRed] = useState(null); // contiene todas las redes y sus codigos
  const [redInput, setRedInput] = useState([]); //solo tiene los nombres de las redes y se usa para las sugerencias

  const [isMicroRed, setIsMicroRed] = useState(null);
  const [microRedInput, setMicroRedInput] = useState(null);

  const [isEstablecimiento, setIsEstablecimiento] = useState(null);
  const [establecimientoInput, setEstablecimientoInput] = useState(null); // ESTABLECIMIENTOS con su red , microred

  const { handleSubmit, register, reset, setValue } = useForm();
  const [contratos, setContratos] = useState([]);
  const [brigadista, setBrigadista] = useState("");

  const [profesionInput, setProfesionInput] = useState(null)
  const [profesiones, setProfesiones] = useState([]);

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
        setIsEstablecimiento(dataps);

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
        const dataMicroRed = data.map((elem) => ({
          codiMicroRed: elem.codiMicroRed,
          microRed: elem.microRed,
          red: elem.red,
        }));
        //crear un arreglo con microredes unicos
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
        setIsMicroRed(dataMicroRedUnicos);
      })
      .catch((err) => console.log(err));
  };
  const obtenerContratos = () => {
    const url = "http://localhost:8080/contratos";
    axios
      .get(url)
      .then(({ data }) => setContratos(data))
      .catch((err) => console.log(err));
  };
  const changeRed = (e) => {
    const redABuscar = e.target.value;
    if (redABuscar) {
      const nombresRed = isRed.map((red) => red.red);
      const listaRed = nombresRed.filter((red) =>
        red.toLowerCase().includes(redABuscar)
      ); // busca las sugerencias deacuerdo alo que se ingresa en el input
      const mapred = listaRed.map((red) => red.toLowerCase()); //
      setRedInput(mapred);
    } else {
      setRedInput(null); //si el input esta vacio , oculta las sugerencias
    }
    setvalorInputRed(redABuscar);
  };

  const clickAgregarAinputRed = (red) => {
    setvalorInputRed(red);
    setValue("redSalud", red);
    setRedInput(null);
  };

  const changeMicroRed = (e) => {
    const microRedABuscar = e.target.value;
    if (microRedABuscar !== "") {
      const nombresMicroRed = isMicroRed
        .filter((microRed) =>
          microRed.red.toLowerCase().includes(valorInputRed)
        )
        .map((red) => red.microRed.toLowerCase());

      const sugerenciasMr = nombresMicroRed.filter((microRed) =>
        microRed.toLowerCase().includes(microRedABuscar)
      );
      setMicroRedInput(sugerenciasMr); // actualiza las sugerencias deacuerdo a lo que se ingresa en el input
    } else {
      setMicroRedInput(null); //si el input esta vacio , oculta las sugerencias
    }
    setValorInputMicroRed(microRedABuscar);
  };

  const clickAgregarAinputMr = (mr) => {
    setValorInputMicroRed(mr);
    setValue("microRed", mr);
    setMicroRedInput(null);
  };
  const changeEstablecimiento = (e) => {
    const establecimientoABuscar = e.target.value;
    if (establecimientoABuscar !== "") {
      const nombresEstablecimiento = isEstablecimiento
        .filter((eess) =>
          eess.microRed.toLowerCase().includes(valorInputMicroRed)
        )
        .map((eess) => eess.NombreEstablecimiento.toLowerCase());

      const sugerenciasEEss = nombresEstablecimiento.filter((eess) =>
        eess.toLowerCase().includes(establecimientoABuscar)
      );
      setEstablecimientoInput(sugerenciasEEss); // actualiza las sugerencias deacuerdo a lo que se ingresa en el input
    } else {
      setEstablecimientoInput(null); //si el input esta vacio , oculta las sugerencias
    }
    setValorInputEstablecimiento(establecimientoABuscar);
  };
  const hallarIdEstablecimiento = (eess) => {
    const establecimiento = isEstablecimiento.find(
      (es) => es.NombreEstablecimiento.toLowerCase() === eess
    );
    return establecimiento.idEstablecimiento;
  };
  const clickAgregarAinputEEss = (eess) => {
    setValorInputEstablecimiento(eess);
    const idEstablecimiento = hallarIdEstablecimiento(eess);
    setValue("idEstablecimiento", idEstablecimiento);
    setEstablecimientoInput(null);
  };
  const obtenerProfesiones = () => {
    const url = "http://localhost:8080/profesiones";
    axios
      .get(url)
      .then(({ data }) => setProfesiones(data))
      .catch((err) => console.log(err));
  };

  const onChangeProfesion = (e) => {
    const profesionABuscar = e.target.value;
    if (profesionABuscar !== "") {
      const nombresProfesiones = profesiones
        .filter((profesion) =>
          profesion.descripcion.toLowerCase().includes(valorInputProfesion)
        )
        .map((profesion) => profesion.descripcion.toLowerCase());

      const sugerenciasProfesion = nombresProfesiones.filter((profesion) =>
        profesion.toLowerCase().includes(profesionABuscar)
      );
      console.log(profesionABuscar)
      setProfesionInput(sugerenciasProfesion); // actualiza las sugerencias deacuerdo a lo que se ingresa en el input
      
    } else {
      setProfesionInput(null); //si el input esta vacio , oculta las sugerencias
    }
    setValorInputProfesion(profesionABuscar);
  };

  const hallarIdProfesion = (profesion) => {
   
    const profesionId = profesiones.find(
      (em) => em.descripcion.toLowerCase() === profesion
    );
    console.log( profesionId.idProfesion)
    return profesionId.idProfesion;
  };

  const clickAgregarAinputProfesion= (profesion) => {
    setValorInputProfesion(profesion);
    const idProfesion = hallarIdProfesion(profesion);
    console.log(idProfesion)
    setValue("profesion", idProfesion);
    setProfesionInput(null);
  };
  const changeSelectBrigadista = (e) => {
    setBrigadista(e.target.value);
  };
  // dispara el modal setIsShowModal = true se mostrara
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    setIsPersonalSaludToUpdate(null);
    reset(vaciarFormulario);
    setvalorInputRed("");
    setValorInputMicroRed("");
    setValorInputEstablecimiento("");
    setRedInput(null);
  };
  const limpiarFormulario = () => {
    reset(vaciarFormulario);
    setvalorInputRed("");
    setValorInputMicroRed("");
    setValorInputEstablecimiento("");
    setRedInput(null);
  };
  const submit = (data) => {
    if (isPersonalSaludToUpdate) {
      const eess = isPersonalSaludToUpdate.PersonalSaludEstablecimiento.NombreEstablecimiento.toLowerCase()
      const idEstablecimiento = hallarIdEstablecimiento(eess);     
      data.idEstablecimiento = Number(idEstablecimiento)    

      const profesion =
      isPersonalSaludToUpdate.PersonalSaludProfesion.descripcion.toLowerCase();
      const idProfesion = hallarIdProfesion(profesion);
      data.profesion = idProfesion;
      actualizarPersonalSalud(data, reset);
    } else {
      crearPersonalSalud(data, reset);
    }
  };

  useEffect(() => {
    obtenerContratos();
    obtenerRedMicroredEeSs();
    obtenerProfesiones()
  }, []);
  useEffect(() => {
    if (isPersonalSaludToUpdate) {
      reset({
        
          redSalud: isPersonalSaludToUpdate.redSalud,
          microRed: isPersonalSaludToUpdate.microRed,
          idEstablecimiento: isPersonalSaludToUpdate.PersonalSaludEstablecimiento.NombreEstablecimiento,
          dni: isPersonalSaludToUpdate.dni,
          nombres: isPersonalSaludToUpdate.nombres,
          apellidos: isPersonalSaludToUpdate.apellidos,
          correo: isPersonalSaludToUpdate.correo,
          celular: isPersonalSaludToUpdate.celular,
          direccionActual: isPersonalSaludToUpdate.direccionActual,
          profesion: isPersonalSaludToUpdate.PersonalSaludProfesion.descripcion,
          especialidad: isPersonalSaludToUpdate.especialidad,
          brigadista: isPersonalSaludToUpdate.brigadista,
          plataformaDefensa: isPersonalSaludToUpdate.plataformaDefensa,
          idCondicion: isPersonalSaludToUpdate.idCondicion,
          localidad: isPersonalSaludToUpdate.localidad,
      });
       }
  }, [isPersonalSaludToUpdate]);

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
          {isPersonalSaludToUpdate
            ? "Editar PersonalSalud"
            : "Crear PersonalSalud"}
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 ">
          {/* RED - MICRORED -EESS  */}
          <section className=" grid justify-center">
            <div className="flex gap-2  relative">
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                autoComplete="off"
                name="redSalud"
                type="text"
                value={valorInputRed}
                placeholder="Red de Salud ... "
                {...register("redSalud", {
                  onChange: (e) => changeRed(e),
                })}
              />
              {redInput && (
                <SugerenciaRed
                  redInput={redInput}
                  clickAgregarAinputRed={clickAgregarAinputRed}
                />
              )}
            </div>
            <div className="flex gap-2  relative">
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                autoComplete="off"
                name="microRed"
                type="text"
                value={valorInputMicroRed}
                placeholder="Micro Red ... "
                {...register("microRed", {
                  onChange: (e) => changeMicroRed(e),
                })}
              />
              {microRedInput && (
                <SugerenciaMicroRed
                  microRedInput={microRedInput}
                  clickAgregarAinputMr={clickAgregarAinputMr}
                />
              )}
            </div>
            <div className="flex gap-2  relative">
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="idEstablecimiento"
                type="text"
                value={valorInputEstablecimiento}
                placeholder="Establecimiento ... "
                {...register("idEstablecimiento", {
                  onChange: (e) => changeEstablecimiento(e),
                })}
              />
              {establecimientoInput && (
                <SugerenciaEstablecimiento
                  establecimientoInput={establecimientoInput}
                  clickAgregarAinputEEss={clickAgregarAinputEEss}
                />
              )}
            </div>

            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="nombres"
                type="text"
                placeholder="Nombres ..."
                {...register("nombres")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="apellidos"
                type="text"
                placeholder="Apellidos ... "
                {...register("apellidos")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="email">Red de salud</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="dni"
                type="text"
                placeholder="DNI ... "
                {...register("dni")}
              />
            </div>
          </section>

          <section className=" grid justify-center">
            <div className="flex gap-2 ">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="correo"
                type="text"
                placeholder="Correo ..."
                {...register("correo")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="celular"
                type="text"
                placeholder="Celular ..."
                {...register("celular")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="direccionActual"
                type="text"
                placeholder="Direccion Actual ..."
                {...register("direccionActual")}
              />
            </div>
            <div className="flex gap-2 relative">
              {/* <label htmlFor="password">Micro red</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="profesion"
                type="text"
                placeholder="Profesion ..."
                value={valorInputProfesion}
                {...register("profesion", {
                  onChange: (e) => onChangeProfesion(e),
                })}
              />
                {profesionInput && (
                <SugerenciasProfesion
                profesionInput={profesionInput}
                clickAgregarAinputProfesion={clickAgregarAinputProfesion}
                />
              )}
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="first_name">Establecimiento</label> */}
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                name="especialidad"
                type="text"
                placeholder="Especialidad ..."
                {...register("especialidad")}
              />
            </div>
            <div className="flex gap-2 ">
              {/* <label htmlFor="last_name">Matricula</label> */}
              <select
                className="outline-none   bg-transparent   capitalize text-[#26A69A] font-semibold"
                name="brigadista"
                {...register("brigadista", {
                  onChange: (e) => changeSelectBrigadista(e),
                })}
              >
                <option value="">Seleccion brigadista... </option>
                <option value="Intervención Inicial">
                  {" "}
                  Intervención Inicial
                </option>
                <option value="Hospitalario ">Hospitalario </option>
                <option value="Comunitario">Comunitario</option>
              </select>
            </div>
            <div className="flex gap-2 ">
              <select
                className="outline-none   bg-transparent   capitalize text-[#26A69A] font-semibold"
                name="idCondicion"
                {...register("idCondicion")}
              >
                <option value="">Selecciona el contrato </option>{" "}
                {contratos.map((contrato) => (
                  <option
                    className="capitalize"
                    key={contrato.idCondicion}
                    value={contrato.idCondicion}
                  >
                    {contrato.descripcion.toLowerCase()}
                  </option>
                ))}
              </select>
            </div>
            <section>
              <div className="outline-none   bg-transparent   capitalize text-[#26A69A] font-semibold flex gap-4">
                <label> plataforma de defensa civil</label>
                <input
                  type="checkbox"
                  name="plataformaDefensa"
                  value={true}
                  {...register("plataformaDefensa")}
                />
              </div>

              {brigadista == "Comunitario" && (
                <div className="flex gap-2 ">
                  {/* <label htmlFor="first_name">Establecimiento</label> */}
                  <input
                    className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                    name="localidad"
                    type="text"
                    placeholder="Localidad ..."
                    {...register("localidad")}
                  />
                </div>
              )}
            </section>
          </section>
        </div>

        <section className="flex justify-center gap-8">
          <button className=" rounded-md text-[#43A49B] bg-[#263339] py-2 px-2">
            {isPersonalSaludToUpdate ? "Guardar Cambios" : "Crear "}
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

export default ModalCreateUpdatePersonalSalud;
