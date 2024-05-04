import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="carousel w-full lg:rounded-2xl md:rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/qB6dBdk/banner-3.jpg" className="w-full" alt="Slide 1" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <Link to="contact">
            <button  className="  bg-gradient-to-r from-violet-500 to-pink-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/QrPzFj8/banner-2.jpg" className="w-full" alt="Slide 2" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/swLb5jR/banner-4.jpg" className="w-full" alt="Slide 3" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
