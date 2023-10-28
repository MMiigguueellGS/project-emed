import React from 'react'
import ListaAmbulancias from './ListaAmbulancias'

const Ambulancias = ({ambulancias}) => {
  
  return (
    <div className='grid justify-center'>
      

      <table className='px-10'>
                <thead>
                    <tr className='grid grid-cols-[repeat(12,__1fr)] grid-rows-1 gap-4 justify-center items-center '>
                        <th>redSalud</th>
                        <th>microRed</th>
                        <th>idEstablecimiento</th>
                        <th>matricula</th>
                        <th>marcaVehiculo</th>
                        <th>nPlaca</th>
                        <th>modelo</th>
                        <th>anioFabricacion</th>
                        <th>soat</th>
                        <th>revicionTecnica</th>
                        <th>condicion</th>
                    </tr>
                </thead>
                <tbody>   
                
                
                     {
                      ambulancias.map(ambulancia =>  <ListaAmbulancias key={ambulancia} ambulancia = {ambulancia}/> )
                     }
                
                
                </tbody>
            </table>

    </div>
  )
}

export default Ambulancias