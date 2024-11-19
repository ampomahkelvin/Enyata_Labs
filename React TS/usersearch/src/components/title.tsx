import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

type Props = Readonly<{
  darkModeHandler: () => void;
  dark: boolean;
}>;

const title = ({ darkModeHandler, dark }: Props) => {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-[26px] leading-[38px]">devfinder</h1>
      <div
        className="flex items-center gap-4 group cursor-pointer"
        onClick={darkModeHandler}
      >
        {!dark ? (
          <span className="font-bold text-light-gray group-hover:text-black">
            DARK
          </span>
        ) : (
          <span className="font-bold text-light-gray group-hover:text-white">
            LIGHT
          </span>
        )}
        {!dark ? (
          <MoonIcon className="w-5 text-light-gray group-hover:text-black" />
        ) : (
          <SunIcon className="w-5 text-light-gray group-hover:text-white" />
        )}
      </div>
    </div>
  );
};

export default title;
