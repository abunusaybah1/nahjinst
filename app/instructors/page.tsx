"use client";

import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";

const instructors = [
  {
    name: "Abu Nusaybah An-Nahjiy",
    image: "/images/abunusaybah.png",
    role: "Umar Class, Uthman Class & Abubakar Class (Tajweed)",
    description:
      "He has years of experience teaching Qur’an, tajweed, Arabic, hadith, fiqh, Nahw, and Sarf, etc, virtually and physically. By the permission of Allah, he is known for simplifying complex concepts and helping beginners grow steadily. Allahumma Baarik!",
  },
  {
    name: "Abu Haneefah",
    image: "/images/abuhaneefah.png",
    role: "Abubakar Class (Qur’an)",
    description:
      "An experienced and eloquent reciter of the Qur’an. By the permission of Allah, he is known for making the learning of the Qur’an easy and accessible for students. Allahumma Baarik!",
  },
];

const InstructorsPage = () => {
  return (
    <div className="px-6 md:px-16 text-[#144727]">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Instructors</h1>

      <p className="text-[15.5px] md:w-2/3 leading-7 mb-10">
        Our instructors are dedicated to teaching authentic knowledge upon the
        Qur’an and Sunnah, striving to make learning easy, structured, and
        beneficial for every student.
      </p>

      <div className="flex flex-wrap gap-8">
        {instructors.map((inst, index) => (
          <div
            key={index}
            className="w-full md:w-[47%] lg:w-[30%] bg-[#ebe1d1] rounded-xl border border-[#d4c6b5] shadow-md overflow-hidden hover:shadow-lg transition duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={inst.image}
                alt={inst.name}
                fill
                loading="eager"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-1">{inst.name}</h2>

              <p className="text-sm font-medium mb-3 opacity-80">{inst.role}</p>

              <p className="text-[14.8px] leading-6">{inst.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5]">
        <p className="text-[15.5px] leading-7">
          Bi idhniLlāhi, we are working towards introducing more instructors to
          expand our reach and improve the learning experience. May Allah ease
          it.
        </p>
      </div>

      {/* <div className="mt-10 mb-16 bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5] ">
        <p className="text-[15.5px] leading-7 mb-6">
          Ready to take the bold step to join our community of learners? Upon
          joining An-Nahj Islamic Institute, you will be part of a supportive
          learning environment dedicated to growing in knowledge and faith.
        </p>
        <Link
          href="/enroll"
          className="bg-[#144727] text-[#ebe1d1] py-2 px-3 rounded-md hover:bg-[#144710] hover:scale-105 transition cursor-pointer"
        >
          Enroll Now
        </Link>
      </div> */}
    </div>
  );
};

export default InstructorsPage;
