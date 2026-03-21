import React from "react";
import Link from "next/dist/client/link";
import { BiHome } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 h-full items-center justify-center text-[#144727] p-6 pb-3">
      <h1 className="text-5xl font-bold text-center">
        An-Nahj Islamic Institute
      </h1>
      <h4 className="text-2xl font-semibold text-center">
        Islam. Sunnah. Knowledge.
      </h4>
      <p className="text-center text-lg leading-6">
        Dedicated to spreading beneficial knowledge upon the Qur'an and
        authentic Sunnah, according to the understanding of the pious
        predecessors.
      </p>
      <Link
        className="flex items-center gap-2 bg-[#144727] text-[#ebe1d1] px-6 py-3 rounded-md font-medium hover:bg-[#144710] hover:scale-105 transition"
        href="/about"
      >
        BismiLlah <BiHome className="inline"/>
      </Link>
    </div>
  );
};

export default Hero;
