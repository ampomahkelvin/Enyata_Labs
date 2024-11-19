import useMediaQuery from "@/hooks/useMediaQuery";
import WebImage from "@/assets/web.png";
import MobileImage from "@/assets/mobile.png";

type Props = {};

const Solution = (props: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section className="bg-[#A8FF35] px-5 md:px-20 justify-items-center">
      <h1 className="text-7xl font-bold pt-36 pb-16">Open new tabs is sh*t</h1>
      {isAboveMediumScreen ? <img src={WebImage} /> : <img src={MobileImage} />}
      <p className="text-lg pt-16 pb-36 text-center md:w-2/4">
        A solution for your browser tabs and don’t make your device get slower
        over time. Get ease and faster to discover a trend with just one tab.
      </p>
    </section>
  );
};

export default Solution;
