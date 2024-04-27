import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [userSpots, setUserSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(user);
    const fetchUserSpots = async () => {
      try {
        if (!user) return; // Ensure user is available
        const response = await fetch(
          `http://localhost:3000/user-spots?userEmail=${user.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user's spots");
        }
        const data = await response.json();
        setUserSpots(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user's spots:", error);
        setLoading(false);
      }
    };

    fetchUserSpots();
  }, [user]); // Fetch spots when user changes

  const handleDelete = async (spotId) => {
    try {
      await fetch(`/user-spots/${spotId}`, {
        method: "DELETE",
      });
      setUserSpots((prevSpots) =>
        prevSpots.filter((spot) => spot._id !== spotId)
      );
    } catch (error) {
      console.error("Error deleting spot:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">My List Page</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="shadow-xl rounded">
            <table className="table w-full border-collapse border  border-gray-300 ">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Spot Name</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {userSpots.map((spot) => (
                  <tr key={spot._id} className="border-b border-gray-300">
                    <td className="px-4 py-2">{spot.tourists_spot_name}</td>
                    <td className="px-4 py-2">{spot.location}</td>
                    <td className="px-4 py-2">
                      <img
                        src={spot.image}
                        alt={spot.tourists_spot_name}
                        className="h-10 w-20 "
                      />
                    </td>
                    <td className=" py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleUpdate(spot)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(spot._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyListPage;
