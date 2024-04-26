
import Navbar from "../shared/Navbar";
import Banner from "../../components/Banner";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "animate.css";
import { Helmet } from "react-helmet";

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home-CrestView Properties</title>
      </Helmet>
      <div data-aos="fade-up" className="container mx-auto ">
        <Navbar />
        <Banner />
        <div className="p-5  my-2 ">
          <h2 className="text-3xl items-center  text-gray-500 animate__animated animate__bounce animate__repeat-2  text-center font-semibold mb-4">
            Featured Properties
          </h2>
        </div>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
        </div>
        <Footer />
      </div>
    </>
  );
};

// No need to define propTypes for properties in this component

export default Home;
