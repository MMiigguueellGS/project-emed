import axios from "axios";

const urlAxios = axios.create({
  baseURL: 'http://localhost:8080'  
});
export {
  urlAxios
}