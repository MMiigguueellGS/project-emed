import React from 'react'
import ListaBienes from './ListaBienes'

const Bienes = ({bienes,eliminarBien,handleActualizar}) => {
  return (
    <div className='grid justify-center'>
    <table className='px-10'>
              <thead>
                  <tr className='grid grid-cols-[repeat(7,__1fr)] grid-rows-1 gap-4 justify-center items-center '>
                      <th>Codigo Patrinomial</th>
                      <th>Codigo Bien</th>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th>descripcion</th>
                      <th>Emed</th>
                      <th>Accion</th>
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