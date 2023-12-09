import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PersonalBrigadistas = () => {
  const [numBrigadista, setNumBrigadista] = useState(null);
  const colors = ["#0088FE", "#FF0028", "#FF8042", "#d500f9"];

  const obtenerData = () => {
    const url = "http://localhost:8080/personalSalud/numBrigadistas";
    axios
      .get(url)
      .then(({ data }) => setNumBrigadista(data))
      .catch((err) => console.log(err));
  };

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const obtenerDatosParaGrafico = (datos) => {
 
    const datosParaGrafico = datos.map((ele) => ({
      name: ele.brigadista,
      value: parseInt(ele.numBrigadista, 10),
    }));
   
    return datosParaGrafico;
  };

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

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <section className="col-span-3 ml-14 mt-14">
      <section className="grid  rounded-lg ">
        <h2 className=" bg-gradient-to-b from-green-400/80 text-center text-blue-800 font-light text-2xl p-4 rounded-t-xl">
          Reporte Numero de Brigadistas
        </h2>
       <section className="grid grid-cols-1 md:grid-cols-2  mx-auto gap-16">
       <ResponsiveContainer width={470} aspect={1} className=" shadow-xl shadow-blue-500/60 hover:scale-110  flex justify-center items-center">
          <BarChart
            data={numBrigadista}
            width={100}
            height={100}
            margin={{ top: 80, right: 30, bottom: 5, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="brigadista" />
            <YAxis />

            <Bar
              dataKey="numBrigadista"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {numBrigadista &&
                numBrigadista.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width={470} aspect={1} className=" shadow-xl shadow-blue-500/60 hover:scale-110 flex items-center justify-center">
          {numBrigadista && (
            <div>
              <PieChart width={400} height={400}>
                <Pie
                  data={obtenerDatosParaGrafico(numBrigadista)}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value" //personasModalidad.cantidad
                  outerRadius={165}
                  innerRadius={60}
                >
                  {numBrigadista.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          )}
        </ResponsiveContainer>
       </section>
      </section>
    </section>
  );
};

export default PersonalBrigadistas;
