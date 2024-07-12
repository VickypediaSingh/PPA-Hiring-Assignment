import React from "react";
import CountUp from "react-countup";
import members from "../assets/members.png";
import clubs from "../assets/clubs.png";
import payments from "../assets/payments.png";
import events from "../assets/events.png";

function About() {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto  bg-neutralSilver dark:bg-neutral-800 py-16">
        <div className="">
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={members} alt="Members" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey dark:text-white font-semibold">
                    <CountUp end={2245341} duration={10} />
                  </h4>
                  <p className="dark:text-gray-300">Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={clubs} alt="Clubs" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey dark:text-white font-semibold">
                    <CountUp end={46341} duration={10} />
                  </h4>
                  <p className="dark:text-gray-300">Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={events} alt="Events" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey dark:text-white font-semibold">
                    <CountUp end={828341} duration={10} />
                  </h4>
                  <p className="dark:text-gray-300">Events</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={payments} alt="Payments" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey dark:text-white font-semibold">
                    <CountUp end={1245341} duration={10} />
                  </h4>
                  <p className="dark:text-gray-300">Payments</p>
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
