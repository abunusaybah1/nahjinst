"use client";

import Link from "next/dist/client/link";
import React from "react";
import {
  FaBookOpen,
  FaQuran,
  FaPenNib,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

const ProgramsPage = () => {
  const programs = [
    {
      title: "Abubakar Class",
      icon: <FaQuran size={26} />,
      description:
        "Qur’an memorization, revision, and Tajweed for learners of all levels.",
      schedule: [
        "Memorization — Monday, Wednesday, Friday",
        "Tajweed — Tuesday, Thursday",
      ],
    },
    {
      title: "Umar Class",
      icon: <FaPenNib size={26} />,
      description:
        "Learn Arabic letters, pronunciation, letter joining, and how to read the Qur’an from scratch.",
      schedule: ["Monday–Friday"],
    },
    {
      title: "Uthman Class",
      icon: <FaBookOpen size={26} />,
      description:
        "Learn Arabic language using Duroos al-Lughah, covering grammar, vocabulary, and sentence construction.",
      schedule: ["Monday–Friday"],
    },
    {
      title: "Weekend Class",
      icon: <FaChalkboardTeacher size={26} />,
      description:
        "Weekend classes for all students, covering foundational Islamic sciences.",
      schedule: ["Saturday — Hadith", "Sunday — Fiqh"],
    },
    {
      title: "General Weekly Quizzes",
      icon: <MdQuiz size={26} />,
      description:
        "General weekly quizzes to assess students’ understanding and progress in the program.",
      schedule: ["Friday"],
    },
  ];

  return (
    <div className="px-6 md:px-16 text-[#144727]">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Our Programs and Classes
      </h1>

      <p className="text-[15.5px] md:w-2.5/3 leading-7 mb-10">
        At An-Nahj Islamic Institute, our structured programs are designed to
        help students learn the Qur’an, Arabic, Hadith, and Fiqh with clarity
        and discipline.
      </p>

      {/* Programs (FLEX) */}
      <div className="flex flex-wrap gap-8 mb-10">
        {programs.map((p, index) => (
          <div
            key={index}
            className="bg-[#ebe1d1] p-6 rounded-xl shadow-md border border-[#d4c6b5] hover:shadow-lg transition hover:-translate-y-1 flex flex-col w-full md:w-[47%] lg:w-[30%]"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#144727] text-[#ebe1d1] p-3 rounded-lg">
                {p.icon}
              </div>
              <h2 className="text-xl font-semibold">{p.title}</h2>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-6 mb-4">{p.description}</p>

            {/* Schedule */}
            <h3 className="font-medium mb-2 text-[15px]">Schedule:</h3>
            <ul className="list-disc pl-5 text-[14.5px] leading-6">
              {p.schedule.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Sections — Flexbox */}
      <div className="flex flex-wrap gap-8 mt-10">
        {/* Class Timing */}
        <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full md:w-[47%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-3">Class Timing</h2>
          <p className="leading-7 text-[15.5px]">
            All classes take place between <strong>Maghrib and 10pm WAT</strong>
            , making them suitable for students, workers, and busy adults.
          </p>
          <br />
          <h3 className="font-bold text-[16px]">Mode of learning:</h3>
          <p className="leading-7 text-[15.5px]">
            Some classes are conducted one-on-one while others are conducted in
            groups. All details will be communicated as due, in shā&apos; Allāh.
          </p>
        </div>

        {/* Teaching Methodology */}
        <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full md:w-[47%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-3">Teaching Methodology</h2>
          <p className="leading-7 text-[15.5px] mb-3">
            All our classes are conducted on WhatsApp and Google Meet. All
            required materials will be shared with students throughout the
            program.
          </p>

          <h3 className="font-bold text-[16px] mb-2">Languages used:</h3>
          <ul className="list-disc pl-5 text-[15px] leading-6">
            <li>English</li>
            <li>Yoruba</li>
            <li>Arabic</li>
          </ul>
        </div>

        {/* Fees & Enrollment */}
        <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full md:w-[47%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-3">Fees and Enrollment</h2>
          <p className="leading-7 text-[15.5px] mb-4">
            Classes are greatly discounted, with students only having to pay a
            {"  "}
            <strong>₦3000 monthly commitment fee</strong>. This helps both
            students and the institute stay disciplined and committed to the
            program. Definitely, the reward for this knowledge is with Allah,
            and we want to make it easy for everyone to join and benefit from
            it, bi idhniLlāhi. Enrollment is open all year round, and students
            can join any class at their convenience.
          </p>

          <h3 className="font-bold text-[16px]">Eligibility:</h3>
          <p className="leading-7 text-[15.5px]">
            Our classes are open to all age groups and academic levels. Students
            will choose their preferred class, and a brief test will be
            conducted to know the level of their prior knowledge.
          </p>
        </div>
      </div>

      <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full mt-10">
        <p className=" leading-7 text-[15.5px] mb-5">
          Want to know the instructors you will be learning from at the
          institute? We should know that knowledge is a crucial part of our
          religion, and it is very important to know from whom we will be taking
          it from.
        </p>
        <Link
          href="/instructors"
          className="bg-[#144727] text-[#ebe1d1] py-2 px-3 rounded-md hover:bg-[#144710] hover:scale-105 transition cursor-pointer"
        >
          See instructors
        </Link>
      </div>
    </div>
  );
};

export default ProgramsPage;
