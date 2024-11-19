import SearchIcon from "../assets/icon-search.svg";
import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  username: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  showError: boolean;
};

const Search = ({ username, onInputChange, onSearch, showError }: Props) => {
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex bg-light-background mt-9 rounded-md shadow-xl h-[69px] dark:bg-dark-background">
      <div className="flex w-full items-center ">
        <img
          src={SearchIcon}
          className="h-4 pl-3 text-primary md:h-8 md:pl-8"
        />
        <div className="flex w-full justify-between">
          <input
            type="text"
            placeholder="Search GitHub username…"
            value={username}
            onChange={onInputChange}
            onKeyDown={handleKeyPress}
            className="pl-3 outline-none w-full dark:text-white font-bold md:pl-6 dark:bg-dark-background"
          />
          {showError && (
            <span className="text-red-500 text-sm font-bold whitespace-nowrap">
              No results
            </span>
          )}
        </div>
      </div>
      <button
        onClick={onSearch}
        className="bg-primary text-sm text-white px-3 py-auto my-2 mx-2 rounded-md md:px-6 hover:bg-[#60ABFF]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
