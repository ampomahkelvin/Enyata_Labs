import CustomButton from "@/components/CustomButton";

type Props = {};

const JoinNow = (props: Props) => {
  return (
    <section className="bg-[#A8FF35]">
      <div className="justify-self-center pt-36 pb-10">
        <h1 className="text-center">
          <span className="font-bold text-4xl md:text-7xl">
            Join us on email for
          </span>
          <br />
          <span className="font-bold text-[#87D322] text-4xl md:text-7xl">
            more trending topics
          </span>
        </h1>
      </div>
      <div className="justify-self-center pb-36">
        <CustomButton bgColor={"bg-black"} textColor={"text-white"}>
          <span className="text-lg px-6 py-4">Join Now</span>
        </CustomButton>
      </div>
    </section>
  );
};

export default JoinNow;
