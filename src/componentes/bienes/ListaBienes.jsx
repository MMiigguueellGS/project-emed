import React from "react";

const ListaBienes = ({ bien, eliminarBien, handleActualizar }) => {
  return (
    <tr className="grid grid-cols-[repeat(7,_1fr)] grid-rows-1 gap-4 justify-center items-center">
    
      <td>{bien.codigoPatrimonial}</td>
      <td>{bien.codigoBien}</td>
      <td>{bien.nombreBien}</td>
      <td>{bien.estadoBien}</td>
      <td>{bien.descripcion}</td>
     
      <td className="lowercase">{bien.BienEmed.nombreEmed}</td>

      <td className="flex gap-4">
        <button
          variant="danger"
          size="sm"
          className="m-1"
          onClick={() => eliminarBien(bien.id)}
        >
          Delete
        </button>
        <button
          variant="warning"
          size="sm"
          onClick={() => handleActualizar(bien)}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default ListaBienes;
