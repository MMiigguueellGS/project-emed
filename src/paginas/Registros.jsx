import React from 'react'
import LinkModulo from "../componentes/layout/LinkModulo";
const Registros = () => {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center  mx-auto mt-16 mb-8">
    <LinkModulo icono= {<i className='bx bxs-ambulance'></i>} ruta={"/ambulancias"} >
    Gestion y registros de Ambulancias
    </LinkModulo>
    <LinkModulo icono= {<i className='bx bx-male-female' ></i>} ruta={"/personalSalud"}>
    Gestion y registros del personal
    </LinkModulo>
    <LinkModulo icono= {<i className='bx bx-store-alt' ></i>} ruta={"/bienes"}>
    Gestion y registros de Bienes
    </LinkModulo>
  
    </section>
  )
}

export default Registros