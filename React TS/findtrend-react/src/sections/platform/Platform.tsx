import FacebookIcon from "@/assets/icons/facebook.png";
import Twitter from "@/assets/icons/twitter.png";
import Basketball from "@/assets/icons/basketball.png";
import Pintrest from "@/assets/icons/pintrest.png";
import Medium from "@/assets/icons/medium.png";
import Reddit from "@/assets/icons/reddit.png";
import VK from "@/assets/icons/vk.png";
import LinkedIn from "@/assets/icons/linkedin.png";
import Tweet1 from "@/assets/tweet 1.png";
import Tweet2 from "@/assets/tweet 2.png";
import Tweet3 from "@/assets/tweet 3.png";
import CustomButton from "@/components/CustomButton";

type Props = {};

const Platform = (props: Props) => {
  return (
    <section className="justify-items-center px-5 py-20 md:px-20 ">
      <h1>All platforms connect to Findtrend</h1>
      <div className="flex overflow-scroll">
        <img
          src={FacebookIcon}
          alt="Facebook"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img
          src={Twitter}
          alt="Twitter"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img
          src={Basketball}
          alt="Basketball"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img
          src={Pintrest}
          alt="Pintrest"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img
          src={Medium}
          alt="Medium"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img
          src={Reddit}
          alt="Reddit"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
        <img src={VK} alt="VK" className="w-16 sm:w-24 md:w-32 lg:w-20" />
        <img
          src={LinkedIn}
          alt="LinkedIn"
          className="w-16 sm:w-24 md:w-32 lg:w-20"
        />
      </div>
      <div className="gap-4 pt-20 pb-20">
        <img src={Tweet1} alt="" />
        <img src={Tweet2} alt="" />
        <img src={Tweet3} alt="" />
      </div>
      <CustomButton bgColor="bg-black" textColor="text-white">
        View more Trend
      </CustomButton>
    </section>
  );
};

export default Platform;
