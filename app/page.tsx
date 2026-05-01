"use client";

import React from "react";
import Link from "next/dist/client/link";
import {
  FaBookOpen,
  FaQuran,
  FaPenNib,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import Image from "next/image";

const programsPreview = [
  {
    title: "Abubakar Class",
    icon: <FaQuran size={22} />,
    description: "Qur'an memorization, revision, and Tajweed for all levels.",
  },
  {
    title: "Umar Class",
    icon: <FaPenNib size={22} />,
    description:
      "Arabic letters, pronunciation, and reading the Qur'an from scratch.",
  },
  {
    title: "Uthman Class",
    icon: <FaBookOpen size={22} />,
    description: "Arabic, Nahw, Sarf, and Ta'beer.",
  },
  {
    title: "Weekend Class",
    icon: <FaChalkboardTeacher size={22} />,
    description: "Hadith memorization and Fiqh study every weekend.",
  },
  {
    title: "Weekly Quizzes",
    icon: <MdQuiz size={22} />,
    description: "General weekly quizzes every Friday to track progress.",
  },
];

const whyUs = [
  {
    title: "Affordable",
    body: "Students are required to pay only ₦3,000/month — making it very much affordable.",
  },
  {
    title: "Flexible",
    body: "Classes run between Maghrib and 10pm WAT, perfect for students and workers.",
  },
  {
    title: "Sound Manhaj",
    body: "Curriculum grounded in Qur'an and Sunnah upon the way of the Salaf.",
  },
  {
    title: "Fully Online",
    body: "Learn from anywhere in the world via WhatsApp, Telegram, and Google Meet.",
  },
];

const instructorsPreview = [
  {
    name: "Abu Nusaybah An-Nahjiy",
    image: "/images/abunusaybah.png",
    role: "Umar Class, Uthman Class & Tajweed",
    bio: "Years of experience teaching Qur'an, Tajweed, Arabic, Hadith, Fiqh, Nahw, and Sarf — virtually and physically.",
  },
  {
    name: "Abu Haneefah",
    image: "/images/abuhaneefah.png",
    role: "Abubakar Class (Qur'an)",
    bio: "An experienced and eloquent reciter known for making Qur'an learning easy and accessible.",
  },
];

const LandingPage = () => {
  return (
    <div className="text-[#144727]">
      <section className="h-[calc(100vh-110px)] flex flex-col gap-6 items-center justify-center text-center px-4 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          An-Nahj Islamic Institute
        </h1>
        <h4 className="text-xl md:text-2xl font-semibold opacity-80">
          Islam. Sunnah. Knowledge.
        </h4>
        <p className="text-[15.5px] leading-7 max-w-xl opacity-90">
          Dedicated to spreading beneficial knowledge upon the Qur&apos;an and
          authentic Sunnah, according to the understanding of the pious
          predecessors.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Link
            href="/enroll"
            className="bg-[#144727] text-[#ebe1d1] px-6 py-3 rounded-md font-medium hover:bg-[#0f3a1f] hover:scale-105 transition"
          >
            Enroll Now
          </Link>
          <Link
            href="#about"
            className="border border-[#144727] text-[#144727] px-6 py-3 rounded-md font-medium hover:bg-[#144727] hover:text-[#ebe1d1] transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-[#ebe1d1]" id="about">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Why An-Nahj?</h2>
        <p className="text-[15px] opacity-75 mb-8">
          What makes us different from the rest.
        </p>

        <div className="flex flex-wrap gap-5">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="flex-1 min-w-55 bg-white/60 p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[14.5px] leading-6 opacity-85">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/about"
            className="text-[#144727] font-semibold underline underline-offset-4 hover:opacity-70 transition text-[15px]"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Programs</h2>
        <p className="text-[15px] opacity-75 mb-8 max-w-xl">
          Structured classes in Qur&apos;an, Arabic, Hadith, and Fiqh — all
          conducted online between Maghrib and 10pm WAT.
        </p>

        <div className="flex flex-wrap gap-5">
          {programsPreview.map((p, i) => (
            <div
              key={i}
              className="flex-1 min-w-50 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md hover:-translate-y-1 transition"
            >
              <div className="bg-[#144727] text-[#ebe1d1] w-fit p-2.5 rounded-lg mb-3">
                {p.icon}
              </div>
              <h3 className="font-semibold text-[15.5px] mb-1">{p.title}</h3>
              <p className="text-[14px] leading-6 opacity-80">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/programs"
            className="inline-block bg-[#144727] text-[#ebe1d1] py-2 px-4 rounded-md font-medium hover:bg-[#0f3a1f] hover:scale-105 transition text-[15px]"
          >
            See all programs →
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 py-16 bg-[#ebe1d1]">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Meet Our Instructors
        </h2>
        <p className="text-[15px] opacity-75 mb-8 max-w-xl">
          Knowledge is a crucial part of our deen — know from whom you take it.
        </p>

        <div className="flex flex-wrap gap-6 ">
          {instructorsPreview.map((inst, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-5 min-w-60 bg-white/60 rounded-xl border border-[#d4c6b5] hover:shadow-md transition justify-start overflow-hidden"
            >
              <Image
                src={inst.image}
                alt={inst.name}
                width={150}
                height={200}
                loading="eager"
                className="w-30 h-full min-h-35 object-cover shrink-0 self-stretch"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[16px] mb-0.5 flex flex-col">
                  {inst.name}
                </h3>
                <p className="text-sm opacity-60 mb-3">{inst.role}</p>
                <p className="text-[14.5px] leading-6 opacity-85 max-w-md">
                  {inst.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/instructors"
            className="text-[#144727] font-semibold underline underline-offset-4 hover:opacity-70 transition text-[15px]"
          >
            See all instructors →
          </Link>
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 text-center flex flex-col items-center gap-5">
        <h2 className="text-2xl md:text-3xl font-bold max-w-xl">
          Ready to Take the Step?
        </h2>
        <p className="text-[15.5px] leading-7 max-w-lg opacity-85">
          Join our growing community of learners. Enrollment is open only at
          specific periods — send us a message to secure your slot for th enext
          batch, bi idhniLlāhi.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/enroll"
            className="bg-[#144727] text-[#ebe1d1] px-6 py-3 rounded-md font-medium hover:bg-[#0f3a1f] hover:scale-105 transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
