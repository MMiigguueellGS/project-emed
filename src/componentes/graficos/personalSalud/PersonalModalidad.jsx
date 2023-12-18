import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axiosURL } from "../../../configuracion/axios.config";
const PersonalModalidad = () => {
  const [personasModalidad, setPersonasModalidad] = useState(null);

  const obtenerData = () => {
    const url = "/personalSalud/personasContratos";
    axiosURL
      .get(url)
      .then(({ data }) => setPersonasModalidad(data))
      .catch((err) => console.log(err));
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#d500f9"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const obtenerDatosParaGrafico = (datos) => {
    const datosParaGrafico = datos.map((ele) => ({
      name: ele.descripcion,
      value: parseInt(ele.cantidad, 10),
    }));
    return datosParaGrafico;
  };

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <section className="col-span-3 ml-10 mt-6">
      <section className="grid  rounded-lg">
        <h2 className=" bg-gradient-to-b from-green-400/80 text-center text-blue-800 font-light text-2xl p-4 rounded-t-xl">
          Reporte Modalidad de contrato
        </h2>
        {personasModalidad && (
          <section className="grid grid-cols-1 md:grid-cols-2  mx-auto gap-16">
            <ResponsiveContainer
              width={470}
              aspect={1}
              className=" shadow-xl shadow-blue-500/60 hover:scale-110  flex justify-center items-center"
            >
              <PieChart width={400} height={400}>
                <Pie
                  data={obtenerDatosParaGrafico(personasModalidad)}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  fill="#8884d8"
                  dataKey="value" //personasModalidad.cantidad
                  outerRadius={165}
                  innerRadius={60}
                >
                  {personasModalidad.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer
              width={470}
              aspect={1}
              className=" shadow-xl shadow-blue-500/60 hover:scale-110 flex items-center justify-center"
            >
              <BarChart
                width={500}
                height={300}
                data={obtenerDatosParaGrafico(personasModalidad)}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="value" fill="#8884d8">
                  {personasModalidad &&
                    personasModalidad.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                    ))}
                </Bar>
                {/* <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" /> */}
              </BarChart>
            </ResponsiveContainer>
          </section>
        )}
      </section>
    </section>
  );
};

export default PersonalModalidad;
