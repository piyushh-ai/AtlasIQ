import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags,cca3");
};

// HTTP GET METHOD for individual country by alpha code
export const getCountryIndData = (code) => {
  return api.get(
    `/alpha/${code}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};