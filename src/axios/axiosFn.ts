import axios from "axios";

export const gottaCatchEmAll = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
