import React from "react";

const Listaambulancias = ({ ambulancia,eliminarAmbulancia,handleActualizar }) => {

  return (
    <tr className="grid grid-cols-[repeat(10,_1fr)] grid-rows-1 gap-4 justify-center items-center">
      <td className="lowercase">{ambulancia.redSalud}</td>
      {/* <td>{ambulancia.microRed}</td>
      <td>{ambulancia.idEstablecimiento}</td>
      <td>{ambulancia.matricula}</td> */}
      <td>{ambulancia.marcaVehiculo}</td>
      <td>{ambulancia.nPlaca}</td>
      <td>{ambulancia.modelo}</td>
      <td>{ambulancia.anioFabricacion}</td>
      <td>{ambulancia.propietario}</td>
      <td>{ambulancia.soat? "SI" : "NO"}</td>
      <td>{ambulancia.revicionTecnica? "SI" : "NO"}</td>
      <td>{ambulancia.condicion}</td>    
      
      <td>
        <button
          variant="danger"
          size="sm"
          className="me-1"
          onClick={() => eliminarAmbulancia(ambulancia.id)}
        >
          Delete
        </button>
        <button variant="warning" size="sm"
         onClick={() => handleActualizar(ambulancia)}
         >
          Update
        </button>
      </td>
    </tr>
  );
};

export default Listaambulancias;
