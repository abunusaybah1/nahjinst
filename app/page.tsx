"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomePage = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="px-6 md:px-16 text-[#144727]"
    >
      <Hero />
    </motion.div>
  );
};

export default HomePage;
