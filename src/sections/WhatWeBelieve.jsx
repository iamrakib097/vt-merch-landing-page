import React, { useRef } from "react";
import carHumanImage from "../assets/img/img(10).png";
import chess from "../assets/img/img(3).png";
import vGurd from "../assets/img/vGurd_red.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
const WhatWeBelieve = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  return (
    <section
      ref={titleRef}
      className="md:relative flex flex-col  md:pt-40 max-w-[1440px] mx-auto sm:px-20 sm:pt-20 justify-center items-center h-auto px-5 bg-gradient-to-l from-[#000000] to-[#3B3B3B] pb-10"
    >
      <h1 className="md:absolute md:top-36 xl:right-[550px] 2xl:right-[600px] lg:right-[180px] md:right-8 md:text-[80px] text-white font-ActOfRejection tracking-wide text-4xl pt-10 inline-flex justify-center items-center gap-4">
        what we believe
        <span className="md:hidden">
          <img src={chess} alt="" width={32} />
        </span>
      </h1>
      <div className="w-full mt-6 md:flex gap-10">
        <img
          src={carHumanImage}
          alt="Car Human"
          className="rounded-lg object-cover w-full md:w-[400px] md:h-auto  justify-start items-start"
        />
        <div className=" relative text-white  space-y-4 mt-20 max-w-[600px] font-montserrat">
          <div className="border-b-2 pb-10 border-gray-400 border-opacity-20">
            <p className="text-sm">
              <span className="text-2xl mr-2">Leadership</span>
              is vital from the top of corporations to the military to small
              businesses to parents to students. We all can be leaders.
            </p>
          </div>

          <div className="border-b-2 pb-10 border-gray-400 border-opacity-20">
            <p className="text-sm">
              <span className="text-2xl mr-2">Entrepreneurs</span> are heroes
              who should be respected and celebrated for taking risks, launching
              products, creating jobs, and building companies.
            </p>
          </div>

          <div className="border-b-2 pb-10 border-gray-400 border-opacity-20">
            <p className="text-sm">
              <span className="text-2xl mr-2">Capitalism</span> is a critically
              important economic system that has advanced society and the
              quality of life we enjoy today.
            </p>
          </div>
          <div className="border-b-2 pb-10 border-gray-400 border-opacity-20">
            <p className="text-sm">
              <span className="text-2xl mr-2">Debate</span> is welcome and
              necessary as it can lead to consensus, epiphanies, and expose the
              truth. When a clash of ideas, often emotionally-charged, evolves
              into civil debate and objective processing of issues, everyone
              wins. Free speech is critical to productive debate.
            </p>
          </div>
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={vGurd}
            alt=""
            className="absolute top-0  xl:-top-40 xl:-right-40"
            width={500}
          />
        </div>
      </div>
      <img
        src={chess}
        alt=""
        className=" hidden md:block absolute bottom-0 right-2"
        width={100}
      />
    </section>
  );
};

export default WhatWeBelieve;
