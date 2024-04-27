import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [userSpots, setUserSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const handleDelete = (spotId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`http://localhost:3000/user-spots/${spotId}`, {
            method: "DELETE",
          });

          setUserSpots((prevSpots) =>
            prevSpots.filter((spot) => spot._id !== spotId)
          );

          Swal.fire("Deleted!", "Your spot has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting spot:", error);
          Swal.fire(
            "Error!",
            "An error occurred while deleting the spot.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 ">My Listed Spot</h1>
        <div className="shadow-xl rounded">
          <table className="table w-full border-collapse border  border-gray-300 ">
            <thead className="">
              <tr className="bg-gray-100 ">
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
                  <td className=" py-2 space-y-1">
                    <Link to={`/update/${spot._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(spot._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
