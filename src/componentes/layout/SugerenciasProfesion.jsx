import React from 'react'

const SugerenciasProfesion =  ({profesionInput,clickAgregarAinputProfesion}) => {
  return (
    <ul className="absolute bg-green-300/80  z-10  grid top-20 w-full text-center ">
    { profesionInput&&
      profesionInput.map((profesion) => (
        <li onClick={()=>clickAgregarAinputProfesion(profesion)} key={profesion} className="text-black  hover:bg-emerald-600 capitalize cursor-pointer">
          {profesion}
        </li>
      ))}
  </ul>
  )
}


export default SugerenciasProfesion