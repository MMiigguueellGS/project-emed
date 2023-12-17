import axios from "axios";
const axiosURL = axios.create({
  baseURL: 'http://localhost:8080'
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