import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.5.17:3333',//aqui vai depender do ip que for gerado
});                                   //quando o script for executado deve-se verificar no terminar o ip correto

export default api;