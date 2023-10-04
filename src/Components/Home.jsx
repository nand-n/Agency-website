import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/Illustration.png";

function Home() {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen ">
        <Carousel className="w-full mx-auto">
          <div className="flex h-full flex-col md:flex-row-reverse items-center justify-between my-28 md:my-8 py-12 ">
            <div className="">
              <img src={banner1} alt="banner1" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug ">
                Lesson and incites{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years{" "}
                </span>
              </h1>
              <p className="text-neutralGray text-base mb-8 ">
                Where to grow your bussiness as a photographer: site or social
                media?{" "}
              </p>
              <button className="btn-primary">Register </button>
            </div>
          </div>
          <div className="flex h-full flex-col md:flex-row-reverse items-center justify-between my-28 md:my-8 py-12 ">
            <div className="">
              <img src={banner1} alt="banner1" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug ">
                Let&apos;s Learn and Earn{" "}
                <span className="text-brandPrimary leading-snug">
                  In 4 months{" "}
                </span>
              </h1>
              <p className="text-neutralGray text-base mb-8 ">
                Where to grow your bussiness as a photographer: site or social
                media?{" "}
              </p>
              <button className="btn-primary">Register </button>
            </div>
          </div>
          <div className="flex h-full flex-col md:flex-row-reverse items-center justify-between my-28 md:my-8 py-12 ">
            <div className="">
              <img src={banner1} alt="banner1" />
            </div>
            {/* Hero Text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug ">
                Lesson and incites{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years{" "}
                </span>
              </h1>
              <p className="text-neutralGray text-base mb-8 ">
                Where to grow your bussiness as a photographer: site or social
                media?{" "}
              </p>
              <button className="btn-primary">Register </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
