import React from 'react'
import ListaPersonalSalud from './ListaPersonalSalud'

const PersonalSalud = ({PersonalSalud,eliminarPersonalSalud,handleActualizar}) => {
  return (
    <div className='grid justify-center'>
      

      <table className='px-10'>
                <thead>
                    <tr className='grid grid-cols-[repeat(12,__1fr)] grid-rows-1 gap-4 justify-center items-center '>                                           
                        {/* <th>redSalud</th>
                        <th>microRed</th>
                        <th>idEstablecimiento</th> */}
                        {/* <th>dni</th> */}
                        <th>nombres</th>
                        <th>apellidos</th>
                        <th>correo</th>
                        <th>celular</th>
                        <th>direccionActual</th>
                        <th>profesion</th>
                        <th>especialidad</th>
                        <th>brigadista</th>
                        <th>plataformaDefensa</th>
                        <th>Condicion</th>
                        <th>localidad</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>   
                
                
                     {
                      PersonalSalud.map((PersonalSalud) =>  <ListaPersonalSalud key={PersonalSalud.id} PersonalSalud = {PersonalSalud ?? []} eliminarPersonalSalud ={eliminarPersonalSalud} handleActualizar={handleActualizar} /> )
                     }
                
                
                </tbody>
            </table>

    </div>
  )
}

export default PersonalSalud