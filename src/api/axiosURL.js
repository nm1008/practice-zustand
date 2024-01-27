import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default axiosUrl;
