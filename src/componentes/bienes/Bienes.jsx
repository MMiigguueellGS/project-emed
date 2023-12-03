import React from 'react'
import ListaBienes from './ListaBienes'

const Bienes = ({bienes,eliminarBien,handleActualizar}) => {
  return (
    <div className='w-full bg-green-400/50 shadow-lg shadow-indigo-500/40  '>
   <table className='px-10 w-full'>
                <thead className='bg-gray-600 text-white'>
                    <tr className='grid grid-cols-[repeat(7,_1fr)] grid-rows-1 gap-2 justify-center items-center uppercase p-2'> 
                      <th className='truncate'>Codigo Patrinomial</th>
                      <th className='truncate'>Codigo Bien</th>
                      <th className='truncate'>Nombre</th>
                      <th className='truncate'>Estado</th>
                      <th className='truncate'>descripcion</th>
                      <th className='truncate'>Emed</th>
                      <th className='truncate'>Accion</th>
                  </tr>
              </thead>
              <tbody>   
              
              
                   {
                    bienes.map((bien) =>  <ListaBienes key={bien.id} bien = {bien ?? []} eliminarBien ={eliminarBien} handleActualizar={handleActualizar} /> )
                   }
              
              
              </tbody>
          </table>

  </div>
  )
}

export default Bienes