type Props = {
  company: {
    src: string;
    alt: string;
  };
};

const CompanyLogo = ({ company }: Props) => {
  return (
    <img
      src={company.src}
      alt={company.alt}
      className="w-3/4 h-5/6 md:w-[266px] md:h-[120px]"
    />
  );
};

export default CompanyLogo;
