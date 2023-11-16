import React from 'react'

const SugerenciaEstablecimiento = ({establecimientoInput,clickAgregarAinputEEss}) => {
  return (
    <ul className="absolute bg-green-300/80  z-20  grid top-20 w-full text-center ">
    { establecimientoInput&&
      establecimientoInput.map((eess) => (
        <li onClick={()=>clickAgregarAinputEEss(eess)} key={eess} className="text-black  hover:bg-emerald-600 capitalize cursor-pointer">
          {eess}
        </li>
      ))}
  </ul>
  )
}

export default SugerenciaEstablecimiento