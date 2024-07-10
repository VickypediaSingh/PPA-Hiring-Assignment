import React from "react";
import CountUp from "react-countup";
import aboutImg from "../assets/about.png";
import members from "../assets/members.png";
import clubs from "../assets/clubs.png";
import payments from "../assets/payments.png";
import events from "../assets/events.png";

function About() {
  return (
    <div>
      {/* about vala part */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div>
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at PixelGrade
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, ad aliquam nobis inventore ratione sed veritatis
              delectus officiis blanditiis quae expedita nihil, doloribus, nemo
              nesciunt eum maiores aspernatur praesentium possimus.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      {/* count animation */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16">
        <div className="">
          {/* real count animation */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={members} alt="Members" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={2245341} duration={10} />
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={clubs} alt="Clubs" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={46341} duration={10} />
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={events} alt="Events" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={828341} duration={10} />
                  </h4>
                  <p>Events</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={payments} alt="Payments" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp end={1245341} duration={10} />
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
