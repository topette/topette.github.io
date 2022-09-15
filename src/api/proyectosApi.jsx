import axios from "axios";

const baseURL = "https://api-proyectos-topette.herokuapp.com"

const proyectosApi = axios.create({ baseURL})

export default proyectosApi