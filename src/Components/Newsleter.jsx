import React from "react";

function Newsleter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center ">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug  ">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex justify-center items-center">
            <button className="btn-primary flex justify-center items-center">
              Get Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
              >
                <path
                  d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                  stroke="white"
                  className="inline-block ml-2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsleter;
