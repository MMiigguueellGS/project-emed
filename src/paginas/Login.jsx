import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosURL } from "../configuracion/axios.config";
import { useInfoUsuario } from "../store/infoUsuario,";

const Login = () => {
  const login = useInfoUsuario((state) => state.login);
  const setNombreEmed = useInfoUsuario((state) => state.setNombreEmed);
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
    const url = "/usuarios/api/login";
    const emed = data.emed
    axiosURL
      .post(url, data)
      .then(({ data }) => {
        navigate("/");
        login(data);       
        setNombreEmed(emed)
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className=" bg-red-400 font-urbanist min-h-screen bg-purple-bg text-black grid justify-stretch items-center justify-items-center  bg-right-bottom bg-no-repeat gap-12 p-4 sm:grid-cols-[auto,_auto] sm:justify-center ">
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/img/equipo.jpeg" alt="" />
      </header>

      <form
        className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px]"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="uppercase font-semibold text-4xl">Iniciar Sesion</h2>
        <div className="grid gap-4">
          <label className="text-black " htmlFor="email">
            Emed
          </label>
          <input
            className="outline-none bg-transparent border-b border-yellow-border p-1 uppercase"
            id="email"
            type="text"
            autoComplete="off"
            name="emed"
            {...register("emed")}
          />
        </div>

        <div className="grid gap-4">
          <label className="text-black" htmlFor="password">
            Contraseña
          </label>
          <input
            className="outline-none bg-transparent border-b border-yellow-border p-1"
            id="password"
            type="password"
            autoComplete="off"
            name="clave"
            {...register("clave")}
          />
        </div>

        <button className="bg-purple-light uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full ">
          Entrar
        </button>
        {/* <Link className='text-center underline' to="/auth/register" >O crear una cuenta nueva</Link> */}
      </form>
    </main>
  );
};

export default Login;
