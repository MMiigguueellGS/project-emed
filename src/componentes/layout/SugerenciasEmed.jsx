import React from 'react'

const SugerenciasEmed = ({emedInput,clickAgregarAinputEmed}) => {
  return (
    <ul className="absolute bg-green-300/80  z-10  grid top-20 w-full text-center ">
    { emedInput&&
      emedInput.map((emed) => (
        <li onClick={()=>clickAgregarAinputEmed(emed)} key={emed} className="text-black  hover:bg-emerald-600 capitalize cursor-pointer">
          {emed}
        </li>
      ))}
  </ul>
  )
}

export default SugerenciasEmed