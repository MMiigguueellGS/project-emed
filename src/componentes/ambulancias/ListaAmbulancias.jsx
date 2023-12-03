import React from "react";

const Listaambulancias = ({ ambulancia,eliminarAmbulancia,handleActualizar }) => {

  return (
    <tr className="grid grid-cols-[repeat(10,_1fr)] grid-rows-1 gap-2 justify-center items-center p-2  text-center hover:bg-slate-50 hover:text-[#3c958c] hover:font-semibold text-sm font-mono ">
      <td className='truncate tracking-wider'>{ambulancia.redSalud}</td>
     
      <td  className='truncate tracking-wider'>{ambulancia.marcaVehiculo.toUpperCase()}</td>
      <td  className='truncate tracking-wider'>{ambulancia.nPlaca.toUpperCase()}</td>
      <td  className='truncate tracking-wider'>{ambulancia.modelo.toUpperCase()}</td>
      <td  className='truncate tracking-wider'>{ambulancia.anioFabricacion}</td>
      <td className='truncate tracking-wider' >{ambulancia.propietario.toUpperCase()}</td>
      <td  className='truncate tracking-wider'>{ambulancia.soat? "SI" : "NO"}</td>
      <td  className='truncate tracking-wider'>{ambulancia.revicionTecnica? "SI" : "NO"}</td>
      <td  className='truncate tracking-wider'>{ambulancia.condicion.toUpperCase()}</td>    
      
      <td className='flex gap-2 justify-center'>
        <button
          variant="danger"
          size="sm"
          className="px-1 text-2xl text-red-500 hover:text-[#43A49B]"
          onClick={() => eliminarAmbulancia(ambulancia.id)}
        >
          <i className='bx bxs-trash'></i>
        </button>
        <button variant="warning" size="sm" className='px-1 text-2xl text-blue-500 hover:text-orange-500'
         onClick={() => handleActualizar(ambulancia)}
         >
           <i className='bx bxs-edit-alt' ></i>
        </button>
      </td>
    </tr>
  );
};

export default Listaambulancias;
