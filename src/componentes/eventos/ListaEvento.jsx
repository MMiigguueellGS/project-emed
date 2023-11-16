import React from 'react'

const ListaEvento = ({ Evento,eliminarEvento,handleActualizar }) => {
  return (
    <tr className="grid grid-cols-[repeat(10,_1fr)] grid-rows-1 gap-4 justify-center items-center">
      <td className="lowercase">{Evento.redSalud}</td>
      {/* <td>{Evento.microRed}</td>
      <td>{Evento.idEstablecimiento}</td>
      <td>{Evento.matricula}</td> */}
      <td>{Evento.marcaVehiculo}</td>
      <td>{Evento.nPlaca}</td>
      <td>{Evento.modelo}</td>
      <td>{Evento.anioFabricacion}</td>
      <td>{Evento.propietario}</td>
      <td>{Evento.soat? "SI" : "NO"}</td>
      <td>{Evento.revicionTecnica? "SI" : "NO"}</td>
      <td>{Evento.condicion}</td>    
      
      <td>
        <button
          variant="danger"
          size="sm"
          className="me-1"
          onClick={() => eliminarEvento(Evento.id)}
        >
          Delete
        </button>
        <button variant="warning" size="sm"
         onClick={() => handleActualizar(Evento)}
         >
          Update
        </button>
      </td>
    </tr>
  )
}

export default ListaEvento