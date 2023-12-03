import React from "react";
import ListaAmbulancias from "./ListaAmbulancias";

const Ambulancias = ({ ambulancias, eliminarAmbulancia, handleActualizar }) => {
  return (
    <div className="  bg-green-400/50 shadow-lg shadow-indigo-500/40  ">
      <table className="w-full">
        <thead className="bg-gray-600 text-white ">
          <tr className="grid grid-cols-[repeat(10,_1fr)] grid-rows-1 w-full uppercase py-2">
            <th className="truncate">Red</th>
            <th className="truncate">Marca</th>
            <th className="truncate">Placa</th>
            <th className="truncate">modelo</th>
            <th className="truncate">anioFabricacion</th>
            <th className="truncate">propietario</th>
            <th className="truncate">soat</th>
            <th className="truncate">revicionTecnica</th>
            <th className="truncate">condicion</th>
            <th className="truncate">accion</th>
          </tr>
        </thead>
        <tbody>
          {ambulancias.map((ambulancia) => (
            <ListaAmbulancias
              key={ambulancia.id}
              ambulancia={ambulancia ?? []}
              eliminarAmbulancia={eliminarAmbulancia}
              handleActualizar={handleActualizar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ambulancias;
