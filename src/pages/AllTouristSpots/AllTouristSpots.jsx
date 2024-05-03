import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import TouristsSpotCard from "../../components/TouristsSpotCard";

const AllTouristSpots = () => {
  const loadedSpots = useLoaderData();
  const [spots, setSpots] = useState(loadedSpots);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    sortSpots();
  }, [sortOrder, spots]);

  const sortSpots = () => {
    const sortedSpots = [...spots].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.average_cost - b.average_cost;
      } else {
        return b.average_cost - a.average_cost;
      }
    });
    setSpots(sortedSpots);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="m-2">
        <h1 className="text-3xl font-bold mb-4">All Tourist Spots</h1>
        <div className="mb-4 rounded-xl p-3 shadow w-64">
          <label htmlFor="sortOrder" className="mr-2 text-lg  font-semibold">
            Sort by Average Cost:
          </label>
          <select id="sortOrder" value={sortOrder} className="p-2 rounded-md w-full bg-gray-100" onChange={handleSortChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:m-0">
          {spots.map((spot) => (
            <TouristsSpotCard key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllTouristSpots;
