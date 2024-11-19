import CustomButton from "@/components/CustomButton";
import SocMediaWeb from "@/assets/btn-hero-socmed.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import FacebookImage from "@/assets/facebook.png";
import TwitterImage from "@/assets/twitter.png";
import PintrestImage from "@/assets/pintrest.png";
import BasketballImage from "@/assets/facebook.png";

type Props = {};

const Content = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="mt-24">
      <div className="justify-self-center w-4/5 md:w-3/5">
        <h2 className="text-white text-7xl text-center font-bold">
          Minimize your tabs.
          <br />
          Find the trends!
        </h2>
        <p className="text-[#8B8B8B] text-lg text-center">
          Don’t let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>
      </div>

      <div className="relative flex justify-center items-center mt-10 mb-24">
        <CustomButton bgColor="bg-[#A8FF35]" textColor="text-black">
          Get Started 🔥
        </CustomButton>

        <div className="md:after:content-heroDoodle md:after:absolute md:after:top-1/2 md:after:left-auto md:after:ml-4 md:after:-translate-y-1/2"></div>
      </div>

      <div className="justify-self-center">
        {isAboveMediumScreens ? (
          <img src={SocMediaWeb}></img>
        ) : (
          <div>
            <img src={TwitterImage} alt="" />
            <img src={PintrestImage} alt="" />
            <img src={FacebookImage} alt="" />
            <img src={BasketballImage} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
