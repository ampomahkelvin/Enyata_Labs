import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

// Fetch all countries
export const fetchAllCountries = async () => {
  try {
    const response = await api.get("all");
    return response.data;
  } catch (err) {
    throw new Error(`Problem occured: ${err}`);
  }
};

// Fetch country by name
export const fetchCountryByName = async (name: string) => {
  try {
    const response = await api.get(`/name/${name}`);
    return response.data;
  } catch (err) {
    throw new Error(`Problem occured: ${err}`);
  }
};

// Fetch country by code
export const fetchCountryByCode = async (code: string) => {
  try {
    const response = await api.get(`/alpha/${code}`);
    return response.data[0];
  } catch (err) {
    throw new Error(`Problem occured: ${err}`);
  }
};

// Fetch border countries by codes
export const fetchCountriesByCodes = async (codes: string[]) => {
  try {
    const countries = codes.map(async (code) => {
      const response = await api.get(`/alpha/${code}`);
      return response.data[0].name.common;
    });
    return await Promise.all(countries);
  } catch (err) {
    throw new Error(`Problem occured: ${err}`);
  }
};

// Filter by region
export const filterByRegion = async (filter: string) => {
  try {
    const filteredCountries = await api.get(`/region/${filter}`);
    return filteredCountries;
  } catch (err) {
    throw new Error(`Problem occured: ${err}`);
  }
};
