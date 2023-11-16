import React from 'react'

const SugerenciaRed = ({redInput,clickAgregarAinputRed}) => {
  return (
    <ul className="absolute bg-green-300/80  z-10  grid top-20 w-full text-center ">
    { redInput&&
      redInput.map((red) => (
        <li onClick={()=>clickAgregarAinputRed(red)} key={red} className="text-black  hover:bg-emerald-600 capitalize cursor-pointer">
          {red}
        </li>
      ))}
  </ul>
  )
}

export default SugerenciaRed