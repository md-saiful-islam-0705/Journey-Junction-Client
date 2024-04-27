import Navbar from "../shared/Navbar";
import Banner from "../../components/Banner";
import Footer from "../shared/Footer";
import TouristsSpot from "../../components/TouristsSpot";

const Home = () => {
  return (
    <>
      <div className="container mx-auto ">
        <Navbar />
        <Banner />
        <div className=" lg:p-0 md:p-0 p-3 ">
          <h2 className="text-3xl items-center py-4 text-gray-500  text-center font-semibold mb-4">
            Tourists Spots
          </h2>
          <TouristsSpot></TouristsSpot>
          <h2 className="text-3xl items-center py-4 text-gray-500  text-center font-semibold mb-4">
            Countries
          </h2>
        </div>
        <div className="grid grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <Footer />
      </div>
    </>
  );
};

// No need to define propTypes for properties in this component

export default Home;
