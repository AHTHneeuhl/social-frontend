import axios from "axios";

const sociopediaAPI = axios.create({
  baseURL: import.meta.env.BACKEND_API_URL,
});

export default sociopediaAPI;
