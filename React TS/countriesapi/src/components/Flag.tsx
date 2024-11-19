import { Link } from "react-router-dom";
import { CountryType } from "../types";
import { numberWithCommas } from "../utils/utils";

type Props = {
  country: CountryType;
};

const Flag = ({ country }: Props) => {
  const flagId = country.cca2;

  return (
    <Link to={flagId}>
      <div className="shadow-lg pb-12 dark:bg-black-100">
        <img src={country.flags.png} alt="" className="pb-6 w-full h-[200px]" />
        <div className="pl-6">
          <h1 className="pb-4 text-lg font-extrabold text-white">
            {country.name.common}
          </h1>
          <p className="text-white">
            <span className="font-bold">Population</span> :{" "}
            {numberWithCommas(country.population)}
          </p>
          <p className="text-white">
            <span className="font-bold">Region</span> : {country.continents}
          </p>
          <p className="text-white">
            <span className="font-bold">Capital</span> : {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Flag;
