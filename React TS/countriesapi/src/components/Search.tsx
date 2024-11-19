import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { useEffect, useState } from "react";
import { CountryType } from "../types";
import { useDebounceCallback } from "usehooks-ts";
import { fetchCountryByName, fetchAllCountries } from "../api";

type Props = {
  setData: React.Dispatch<React.SetStateAction<CountryType[]>>;
};

const Search = ({ setData }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debounced = useDebounceCallback(setSearchTerm, 500);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    debounced(event.currentTarget.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countries = searchTerm
          ? await fetchCountryByName(searchTerm)
          : await fetchAllCountries();
        setData(countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [searchTerm, setData]);

  return (
    <div className="flex rounded-md h-[56px] shadow-xl lg:w-96 dark:bg-black-100">
      <div className="flex w-full h-max dark:bg-black-100">
        <MagnifyingGlassIcon className="w-6 my-5 ml-8 mr-6 text-white" />
        <input
          type="text"
          placeholder="Search for a country.."
          className="flex w-full h-[56px] outline-none text-white dark:bg-black-100"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
