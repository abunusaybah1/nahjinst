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
        "Qur’an memorization — Mondays and Wednesdays",
        "Tajweed — Tuesdays and Thursdays in the Tajweed groups",
        "Hadith — Saturdays by 9:00pm–9:30pm in the general discussion group",
        "Murāja'ah — Saturdays & Sundays in the submission groups",
        "Fiqh — Sundays via pre-recorded lessons in the general discussion group",
      ],
    },
    {
      title: "Umar Class",
      icon: <FaPenNib size={26} />,
      description:
        "Learn Arabic letters, pronunciation, letter joining, and how to read the Qur’an from scratch.",
      schedule: [
        "Al-Bidāyah class — Mondays and Wednesdays by 9:30pm–11:00pm",
        "Al-Bidāyah class — Tuesdays and Thursdays by 9:00pm–11:00pm",
        "Hadith — Saturdays by 9:00pm–9:30pm in the general discussion group",
        "Fiqh — Sundays via pre-recorded lessons in the general discussion group",
      ],
    },
    {
      title: "Uthman Class",
      icon: <FaBookOpen size={26} />,
      description: "Learn Arabic, Nahw, Sarf, and Ta'beer.",
      schedule: [
        "Arabiyyah (Class 1 & 2) — Mondays and Wednesdays by 9:00pm–9:30pm",
        "Hadith — Saturdays by 9:00pm–9:30pm in the general discussion group",
        "Nahw (Class 2 only) — Fridays by 9:30pm–10:30pm on Telegram",
        "Sarf (Class 2 only) — Saturdays by 9:00pm–10:00pm on Telegram",
        "Ta'beer (Class 2 only) — Sundays by 9:00pm–10:00pm on Telegram",
        "Fiqh — Sundays via pre-recorded lessons in the general discussion group",
      ],
    },
    {
      title: "Weekend Class",
      icon: <FaChalkboardTeacher size={26} />,
      description:
        "Weekend classes for all students, covering foundational Islamic sciences.",
      schedule: ["Saturday — Hadith Memorization", "Sunday — Fiqh study"],
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

      <div className="flex flex-wrap gap-8 mb-10">
        {programs.map((p, index) => (
          <div
            key={index}
            className="bg-[#ebe1d1] p-6 rounded-xl shadow-md border border-[#d4c6b5] hover:shadow-lg transition hover:-translate-y-1 flex flex-col w-full md:w-[47%] lg:w-[30%]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#144727] text-[#ebe1d1] p-3 rounded-lg">
                {p.icon}
              </div>
              <h2 className="text-xl font-semibold">{p.title}</h2>
            </div>

            <p className="text-[15px] leading-6 mb-4">{p.description}</p>

            <h3 className="font-medium mb-2 text-[15px]">Schedule:</h3>
            <ul className="list-disc pl-5 text-[14.5px] leading-6">
              {p.schedule.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-8 mt-10">
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

        <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full md:w-[47%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-3">Fees and Enrollment</h2>
          <p className="leading-7 text-[15.5px] mb-3">
            Commitment fees are expected at the beginning of each month, with a
            grace period of up to 10 days to make things easier for everyone.
            This means students are paying in advance for the month&apos;s
            learning. Any student who is unable to pay on or before the 10th
            should communicate early without hesitation. This is not a
            pay-after-learning arrangement; it is part of the agreement from the
            start.
          </p>
          <p className="leading-7 text-[15.5px] mb-3">
            Students are expected to participate in the required activities of
            their class, as these sessions are important for progress and
            discipline.
          </p>
          <p className="leading-7 text-[15.5px] mb-3">
            From <strong>January 2027</strong>, the monthly commitment fee will
            be <strong>₦4,000</strong> for regular students,
            <strong> ₦5,000</strong> for the Live Qur&apos;an class, and
            <strong> ₦6,000</strong> for personalized classes. Students may pay
            more if they wish, but this is the approved structure effective from
            January 2027.
          </p>
          <p className="leading-7 text-[15.5px] mb-0">
            Enrollment remains open throughout the year, and students can join
            at any time, bi idhniLlāhi.
          </p>
        </div>

        <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full md:w-[47%] lg:w-[30%]">
          <h2 className="text-2xl font-semibold mb-3">Student Eligibility</h2>

          <p className="leading-7 text-[15.5px] mb-3">
            Our classes are open to all age groups and academic levels. Students
            choose their preferred class and complete a brief assessment to
            determine their current level.
          </p>
          <p className="leading-7 text-[15.5px] mb-0">
            A simple reminder: payments are due at the start of the month, with
            a grace period until the 10th day, and students are expected to take
            part in the required activities of their class.
          </p>
        </div>
      </div>

      {/* <div className="bg-[#ebe1d1] p-7 rounded-xl border border-[#d4c6b5] w-full mt-10">
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
      </div> */}
    </div>
  );
};

export default ProgramsPage;
