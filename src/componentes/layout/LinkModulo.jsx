import React from 'react'
import { Link } from 'react-router-dom'

const LinkModulo = ({children,icono,ruta}) => {
  return (
    <article className="  w-[280px] aspect-square bg-[#43A49B] rounded-3xl hover:scale-110">
        <Link className="grid grid-rows-2 px-6 items-center text-center h-full cursor-pointer" to={`${ruta}`}>
          <div className="text-9xl text-[#cdfaf6] mt-3">
          {icono}
          </div>
          <div><p className="uppercase text-[#cdfaf6] font-semibold">{children}</p></div>

        </Link>
      </article>
  )
}

export default LinkModulo