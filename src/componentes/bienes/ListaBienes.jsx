import React from "react";

const ListaBienes = ({ bien, eliminarBien, handleActualizar }) => {
  return (
    <tr className="grid grid-cols-[repeat(7,_1fr)] grid-rows-1 gap-2 justify-center items-center p-2  text-center hover:bg-slate-50 hover:text-[#3c958c] hover:font-semibold text-sm font-mono ">
      <td className="truncate tracking-wider">
        {bien.codigoPatrimonial.toUpperCase()}
      </td>
      <td className="truncate tracking-wider">
        {bien.codigoBien.toUpperCase()}
      </td>
      <td className="truncate tracking-wider">
        {bien.nombreBien.toUpperCase()}
      </td>
      <td className="truncate tracking-wider">
        {bien.estadoBien.toUpperCase()}
      </td>
      <td className="truncate tracking-wider">
        {bien.descripcion.toUpperCase()}
      </td>
      <td className="truncate tracking-wider">
        {bien.BienEmed.nombreEmed.toUpperCase()}
      </td>

      <td className="flex gap-4 justify-center">
        <button
          variant="danger"
          size="sm"
          className="px-1 text-2xl text-red-500 hover:text-[#43A49B]"
          onClick={() => eliminarBien(bien.id)}
        >
            <i className='bx bxs-trash'></i>
        </button>
        <button
          variant="warning"
          size="sm"
          className='px-1 text-2xl text-blue-500 hover:text-orange-500'
          onClick={() => handleActualizar(bien)}
        >
           <i className='bx bxs-edit-alt' ></i>
        </button>
      </td>
    </tr>
  );
};

export default ListaBienes;
