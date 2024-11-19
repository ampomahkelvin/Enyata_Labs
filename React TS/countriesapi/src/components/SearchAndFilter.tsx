import { CountryType } from "../types";
import Filter from "./Filter";
import Search from "./Search";

type Props = {
  setData: React.Dispatch<React.SetStateAction<CountryType[]>>;
};

const SearchAndFilter = ({ setData }: Props) => {
  return (
    <div className="flex flex-col justify-between gap-10 mb-8 pt-12 px-10 lg:px-20 lg:mb-12 lg:flex-row">
      <Search setData={setData} />
      <Filter setData={setData} />
    </div>
  );
};

export default SearchAndFilter;
