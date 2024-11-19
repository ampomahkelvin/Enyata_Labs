import Toggle from "@/components/toggle";
import Card from "./Card";

const Pricing = () => {
  return (
    <section className="bg-black justify-items-center pb-36">
      <h1 className="text-white font-bold pt-36 text-4xl md:text-7xl">
        Get your best deal
      </h1>
      <div className="py-10 pb-20 gap-5 flex items-center justify-center md:justify-start relative">
        <span className="text-white md:text-2xl">Monthly</span>
        <Toggle />
        
        <span className="md:hidden absolute top-16 left-[90%] transform -translate-x-1/2 before:content-mobileDoodle before:block"></span>
        
        <span className="relative text-white md:text-2xl flex items-center">
          Yearly
          <span className="hidden md:block absolute left-[100%] ml-2 after:content-webDoodle after:block"></span>
        </span>
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <Card
          title={"Personal"}
          desc={"Special first packet for all"}
          price={8}
          features={[
            "Up to 5 pages each group",
            "Up to 10 pages each group",
            "5 days group page saved",
          ]}
          bgColor={"white"}
          buttonColor={"[#A8FF35]"}
          buttonText={"black"}
        />
        <Card
          title={"Regular"}
          desc={"Special first packet for all"}
          price={20}
          features={[
            "Up to 15 pages each group",
            "Download page up to 20 page",
            "Up to 10 group page",
            "15 Days group page saved",
          ]}
          bgColor={"[#A8FF35]"}
          buttonColor={"black"}
          buttonText={"white"}
        />
        <Card
          title={"Premium"}
          desc={"Special first packet for all"}
          price={48}
          features={[
            "Unlimited group pages",
            "Unlimited download page",
            "Unlimited page each group",
            "Customize sorting group pages",
            "Customize group page name",
            "30 Days group page saved",
          ]}
          bgColor={"white"}
          buttonColor={"[#A8FF35]"}
          buttonText={"black"}
        />
      </div>
    </section>
  );
};

export default Pricing;
