import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Reveal } from 'react-awesome-reveal';
import TouristsSpotCard from "../components/TouristsSpotCard";

const TouristsSpot = () => {
    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots.slice(0, 6));
  
    return (
      <div className="flex flex-col">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-0">
            {spots.map((spot, index) => (
              <Reveal key={spot._id} cascade damping={0.1} triggerOnce>
                <div className="col-span-1" key={index}>
                  <TouristsSpotCard
                    spot={spot}
                    spots={spots}
                    setSpots={setSpots}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    );
};

export default TouristsSpot;
