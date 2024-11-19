import { useEffect, useState } from "react";
import SearchAndFilter from "./SearchAndFilter";
import Flag from "./Flag";
import { CountryType } from "../types";
import { fetchAllCountries } from "../api";

const FlagList = () => {
  const [data, setData] = useState<CountryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchAllCountries();
        setData(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dark:bg-black-200">
      <SearchAndFilter setData={setData} />
      {isLoading ? (
        <p className="h-screen text-white justify-center items-center">
          Loading...
        </p>
      ) : (
        <div className="h-screen mx-10 lg:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8">
          {data.map((country) => (
            <Flag key={country.cca2} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlagList;
