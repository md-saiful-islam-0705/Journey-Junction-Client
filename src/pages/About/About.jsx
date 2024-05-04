import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const About = () => {
  return (
    <>
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

            
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
