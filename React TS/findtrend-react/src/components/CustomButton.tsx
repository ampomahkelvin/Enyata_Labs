type Props = {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
};

const CustomButton = ({ children, bgColor, textColor }: Props) => {
  return (
    <button className={`${bgColor} ${textColor} rounded-3xl py-3 px-6`}>
      {children}
    </button>
  );
};

export default CustomButton;
