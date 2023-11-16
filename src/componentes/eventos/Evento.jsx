import React from 'react'
import ListaEvento from './ListaEvento'

const Evento = ({Evento,eliminarEvento,handleActualizar}) => {
  return (
    <div className='grid justify-center'>
      

    <table className='px-10'>
              <thead>
                  <tr className='grid grid-cols-[repeat(10,__1fr)] grid-rows-1 gap-4 justify-center items-center '>
                      <th>Red</th>
                      {/* <th>MicroRed</th>
                      <th>Establecimiento</th>
                      <th>Matricula</th> */}
                      <th>Marca</th>
                      <th>Placa</th>
                      <th>modelo</th>
                      <th>anioFabricacion</th>
                      <th>propietario</th>
                      <th>soat</th>
                      <th>revicionTecnica</th>
                      <th>condicion</th>
                      <th>accion</th>
                  </tr>
              </thead>
              <tbody>   
              
              
                   {
                    Evento.map((Evento) =>  <ListaEvento key={Evento.id} Evento = {Evento ?? []} eliminarEvento ={eliminarEvento} handleActualizar={handleActualizar} /> )
                   }
              
              
              </tbody>
          </table>

  </div>
  )
}

export default Evento