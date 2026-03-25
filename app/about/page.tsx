import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Link from "next/link";

export const metadata = {
  title: "About | An-Nahj Islamic Institute",
  description:
    "Learn about An-Nahj Islamic Institute, our mission, and our commitment to spreading beneficial Islamic knowledge through structured, accessible programs for all learners.",
};

const AboutPage = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="px-6 md:px-16 text-[#144727]"
    >
      {/* HEADER */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        An-Nahj Islamic Institute
      </motion.h1>

      {/* INTRO SECTION */}
      <motion.section
        variants={fadeUp}
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
        className="p-6 rounded-xl border border-[#d4c6b5] bg-[#ebe1d1] mb-10"
      >
        <h2 className="text-2xl font-semibold mb-5">
          What Makes An-Nahj Different?
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
          {[
            {
              title: "Affordable & Accessible",
              desc: "Small commitment fee so anyone can join regardless of financial status.",
            },
            {
              title: "Flexible Structure",
              desc: "Designed to fit the schedules of university students and working adults.",
            },
            {
              title: "Authentic Manhaj",
              desc: "Curriculum based on Qur’an and Sunnah according to the Salaf.",
            },
            {
              title: "Fully Online",
              desc: "Learn from anywhere through a seamless online learning structure.",
            },
            {
              title: "Discipline & Etiquettes",
              desc: "Built upon sincerity, discipline, taqwah, and proper Islamic manners.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex-1 min-w-[250px] bg-[#ebe1d1] p-5 rounded-xl border border-[#d4c6b5] hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-[15px] leading-6">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROGRAMS SECTION */}
      <motion.section
        variants={fadeUp}
        className="mb-10 leading-7 text-[15.5px] bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5]"
      >
        <h2 className="text-2xl font-semibold mb-5">Our Programs</h2>

        <p className="mb-4">
          At An-Nahj Islamic Institute, our structured programs are designed to
          help students learn Qur’an, Arabic, Hadith, and Fiqh with clarity and
          discipline.
        </p>

        <Link
          href="/programs"
          className="inline-block bg-[#144727] text-[#ebe1d1] py-2 px-4 rounded-md font-medium hover:bg-[#144710] hover:scale-105 transition"
        >
          Explore our programs
        </Link>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
