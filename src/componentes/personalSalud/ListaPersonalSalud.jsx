import React from 'react'

const ListaPersonalSalud = ({ PersonalSalud,eliminarPersonalSalud,handleActualizar }) => {
  return (
    <tr className="grid grid-cols-[repeat(12,_1fr)] grid-rows-1 gap-4 justify-center items-center">
                        {/* <td>{PersonalSalud.microRed}</td>
      <td>{PersonalSalud.redSalud}</td>
                        <td>{PersonalSalud.idEstablecimiento}</td> */}
                        {/* <td>{PersonalSalud.dni}</td> */}
                        <td>{PersonalSalud.nombres}</td>
                        <td>{PersonalSalud.apellidos}</td>
                        <td>{PersonalSalud.correo}</td>
                        <td>{PersonalSalud.celular}</td>
                        <td>{PersonalSalud.direccionActual}</td>
                        <td>{PersonalSalud.PersonalSaludProfesion.descripcion}</td>
                        <td>{PersonalSalud.especialidad}</td>
                        <td>{PersonalSalud.brigadista}</td>
                        <td>{PersonalSalud.plataformaDefensa}</td>
                        <td>{PersonalSalud.condicionContrato.descripcion}</td>
                        <td>{PersonalSalud.localidad}</td>  
      
      <td>
        <button
          variant="danger"
          size="sm"
          className="me-1"
          onClick={() => eliminarPersonalSalud(PersonalSalud.id)}
        >
          Delete
        </button>
        <button variant="warning" size="sm"
         onClick={() => handleActualizar(PersonalSalud)}
         >
          Update
        </button>
      </td>
    </tr>
  )
}

export default ListaPersonalSalud