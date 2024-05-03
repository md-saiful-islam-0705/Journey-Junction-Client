import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { FaLocationDot } from "react-icons/fa6";

const ViewDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Fetch spot details
    fetch(`https://assignment-10-server-inky-theta.vercel.app/spots/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch spot details");
        }
        return response.json();
      })
      .then((data) => {
        setSpot(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-white shadow-md rounded-lg p-9 m-4 flex flex-col justify-between h-full">
        <div>
          <img
            src={spot.image}
            alt={spot.tourists_spot_name}
            className="w-full h-full object-cover mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2  ">
            {spot.tourists_spot_name}
          </h3>
          <p className="text-gray-500 mb-2">{spot.shortdescription}</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center gap-1">
              <FaLocationDot />
              <p className="text-black font-medium">{spot.location}</p>
            </div>
            <p className="text-orange-500 font-bold">{spot.seasonality}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700 font-semi-bold">
              Average Cost(€): {spot.average_cost}
            </p>
            <p className="text-black font-medium">
              Travel Time(days): {spot.travel_time}
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-700 font-semi-bold">
              Total Visitors Per Year: {spot.totalVisitorsPerYear}
            </p>
            <p className="text-gray-700 font-semi-bold">
              User Email: {spot.userEmail}
            </p>
            <p className="text-gray-700 font-semi-bold">
              User Name: {spot.userName}
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewDetails;
