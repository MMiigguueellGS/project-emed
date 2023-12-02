import React from 'react'
import ListaPersonalSalud from './ListaPersonalSalud'

const PersonalSalud = ({PersonalSalud,eliminarPersonalSalud,handleActualizar}) => {
  return (
    <div className='grid justify-center items-center bg-green-400/50 shadow-lg shadow-indigo-500/40  '>
      

      <table className='px-10 sm:[1600px]'>
                <thead className='bg-gray-600 text-white'>
                    <tr className='grid grid-cols-[repeat(12,__1fr)] grid-rows-1 gap-2 justify-center items-center uppercase py-2'>                                           
                        {/* <th>redSalud</th>
                        <th>microRed</th>
                        <th>idEstablecimiento</th> */}
                        {/* <th>dni</th> */}
                        <th className='truncate'>nombres</th>
                        <th className='truncate'>apellidos</th>
                        <th className='truncate'>correo</th>
                        <th className='truncate'>celular</th>
                        <th className='truncate'>direccion</th>
                        <th className='truncate'>profesion</th>
                        <th className='truncate'>especialidad</th>
                        <th className='truncate'>brigadista</th>
                        <th className='truncate'>plataformaDefensa</th>
                        <th className='truncate'>Condicion</th>
                        <th className='truncate'>localidad</th>
                        <th className='truncate'>Accion</th>
                    </tr>
                </thead>
                <tbody >   
                
                
                     {
                      PersonalSalud.map((PersonalSalud) =>  <ListaPersonalSalud key={PersonalSalud.id} PersonalSalud = {PersonalSalud ?? []} eliminarPersonalSalud ={eliminarPersonalSalud} handleActualizar={handleActualizar} /> )
                     }
                
                
                </tbody>
            </table>

    </div>
  )
}

export default PersonalSalud