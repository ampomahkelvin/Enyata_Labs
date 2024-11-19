import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCountryByCode, fetchCountriesByCodes } from "../api";
import { CountryType } from "../types";
import { numberWithCommas } from "../utils/utils";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const FlagDetail = () => {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const [country, setCountry] = useState<CountryType>();
  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      try {
        const response = await fetchCountryByCode(countryId!);
        setCountry(response);

        if (response.borders) {
          const borders = await fetchCountriesByCodes(response.borders);
          setBorderCountries(borders);
        }
      } catch (err) {
        console.error("Failed to fetch country data", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (countryId) {
      fetchCountry();
    }
  }, [countryId]);

  return (
    <>
      <div className="px-10 lg:px-20 h-screen dark:bg-black-200">
        <div className="pt-28">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              }
              navigate("/");
            }}
            className="flex rounded-md items-center gap-5 md:ml-6 xl:ml-6 py-2 px-[23px] dark:bg-black-100 dark:text-white"
          >
            <ArrowLeftIcon className="w-5" />
            Back
          </button>
        </div>

        <div className="mt-20 md:flex lg:flex lg:gap-8">
          {isLoading ? (
            <p className="h-screen dark:text-white">Loading...</p>
          ) : country ? (
            <>
              <div className="flex flex-shrink-0">
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  className="w-full rounded-md mb-11 sm:w-[280px] md:w-[360px] lg:w-[360px] xl:w-[560px] md:min-w-full max-w-full"
                />
              </div>
              <div className="lg:my-9 md:ml-20 lg:ml-20 flex-grow">
                <h1 className="font-extrabold mb-3 text-2xl lg:text-3xl dark:text-white">
                  {country.name.common}
                </h1>
                <div className="md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row lg:justify-between">
                  <div className="mb-8">
                    <p className="text-sm leading-8 text-white">
                      <span className="font-bold">Native Name: </span>
                      {Object.values(country.name.nativeName)[0]?.common ||
                        "Not available"}
                    </p>
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Population: </span>
                      {numberWithCommas(country.population)}
                    </p>
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Region: </span>
                      {country.continents[0]}
                    </p>
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Sub-Region: </span>
                      {country.subregion || "Not available"}
                    </p>
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Capital: </span>
                      {country.capital?.join(", ") || "Not available"}
                    </p>
                  </div>
                  <div className="lg:mr-10">
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Top level domain: </span>
                      {country.tld[0]}
                    </p>
                    <p className="text-sm leading-8 dark:text-white">
                      <span className="font-bold">Currencies: </span>
                      {country.currencies
                        ? Object.values(country.currencies).join(", ")
                        : "Not available"}
                    </p>
                    <p className="text-sm leading-8 flex-wrap dark:text-white">
                      <span className="font-bold">Languages: </span>
                      {country.languages
                        ? Object.values(country.languages).join(", ")
                        : "Not available"}
                    </p>
                  </div>
                </div>
                <div className="mt-10 flex flex-col xl:items-center lg:gap-3 xl:flex xl:flex-row dark:text-white">
                  <p>Border Countries:</p>
                  <ul className="flex gap-2 lg:ml-2">
                    {borderCountries.length > 0 ? (
                      borderCountries.map((border) => (
                        <li
                          key={border}
                          className="shadow-md rounded-md px-3 py-2 md:px-6 md:py-3"
                        >
                          {border}
                        </li>
                      ))
                    ) : (
                      <p>Not Available</p>
                    )}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <p>No country found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FlagDetail;
