import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
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

function App() {
  useEffect(() => {
    // const url = "http://localhost:3000/api/v1/personalSalud/";
    // axios.get(url)
    //   .then(({ data }) => {
    //     setData(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez al montar el componente.

  return (
    <main className="">
      <section className="min-h-screen w-full grid grid-rows-[1fr_auto]   bg-slate-50">
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
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/reportes/" element={<Reportes />} />

          <Route path="/reportesPersonal/" element={<ReportePersonal />}>
            <Route path="personalBrigadistas"   element={<PersonalBrigadistas />}/>
            <Route path="personalModalidad" element={<PersonalModalidad />} />
          </Route>

          <Route path="/reportesAmbulancias" element={<ListaReportesPersonal />} />

          <Route path="/reportesBienes" element={<ListaReportesPersonal />} />

          {/*           
            <Route
              path="personalBrigadistas"
              element={<PersonalBrigadistas />}
            />
            <Route
              path="personalModalidad"
              element={<PersonalModalidad />}
            />
         */}

          <Route path="/ambulancias" element={<AppAmbulancias />} />
          <Route path="/personalSalud" element={<AppPersonalSalud />} />
          <Route path="/bienes" element={<AppBienes />} />
          <Route path="/eventos" element={<AppEventos />} />

          <Route path="/dashbord" element="" />
        </Routes>
        {/* <footer className="h-14 bg-[#728f9e] text-white">Mi Fotter</footer> */}
      </section>
    </main>
  );
}

export default App;
