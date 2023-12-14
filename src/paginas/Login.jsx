import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { urlAxios } from "../configuracion/axios.config";
import axios from "axios";
const ls =localStorage
const Login = ({setIsLogin}) => {
  useEffect(() => {
    
  }, [])
  

  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const submit = (data)=>{
    setIsLogin(true)
    console.log(data)
    const url = "http://localhost:8080/usuarios/api/login"
   axios
    .post(url,data)
    .then(({data}) => {
      navigate("/")
      ls.setItem('token',data.token)
    })
    .catch((err) => console.log(err))
  }
  return (
    <main className="font-urbanist min-h-screen bg-purple-bg text-black grid justify-stretch items-center justify-items-center  bg-right-bottom bg-no-repeat gap-12 p-4 sm:grid-cols-[auto,_auto] sm:justify-center ">
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/img/equipo.jpeg" alt="" />
      </header>

      <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px]"
      onSubmit={handleSubmit(submit)}
      >
        <h2 className="uppercase font-semibold text-4xl">Iniciar Sesion</h2>
        <div className="grid gap-4">
          <label className="text-black " htmlFor="email">
            Correo
          </label>
          <input
            className="outline-none bg-transparent border-b border-yellow-border p-1"
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
