const validacion = {
  required:{
    value: true,
    message:"Este campo es requerido"
  }
}
const validacionDNI ={
  required:{
    value: true,
    message:"Este campo es requerido"
  },
  maxLength:{
    value:8,
    message: "dni contiene mas de 8 digitos"
  },
  minLength:{
    value:8,
    message: "dni contiene menos de 8 digitos"
  }
}
export {
  validacion,
  validacionDNI
}