import React from 'react'

const SugerenciaMicroRed = ({microRedInput,clickAgregarAinputMr}) => {
  
  return (
    <ul className="absolute bg-green-300/80  z-20  grid top-20 w-full text-center ">
    { microRedInput&&
      microRedInput.map((microRed) => (
        <li onClick={()=>clickAgregarAinputMr(microRed)} key={microRed} className="text-black  hover:bg-emerald-600 capitalize cursor-pointer">
          {microRed}
        </li>
      ))}
  </ul>
  )
}

export default SugerenciaMicroRed