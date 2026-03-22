"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => {
  return (
    <div className="px-6 md:px-16 text-[#144727]">
      {/* HEADER */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        An-Nahj Islamic Institute
      </motion.h1>

      {/* INTRO SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mb-10 leading-7 text-[15.5px] bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5]"
      >
        <p className="mb-4">
          Founded in early 2025, An-Nahj Islamic Institute was established with
          a clear mission: to spread beneficial knowledge until it reaches
          everyone, by the permission of Allah.
        </p>
        <p>
          The institute provides a structured, reliable, and accessible platform
          where Muslims can learn Qur’an, Arabic, Hadith, and basic Islamic
          jurisprudence from anywhere.
        </p>
      </motion.section>

      {/* WHAT MAKES AN-NAHJ DIFFERENT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className=" p-6 rounded-xl border border-[#d4c6b5] bg-[#ebe1d1]"
      >
        <h2 className="text-2xl font-semibold mb-5">
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
            <h3 className="text-lg font-bold mb-2">Authentic Manhaj</h3>
            <p className="text-[15px] leading-6">
              Curriculum based on Qur’an and Sunnah according to the Salaf,
              ensuring trusted knowledge.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Fully Online</h3>
            <p className="text-[15px] leading-6">
              Learn from anywhere through a seamless online learning structure.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex-1 min-w-62.5 bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition">
            <h3 className="text-lg font-bold mb-2">Discipline & Etiquettes</h3>
            <p className="text-[15px] leading-6">
              Built upon sincerity, discipline, taqwah, and proper Islamic
              manners.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
