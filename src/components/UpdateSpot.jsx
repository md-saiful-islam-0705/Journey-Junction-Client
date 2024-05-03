import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const UpdateSpot = () => {
  const { id } = useParams();
  const [spotData, setSpotData] = useState({
    image: "",
    tourists_spot_name: "",
    country_name: "",
    location: "",
    shortdescription: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totalVisitorsPerYear: "",
  });

  useEffect(() => {
    fetch(`https://assignment-10-server-inky-theta.vercel.app/spots/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpotData(data);
      })
      .catch((error) => {
        console.error("Error fetching spot data:", error);
      });
  }, [id]);

  const handleUpdateSpot = (event) => {
    event.preventDefault();

    const updatedSpotData = {
      image: event.target.image.value,
      tourists_spot_name: event.target.tourists_spot_name.value,
      country_name: event.target.country_name.value,
      location: event.target.location.value,
      shortdescription: event.target.shortdescription.value,
      average_cost: event.target.average_cost.value,
      seasonality: event.target.seasonality.value,
      travel_time: event.target.travel_time.value,
      totalVisitorsPerYear: event.target.totalVisitorsPerYear.value,
    };

    
    fetch(`https://assignment-10-server-inky-theta.vercel.app/user-spots/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSpotData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          // Show success message
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Spot updated successfully",
          });
        } else {
          // Show error message
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update spot",
          });
        }
      })
      .catch((error) => {
        
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update spot",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto  px-6   max-w-lg my-9 border rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-7">
        <h2 className="text-3xl text-center font-bold mb-6">
          Update Tourist Spot
        </h2>
        <form onSubmit={handleUpdateSpot} className="space-y-4">
          <div>
            <label className="block font-bold">
              Image URL:
              <input
                type="text"
                name="image"
                defaultValue={spotData.image}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
         
          <div>
            <label className="block font-bold">
              Tourist Spot Name:
              <input
                type="text"
                name="tourists_spot_name"
                defaultValue={spotData.tourists_spot_name}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          
          <div>
            <label className="block font-bold">
              Country Name:
              <input
                type="text"
                name="country_name"
                defaultValue={spotData.country_Name}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          
          <div>
            <label className="block font-bold">
              Location:
              <input
                type="text"
                name="location"
                defaultValue={spotData.location}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
         
          <div>
            <label className="block font-bold">
              Short Description:
              <input
                type="text"
                name="shortdescription"
                defaultValue={spotData.shortdescription}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          
          <div>
            <label className="block font-bold">
              Average Cost:
              <input
                type="text"
                name="average_cost"
                defaultValue={spotData.average_cost}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          
          <div>
            <label className="block font-bold">
              Seasonality:
              <input
                type="text"
                name="seasonality"
                defaultValue={spotData.seasonality}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
         
          <div>
            <label className="block font-bold">
              Travel Time:
              <input
                type="text"
                name="travel_time"
                defaultValue={spotData.travel_time}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          
          <div>
            <label className="block font-bold">
              Total Visitors Per Year:
              <input
                type="text"
                name="totalVisitorsPerYear"
                defaultValue={spotData.totalVisitorsPerYear}
                className="form-input p-4 mt-1 block w-full  rounded-md "
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none"
            >
              Update Spot
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateSpot;
