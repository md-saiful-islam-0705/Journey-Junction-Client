import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About-CrestView Properties</title>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="px-4 py-8">
              <h2 className="text-3xl font-bold mb-4">
                Welcome to{" "}
                <span className="text-gradient bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                  <Typewriter
                    words={['Journey Junction']}
                    loop={false}
                    cursor={false}
                    typeSpeed={30}
                    deleteSpeed={10}
                    delaySpeed={2000}
                  />
                </span>
              </h2>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Journey Junction At Crestview Properties, we pride ourselves
                  on offering a diverse range of properties and unparalleled
                  service to our clients. Whether you are in the market to buy,
                  sell, or rent, we are here to assist you every step of the
                  way.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Journey Junction Our dedicated team of professionals is
                  committed to helping you find the perfect property to call
                  home. With our easy-to-use website and comprehensive search
                  tools, discovering your dream property is simple and
                  hassle-free.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Journey Junction Explore Crestview Properties to browse our
                  latest listings, access helpful resources, and gain expert
                  insights into the real estate market. Join our growing
                  community of satisfied clients who have experienced the
                  Crestview difference.
                </p>
                <p className="text-lg text-gray-700">
                  Journey Junction Contact us today to embark on your real
                  estate journey with Crestview Properties!
                </p>
              </div>
            </div>

            <div className="container mx-auto px-4 py-8">
              <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-violet-600 to-pink-500 text-transparent bg-clip-text">
                <Typewriter
                  words={['Contact Us']}
                  loop={false}
                  cursor={false}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <p className="text-lg mb-4">Feel free to get in touch with us!</p>
              <form className="max-w-md border p-4 rounded-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
