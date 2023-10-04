import React from "react";
import company1 from "../assets/Icons/Logo.png";
import company2 from "../assets/Icons/Logo-1.png";
import company3 from "../assets/Icons/Logo-2.png";
import company4 from "../assets/Icons/Logo-3.png";
import company5 from "../assets/Icons/Logo-4.png";
import company6 from "../assets/Icons/Logo-5.png";
import company7 from "../assets/Icons/Logo-6.png";
import service1 from "../assets/Icons/Icon.png";
import service2 from "../assets/Icons/Icon1.png";
import service3 from "../assets/Icons/Icon2.png";

function Service() {
  const service = [
    {
      id: 1,
      title: "Membership organizations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service1,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service2,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: service3,
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8 ">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our clients
        </h2>
        <p className="text-neutralDGray">
          we have been working with some fortune 500+ clients
        </p>
        {/* Company logos  */}
        <div className="flex justify-evenly items-center w-full mt-12">
          <img src={company1} alt="company0" />
          <img src={company2} alt="company1" />
          <img src={company3} alt="company2" />
          <img src={company4} alt="company3" />
          <img src={company5} alt="company4" />
          <img src={company6} alt="company5" />
          <img src={company7} alt="company6" />
        </div>
        {/* Service Card */}
        <div className="mt-20 md:1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGray font-semibold mb-3">
            Manage your entire comunity in a single system
          </h2>
          <p className="text-neutralDGray">who is Nextcent suitable for?</p>
        </div>
        {/* Cards */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 ">
          {service.map((service) => (
            <div
              className="flex justify-center items-center mt-12 px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300"
              key={service.id}
            >
              <div className="">
                <div className="bg-[#E8F5E9] h-14 w-14 mb-4  mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="-ml-5"
                  />
                </div>
                <h4 className="text-2xl font-bold text-neutralSilver mb-2 px-2 ">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGray">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
