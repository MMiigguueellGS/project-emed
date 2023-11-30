import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import ListaReportes from "../../layout/ListaReportes";
const PersonalModalidad = () => {
  const [personasModalidad, setPersonasModalidad] = useState(null);

  const obtenerData = () => {
    const url = "http://localhost:8080/personalSalud/personasContratos";
    axios
      .get(url)
      .then(({ data }) => setPersonasModalidad(data))
      .catch((err) => console.log(err));
  };

  // const data = [
  //   { name: 'Nombrado', value: 3 },
  //   { name: 'contratado', value: 2 },
  //   { name: 'Serum', value: 4 },
  //   { name: 'Residentes', value: 1 },
  // ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#d500f9'];
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const obtenerDatosParaGrafico = (datos)=>{
  const datosParaGrafico = datos.map((ele)=>({
    name:ele.descripcion,
    value: parseInt(ele.cantidad,10)
  }))
  return datosParaGrafico
}

  useEffect(() => {
    obtenerData();
  }, []);

  return (
   <section className="flex gap-8  px-8">
     <ListaReportes/>
     <div className=" shadow-xl shadow-blur w-[450px] h-[500px] mt-20 hover:scale-110">
      <h2 className="text-center text-gray-800 font-light text-2xl">Reporte Modalidad de contrato</h2>
    {personasModalidad&&
    
       <ResponsiveContainer width="100%" height="100%">
       <PieChart width={400} height={400}>
         <Pie
           data={obtenerDatosParaGrafico(personasModalidad)}
           cx="50%"
           cy="50%"
           labelLine={false}
           label={renderCustomizedLabel}
           outerRadius={80}
           fill="#8884d8"
           dataKey='value' //personasModalidad.cantidad
           outerRadius={165}
          innerRadius={60}
          
         >
           {personasModalidad.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
           ))}
         </Pie>
         <Tooltip/>
       </PieChart>
     </ResponsiveContainer>
    }
    </div>
   </section>
  );
};

export default PersonalModalidad;
