import Logo from "@/assets/footer logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full max-w-full py-5 px-5 md:flex items-center justify-between overflow-hidden">
      {/* Logo and title section */}
      <div className="flex gap-2 items-center pb-6 md:pb-0 justify-center md:justify-start">
        <img src={Logo} alt="Findtrend logo" className="h-8 md:h-10" />
        <h3 className="text-2xl font-semibold">Findtrend</h3>
      </div>

      {/* Navigation links */}
      <div className="w-full max-w-full">
        <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-10 md:justify-end">
          <li className="text-lg hover:underline cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-lg hover:underline cursor-pointer">
            Terms and Conditions
          </li>
          <li className="text-lg hover:underline cursor-pointer">Contact Us</li>
          <li className="text-lg hover:underline cursor-pointer">Careers</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
