import CompanyLogo from "./CompanyLogo";
import data from "./companies";

type Props = {};

const Startups = (props: Props) => {
  const companyLogos = data;
  return (
    <section className="px-5 py-20 md:px-20 justify-items-center">
      <h1 className="text-center font-bold text-4xl pb-8 md:text-7xl md:pb-20">
        Findtrend make +1000 Startup grow
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
        {companyLogos.map((company) => (
          <CompanyLogo
            key={company.alt}
            company={{
              src: company.src,
              alt: company.alt,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Startups;
