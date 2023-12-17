import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useInfoUsuario } from '../../store/infoUsuario,'

const RutaPrivada = () => {
  const usuario =  useInfoUsuario(state=>state.usuario)
  if(usuario.token){
    return <Outlet/>    
  }else{
   return <Navigate to={"/auth/login"}/>
  }
}

export default RutaPrivada