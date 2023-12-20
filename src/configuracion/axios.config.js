import axios from "axios";
const axiosURL = axios.create({
  baseURL: 'https://api-emed-emergencias-desastres-dev-jjxt.1.us-1.fl0.io'
});
axiosURL.interceptors.request.use((config)=> {
  config.headers.Authorization = `Bearer ${
    JSON.parse(localStorage.getItem("infoUsuario"))?.state.usuario.token
  }`
  return config
})
export {
  axiosURL
}