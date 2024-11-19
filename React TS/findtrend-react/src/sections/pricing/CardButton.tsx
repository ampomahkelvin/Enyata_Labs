type Props = {
  bgColor: string;
  textColor: string;
};

const CardButton = ({ bgColor, textColor }: Props) => {
  return (
    <button
      className={`bg-${bgColor} text-${textColor} rounded-3xl py-2 px-24`}
    >
      Start Free Trial
    </button>
  );
};

export default CardButton;
