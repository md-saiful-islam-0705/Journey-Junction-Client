import React, { useState, useEffect } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch countries data when component mounts
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      console.log('Fetching countries data...');
      const response = await fetch('http://localhost:3000/countries');
      if (!response.ok) {
        throw new Error('Failed to fetch countries data');
      }
      const data = await response.json();
      console.log('Countries data received:', data);
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setError('Failed to fetch countries data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {countries.map(country => (
        <div key={country._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={country.image} alt={country.country_Name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{country.country_Name}</h2>
            <p className="text-gray-600">{country.short_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
