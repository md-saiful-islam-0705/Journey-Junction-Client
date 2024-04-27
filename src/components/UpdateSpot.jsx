// UpdateSpot.js

import React, { useState } from "react";
import Swal from "sweetalert2";

const UpdateSpot = ({ spotId }) => {
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    shortdescription: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totaVisitorsPerYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/user-spots/${spotId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update spot");
      }
      Swal.fire("Success!", "Spot updated successfully.", "success");
    } catch (error) {
      console.error("Error updating spot:", error);
      Swal.fire("Error!", "An error occurred while updating the spot.", "error");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Update Spot</h1>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for each attribute */}
        <input type="text" name="image" value={formData.image} onChange={handleChange} />
        <input type="text" name="tourists_spot_name" value={formData.tourists_spot_name} onChange={handleChange} />
        {/* Add other form fields for remaining attributes */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateSpot;
