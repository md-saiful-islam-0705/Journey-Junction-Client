import React, { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import SelectedSpotsCard from "../../components/SelectedSpotsCard";
import { useParams } from "react-router-dom";

const SelectedSpots = () => {
  const { countryName } = useParams();
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetchSpots();
  }, []);

  const fetchSpots = async () => {
    console.log("Fetching spots data for country:", countryName);

    const response = await fetch(
      `https://assignment-10-server-inky-theta.vercel.app/spots/${countryName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch spots data");
    }

    const data = await response.json();
    console.log("Spots data received:", data);
    setSpots(data);
  };

  console.log("Spots:", spots);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="m-2">
        <h1 className="text-3xl font-bold mb-4">Tourist Spots</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-0">
          {spots.map((spot) => (
            <SelectedSpotsCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedSpots;
