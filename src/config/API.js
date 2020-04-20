import axios from "axios";
export const LOCALSTORAGE_KEY = "yves_acces_token";
export const TOKEN = window.localStorage.getItem(LOCALSTORAGE_KEY);

export const API = axios.create({
  baseURL: "https://eindwerk.jnnck.be/",
});

if (TOKEN) {
  API.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
}