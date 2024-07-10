import React from "react";
import { Carousel } from "flowbite-react";
import slide1 from "../assets/slide1.png";

function Home() {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen ">
        {/*  */}
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide1} alt="slider image broken" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug ">
                Lessons and insights&nbsp;
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                Where to grow your business as a photographer : site or social ?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          {/*  */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide1} alt="slider image broken" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug ">
                Too many lessons and insights&nbsp;
                <span className="text-brandPrimary leading-snug">
                  from 16 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                Where to grow your business as a photographer : site or social ?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
          {/*  */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={slide1} alt="slider image broken" />
            </div>
            <div>
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug ">
                Far too many lessons and insights &nbsp;
                <span className="text-brandPrimary leading-snug">
                  from 32 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 ">
                Where to grow your business as a photographer : site or social ?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
        {/*  */}
      </div>
    </div>
  );
}

export default Home;
