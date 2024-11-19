import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import { useEffect, useState } from "react";
import { CountryType } from "../types";
import { fetchAllCountries, filterByRegion } from "../api";

type Props = {
  setData: React.Dispatch<React.SetStateAction<CountryType[]>>;
};

const Filter = ({ setData }: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleFilterSelect = (region: string) => {
    setSelectedFilter(region);
    setShowMenu(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedFilter === "") {
        console.log("Fetching all countries...");
        const response = await fetchAllCountries();
        setData(response);
      } else {
        console.log(`Fetching countries for region: ${selectedFilter}`);
        try {
          const response = await filterByRegion(selectedFilter);
          console.log("Fetched countries:", response);
          setData(response.data);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };
    fetchData();
  }, [selectedFilter, setData]);

  return (
    <div className="w-52 dark:bg-black-100">
      <button className="shadow-lg w-full py-2 pl-2 h-full" onClick={handleClick}>
        <span className="flex mx-3 text-white">
          {selectedFilter ? selectedFilter : "Filter by region"}
          <ChevronDownIcon className="w-5 ml-auto" />
        </span>
      </button>
      {showMenu && (
        <ul className="absolute w-52 pl-5 p-2 bg-[#FFFFFF] dark:bg-black-100">
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("Africa")}
          >
            Africa
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("Americas")}
          >
            America
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("Asia")}
          >
            Asia
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("Europe")}
          >
            Europe
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("Oceania")}
          >
            Oceania
          </li>
          <li
            className="p-2 cursor-pointer hover:bg-[#d7d0cf] text-white"
            onClick={() => handleFilterSelect("")}
          >
            Filter by region
          </li>
        </ul>
      )}
    </div>
  );
};

export default Filter;
