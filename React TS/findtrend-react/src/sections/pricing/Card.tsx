import CardButton from "./CardButton";
import { CheckIcon } from "@heroicons/react/24/solid";

type Props = {
  title: string;
  desc: string;
  price: number;
  features: string[];
  bgColor: string;
  buttonColor: string;
  buttonText: string;
};

const Card = ({
  title,
  desc,
  price,
  features,
  bgColor,
  buttonColor,
  buttonText,
}: Props) => {
  return (
    <div
      className={`h-[640px] w-[360px] rounded-3xl bg-${bgColor} p-8 flex flex-col justify-between`}
    >
      <div>
        <h2 className="text-4xl">{title}</h2>
        <p className="text-lg">{desc}</p>
        <hr className="my-8" />
        <div className="mb-8">
          <span className="text-6xl">${price} </span>
          <span className="text-lg">/Month</span>
        </div>
        <ul>
          {features.map((feature, index) => (
            <li key={index} className="mb-3 text-lg flex items-center">
              <CheckIcon className="w-4 h-4 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <CardButton bgColor={buttonColor} textColor={buttonText} />
      </div>
    </div>
  );
};

export default Card;
