import { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    country_Name: "",
    location: "",
    shortdescription: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    totalVisitorsPerYear: "",
    userEmail: "",
    userName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/spots', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    // Show success message
    Swal.fire({
      title: 'Success!',
      text: 'Tourist spot added successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: 'Failed to add tourist spot. Please try again later.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}


  return (
    <>
      <Navbar></Navbar>
      <div className=" mx-auto borde p-5">
        <h2 className="text-3xl text-center font-bold mb-4">
          Add Tourists Spot
        </h2>
        <form
          className="mx-auto bg-gradient-to-br from-blue-500 to-purple-500 p-7 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
          data-aos=""
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Tourists Spot Name</span>
              </label>
              <input
                type="text"
                name="tourists_spot_name"
                value={formData.tourists_spot_name}
                onChange={handleChange}
                placeholder="Tourists Spot Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Select Country</span>
              </label>
              <select
                name="country_Name"
                value={formData.country_Name}
                onChange={handleChange}
                className="select select-bordered"
              >
                <option value="">Select Country</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="England">England</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Switzerland">Switzerland</option>
              </select>
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Location</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="input input-bordered"
              />
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Average Cost(€)</span>
              </label>
              <input
                type="text"
                name="average_cost"
                value={formData.average_cost}
                onChange={handleChange}
                placeholder="€"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Seasonality</span>
              </label>
              <input
                type="text"
                name="seasonality"
                value={formData.seasonality}
                onChange={handleChange}
                placeholder="Summer/Winter"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">Travel Time <span>(days)</span></span>
              </label>
              <input
                type="text"
                name="travel_time"
                value={formData.travel_time}
                onChange={handleChange}
                placeholder="2/3/...days"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">
                  Total Visitors Per Year
                </span>
              </label>
              <input
                type="text"
                name="totalVisitorsPerYear"
                value={formData.totalVisitorsPerYear}
                onChange={handleChange}
                placeholder="20000/30000/..."
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">User Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="User Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-md font-bold">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="User Name"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-md font-bold">Short Description</span>
            </label>
            <textarea
              name="shortdescription"
              value={formData.shortdescription}
              onChange={handleChange}
              placeholder="Short Description"
              className="textarea textarea-bordered h-24"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-white border-pink-100 hover:bg-violet-600 hover:border-none">
              Add
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddTouristsSpot;
