import Content from "./components/Content";
import Navbar from "./components/navbar/Navbar";

const Home = () => {
  return (
    <section className="bg-black py-5 px-5 md:px-20 md:py-7">
      <Navbar />
      <Content />
    </section>
  );
};

export default Home;
