"use client";

import React from "react";
import Link from "next/dist/client/link";

const AboutPage = () => {
  return (
    <div className="px-6 md:px-16 text-[#144727]">
      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        An-Nahj Islamic Institute
      </h1>

      {/* INTRO SECTION */}

      <p className="mb-4">
        Founded in early 2025, An-Nahj Islamic Institute was established with a
        clear mission: to spread beneficial knowledge until it reaches everyone,
        by the permission of Allah.
      </p>
      <p>
        The institute provides a structured, reliable, and accessible platform
        where Muslims can learn Qur’an, Arabic, Hadith, and basic Islamic
        jurisprudence from anywhere.
      </p>

      {/* WHAT MAKES AN-NAHJ DIFFERENT */}

      <h2 className="text-2xl mb-5 font-bold mt-12">
        What Makes An-Nahj Different?
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
        {/* Card 1 */}
        <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">Affordable & Accessible</h3>
          <p className="text-[15px] leading-6">
            Small commitment fee so anyone can join regardless of financial
            status.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">Flexible Structure</h3>
          <p className="text-[15px] leading-6">
            Designed to fit the schedules of university students and working
            adults.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">Sound Creed & Manhaj</h3>
          <p className="text-[15px] leading-6">
            Curriculum based on Qur’an and Sunnah according to the Salaf,
            ensuring trusted knowledge.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">Fully Online</h3>
          <p className="text-[15px] leading-6">
            Learn from any part of the world, anytime.
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">Discipline & Etiquettes</h3>
          <p className="text-[15px] leading-6">
            Built upon sincerity, discipline, taqwah, and proper Islamic
            etiquettes.
          </p>
        </div>
      </div>

      {/* PROGRAMS SECTION */}

      <h2 className="text-2xl mb-5 font-bold mt-12">Our Programs</h2>

      <p className="mb-6">
        At An-Nahj Islamic Institute, our structured programs are designed to
        help students learn Qur’an, Arabic, Hadith, and Fiqh with clarity and
        discipline.
      </p>

      <Link
        href="/programs"
        className="bg-[#144727] text-[#ebe1d1] py-2 px-3 rounded-md font-medium hover:bg-[#144710] hover:scale-105 transition cursor-pointer"
      >
        Explore our programs
      </Link>
    </div>
  );
};

export default AboutPage;