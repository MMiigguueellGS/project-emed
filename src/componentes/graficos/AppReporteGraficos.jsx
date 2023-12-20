import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { axiosURL } from '../../configuracion/axios.config';

const AppReporteGraficos = () => {
const [totales, setTotales] = useState(null)
  useEffect(() => {
    const url = `/personalSalud/totales`;
    axiosURL
      .get(url)
      .then(({ data }) =>  setTotales(data))
      .catch((err) => console.log(err));
  }, [])
  
  return (
    <div className='col-span-3 ml-8  rounded-2xl my-8'> 
      {
        totales&& 
        <section className='w-full   flex flex-wrap gap-10'>
          <article className='w-[340px] p-3 rounded-3xl mt-4 mx-auto bg-red-600 hover:bg-gray-500 '>
            <div className='flex justify-between items-center text-white'><span className='text-lg '>Personal de Salud</span> <i className='bx bx-male-female text-5xl' ></i></div>
            <div className='text-[64px] font-semibold text-center text-green-700/90'>{totales.totalPersonal}</div>
            <div className='flex gap-2 text-white justify-center'><span className='text-blue-300 '>trabajadores </span> totales</div>
          </article>
          <article className='w-[340px]  p-3 rounded-3xl mt-4 mx-auto bg-sky-400 hover:bg-gray-500'>
            <div className='flex justify-between items-center text-white'><span className='text-lg '>Ambulacias </span><i className='bx bx-male-female text-5xl ' ></i> </div>
            <div className='text-[64px] font-semibold text-center text-green-700'>{totales.totalAmbulancias}</div>
            <div  className='flex gap-2 text-white justify-center'><span className='text-red-600'>Ambulancias </span> totales</div>
          </article>
          <article className='w-[340px] p-3 rounded-3xl mt-4 mx-auto bg-teal-600 hover:bg-gray-500'>
            <div className='flex justify-between items-center text-white'><span className='text-lg '>Bienes </span> <i className='bx bx-male-female text-5xl' ></i></div>
            <div className='text-[64px] font-semibold text-center text-green-700'>{totales.totalBienes}</div>
            <div  className='flex gap-2 text-white justify-center'><span className='text-orange-300'>Bienes </span> totales</div>
          </article>
        </section>
      }
    </div>
  )
}

export default AppReporteGraficos