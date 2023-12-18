import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosURL } from "../configuracion/axios.config";
import { useInfoUsuario } from "../store/infoUsuario,";

const Login = () => {
  const login = useInfoUsuario((state) => state.login);
  const setNombreEmed = useInfoUsuario((state) => state.setNombreEmed);
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const submit = (data) => {
    const url = "/usuarios/api/login";
    const emed = data.emed;
    axiosURL
      .post(url, data)
      .then(({ data }) => {
        navigate("/");
        login(data);
        setNombreEmed(emed);
      })
      .catch((err) =>  setError(err));
  };
  return (
    <main className="  min-h-screen text-black grid items-center justify-center  gap-16  p-4 sm:grid-cols-[auto,_auto] sm:justify-center ">
      
      <section className="hidden sm:block sm:max-w-[450px] rounded-3xl  shadow-2xl shadow-slate-500">
        <img className="rounded-3xl" src="/img/equipo.jpeg" alt="" />
      </section>
      <form
        className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] relative"
        onSubmit={handleSubmit(submit)}
      >
        <header className="  w-[130px] h-[130px] mx-auto">
        <img src="/img/logo_emed.png" alt="" />
      </header>
        <h2 className=" font-semibold text-4xl text-center">Bienvenidos</h2>
        <h3 className="text-center">Ingresar Nombre del Emed y Contraseña</h3>
        <div className="flex border-2 border-blue-400 justify-between items-center">
          <input
            className="outline-none flex-1 bg-blue-200  p-2 uppercase placeholder:text-green-600"
            id="email"
            type="text"
            autoComplete="off"
            name="emed"
            placeholder="Emed"
            {...register("emed")}
          />
         <div className="text-2xl px-2"> <i className="bx bxs-user"></i></div>
        </div>

        <div className="flex border-2 border-blue-400 justify-between items-center">
         
          <input
            className="outline-none flex-1 bg-blue-200 border-b border-yellow-border placeholder:text-green-600 p-2"
            id="password"
            type="password"
            autoComplete="off"
            name="clave"
            placeholder="Contraseña"
            {...register("clave")}
          />
          <div className="text-2xl px-2 "> <i className="bx bxs-user"></i></div>
        </div>
        {error && (
  <p className="text-red-500 text-sm">{error.response && error.response.data && error.response.data.mensaje ? error.response.data.mensaje : 'Error desconocido'}</p>
)}
        <button className=" font-semibold max-w-max absolute -bottom-10 right-0 px-6 py-1 rounded-lg bg-green-700 text-white ">
          Acceder...
        </button>
        {/* <Link className='text-center underline' to="/auth/register" >O crear una cuenta nueva</Link> */}
      </form>
    </main>
  );
};

export default Login;
