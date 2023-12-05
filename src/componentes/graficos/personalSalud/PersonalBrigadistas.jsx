import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
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

  useEffect(() => {
    obtenerData();
  }, []);

  return (
    <section className="col-span-3 ml-10 mt-6">
      <section className="rounded-lg shadow-xl shadow-blue-500/60 w-[450px] h-[500px] hover:scale-110">
        <h2 className="text-center text-gray-800 font-light text-2xl">
          Reporte Numero de Brigadistas
        </h2>
        <ResponsiveContainer width={450} aspect={1}>
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
      </section>
    </section>
  );
};

export default PersonalBrigadistas;
