import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal } from 'react-awesome-reveal';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      console.log("Fetching countries data...");
      const response = await fetch("https://assignment-10-server-inky-theta.vercel.app/countries");
      if (!response.ok) {
        throw new Error("Failed to fetch countries data");
      }
      const data = await response.json();
      console.log("Countries data received:", data);
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError("Failed to fetch countries data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {countries.map((country, index) => (
        <Reveal key={country._id + index} cascade damping={0.1} triggerOnce>
          <Link to={`/selectedspots/${country.country_Name}`}>
            <div
              className="relative overflow-hidden border rounded-lg transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={country.image}
                alt={country.country_Name}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{country.country_Name}</h2>
                <p className="text-gray-600">{country.short_description}</p>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
};

export default Countries;
