import { create } from "zustand";
import {persist} from "zustand/middleware"
const ls = localStorage
const initialState={
  emed:"",
  clave:"",
  token:""
}
export  const useInfoUsuario = create(persist((set)=>({
  usuario: initialState,
  nombreEmed:null,
  login: (infoLogin) => {
    set({usuario: infoLogin})
  },
  logout: ()=>{
    set({usuario: initialState})
    ls.removeItem("infoUsuario")
  },
  setNombreEmed:(emed)=>{
    set({nombreEmed: emed})
  }
}),
{
  name: "infoUsuario"
}
))