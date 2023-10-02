import React from "react";
import About1 from "../assets/About1.png";
import member1 from "../assets/Icons/member1.png";
import member2 from "../assets/Icons/member2.png";
import member3 from "../assets/Icons/member3.png";
import member4 from "../assets/Icons/member4.png";

function About() {
  const member = [
    {
      num: "2,245,341",
      icon: member1,
      text: "Members",
    },
    {
      num: "46,328",
      icon: member2,
      text: "Clubs",
    },
    {
      num: "828,867",
      icon: member3,
      text: "Event Bookings",
    },
    {
      num: "1,926,436",
      icon: member4,
      text: "Payments",
    },
  ];
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
          <div className="">
            <img src={About1} alt="anout_img" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5 ">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* company stats  */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 ">
        <div className=" gap-8  flex flex-row md:flex-row justify-between items-center ">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-2/3 ">
              Helping a local <br />
              <span className="text-brandPrimary">
                bussiness reinvest itself
              </span>
            </h2>
            <p>We reached here with our hard and dedication.</p>
          </div>
          {/* Stats */}
          <div className="col-span w-1/2 grid grid-cols-2 justify-center items-center space-y-4">
            {member.map((mem, i) => (
              <div
                className={`col-span-1 col-start-${i + 1} flex flex-col `}
                key={i}
              >
                <div className="col-span gap-2 flex justify-start items-center">
                  <img src={mem.icon} alt="icn" />
                  <div className="">
                    <h2 className="text-2xl font-semibold">{mem.num}</h2>
                    <p className="text-sm font-normal">{mem.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
