import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TouristsSpotCard from "../components/TouristsSpotCard";

const TouristsSpot = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots.slice(0, 6));
  
    return (
      <div className="flex flex-col ">
        <div className="">
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
      </div>
    );
};

export default TouristsSpot;
