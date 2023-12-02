import React from 'react'
// grid-cols-[repeat(12,__100px)]
const ListaPersonalSalud = ({ PersonalSalud,eliminarPersonalSalud,handleActualizar }) => {
  // const personal = PersonalSalud.map(persona=> per)
  return (
    <tr className="grid grid-cols-[repeat(12,_1fr)] grid-rows-1 gap-2 justify-center items-center py-2 text-center hover:bg-slate-50 hover:text-[#3c958c] hover:font-semibold text-sm font-mono ">
                        {/* <td>{PersonalSalud.microRed}</td>
      <td>{PersonalSalud.redSalud}</td>
                        <td>{PersonalSalud.idEstablecimiento}</td> */}
                        {/* <td>{PersonalSalud.dni}</td> */}
                        <td className='truncate tracking-wider'>{PersonalSalud.nombres.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.apellidos.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.correo.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.celular.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.direccionActual.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.PersonalSaludProfesion.descripcion}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.especialidad.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.brigadista.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.plataformaDefensa?'SI':'NO'}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.condicionContrato.descripcion.toUpperCase()}</td>
                        <td className='truncate tracking-wider'>{PersonalSalud.localidad?PersonalSalud.localidad.toUpperCase():""}</td>  
      
      <td>
        <button
          variant="danger"
          size="sm"
          className="px-1 text-2xl text-red-500 hover:text-[#43A49B]"
          onClick={() => eliminarPersonalSalud(PersonalSalud.id)}
        >
         <i class='bx bxs-trash'></i>
        </button>
        <button variant="warning" size="sm" className='px-1 text-2xl text-blue-500 hover:text-orange-500'
         onClick={() => handleActualizar(PersonalSalud)}
         >
         <i class='bx bxs-edit-alt' ></i>
        </button>
      </td>
    </tr>
  )
}

export default ListaPersonalSalud