import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import TouristsSpotCard from "../../components/TouristsSpotCard";


const AllTouristSpots = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);

  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="m-2">
        <h1 className="text-3xl font-bold mb-4">All Tourist Spots</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-0 ">
          {spots.map((spot) => (
            <TouristsSpotCard
              key={spot._id}
              spot={spot}
              spots={spots}
              setSpots={setSpots}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllTouristSpots;
