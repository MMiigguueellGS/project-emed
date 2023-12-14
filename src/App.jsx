import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AppAmbulancias from "./componentes/ambulancias/AppAmbulancias";
import AppBienes from "./componentes/bienes/AppBienes";
import AppEventos from "./componentes/eventos/AppEventos";
import PersonalBrigadistas from "./componentes/graficos/personalSalud/PersonalBrigadistas";
import PersonalModalidad from "./componentes/graficos/personalSalud/PersonalModalidad";
import ListaReportesPersonal from "./componentes/layout/ListaReportesPersonal";
import AppPersonalSalud from "./componentes/personalSalud/AppPersonalSalud";
import Home from "./paginas/Home";
import Registros from "./paginas/Registros";
import Reportes from "./paginas/Reportes";
import ReportePersonal from "./reportes/personalSalud/ReportePersonal";
import Login from "./paginas/Login";
const ls= localStorage
function App() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const cerrarSesion = ()=>{
    setIsLogin(false)
    navigate("/auth/login" )
    ls.setItem("token","")
  }
  return (
    <main className="">
      <section className="min-h-screen w-full grid grid-rows-[1fr_auto]   bg-slate-50">
        {
          isLogin&&
          <nav className=" flex justify-around items-center bg-gray-600  min-w-full fixed text-white border-b-8 border-[#51c1b5]">
          <div className="w-38 text-sm py-[2px] ">
            <img className="w-16 mx-auto" src="/img/logo_emed.png" alt="" />
            <h2 className="text-center">Emergencias y Desastres - GRSL</h2>
          </div>
          <ul className="flex justify-center items-center  font-semibold text-lg ">
            <li className="flex items-center justify-center sm:w-40 w-24  h-full from-[#43A49B] via-[#cdfaf6] to-[#43A49B]  px-2 text-center mr-[1px]  hover:text-emerald-300 hover:border-b-2 hover:border-white hover:text-xl">
              <Link to="/">BIENVENIDOS</Link>
            </li>
            <li className=" flex items-center justify-center sm:w-40 w-24 h-full from-[#43A49B] via-[#cdfaf6] to-[#43A49B] px-2 text-center mr-[2px] hover:text-emerald-300 hover:border-b-2 hover:border-white hover:text-xl">
              <Link to="/registros">REGISTROS</Link>
            </li>
            <li className="flex items-center justify-center sm:w-40 w-24 h-full  from-[#43A49B] via-[#cdfaf6] to-[#43A49B]  px-2 text-center hover:text-emerald-300 hover:border-b-2 hover:border-white hover:text-xl">
              <Link to="/reportes/">REPORTES</Link>
            </li>
          </ul>
          <button type="button" onClick={cerrarSesion} to="/auth/login">Cerrar Sesion</button>
        </nav>
        }

        <Routes>
          <Route path="/auth/login" element={<Login  setIsLogin={setIsLogin}/>} />
          <Route path="/" element={<Home setIsLogin={setIsLogin}/>} />
          <Route path="/registros" element={<Registros setIsLogin={setIsLogin}/>} />
          <Route path="/reportes/" element={<Reportes setIsLogin={setIsLogin} />} />

          <Route path="/reportesPersonal/" element={<ReportePersonal setIsLogin={setIsLogin}/>}>
            <Route
              path="personalBrigadistas"
              element={<PersonalBrigadistas />}
            />
            <Route path="personalModalidad" element={<PersonalModalidad />} />
          </Route>

          <Route
            path="/reportesAmbulancias"
            element={<ListaReportesPersonal setIsLogin={setIsLogin}/>}
          />

          <Route path="/reportesBienes" element={<ListaReportesPersonal setIsLogin={setIsLogin}/>} />

               <Route path="/ambulancias" element={<AppAmbulancias setIsLogin={setIsLogin}/>} />
          <Route path="/personalSalud" element={<AppPersonalSalud setIsLogin={setIsLogin}/>} />
          <Route path="/bienes" element={<AppBienes setIsLogin={setIsLogin}/>} />
          <Route path="/eventos" element={<AppEventos setIsLogin={setIsLogin} />} />

          <Route path="*" element="" />
        </Routes>
        {/* <footer className="h-14 bg-[#728f9e] text-white">Mi Fotter</footer> */}
      </section>
    </main>
  );
}

export default App;
