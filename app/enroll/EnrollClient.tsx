"use client";
import React, { useEffect, useState, useRef } from "react";

const rules = [
  "All students must be on the institute's community as all lessons, materials, and instructions will be shared there.",
  "Students must check the group regularly to stay updated with classes and assignments, as well as necessary updates.",
  "The discussion groups are strictly for learning purposes and assignments submission; unnecessary chats or unrelated posts are not allowed.",
  "Respect must be maintained towards teachers and fellow students at all times.",
  "All fees must be paid before the beginning of each month.",
  "The latest date for payment is the 10th day of the month.",
  "Payments made for a month will not be rolled over to the next month unless the Director approves it under special circumstances.",
  "Anyone who wishes to be absent for any particular period must inform the instructor before absence.",
  "Failure to give prior information before absence means you are still obliged to make payment for the absence period.",
  "All study materials provided in the class must not be shared outside the group without prior permission.",
  "Fees once paid are non-refundable unless otherwise approved by the Director.",
  "Students who wish to withdraw should inform the administration in advance.",
  "Consistent inactivity for 3 days without notice will lead to expulsion.",
  "Any student who leaves the institute or its community without approval will NOT be accepted back.",
];

const EnrollClient = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(
    new Array(rules.length).fill(false),
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const allChecked = checked.every(Boolean);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-[#ebe1d1] w-[90%] md:w-[60%] lg:w-[45%] max-h-[85vh] rounded-xl shadow-xl p-6 border border-[#d4c6b5] animate-scaleIn flex flex-col">
            <h2 className="text-2xl font-semibold text-center">
              Rules & Regulations
            </h2>
            <p className="text-center mb-4 text-sm opacity-70 font-bold">
              Check each rule to confirm you have read and understood it.
            </p>
            <hr className="mb-4 border-[#d4c6b5]" />

            <div
              ref={scrollRef}
              className="overflow-y-auto flex-1 pr-2 space-y-3"
            >
              {rules.map((rule, i) => (
                <label
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition ${
                    checked[i]
                      ? "bg-[#144727]/10 border-[#144727]/40"
                      : "bg-white/40 border-[#d4c6b5]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked[i]}
                    onChange={() => toggle(i)}
                    className="mt-1 accent-[#144727] w-4 h-4 shrink-0"
                  />
                  <span className="text-[14.5px] leading-6">{rule}</span>
                </label>
              ))}
            </div>

            <hr className="mt-4 border-[#d4c6b5]" />

            <p className="text-center mt-3 text-sm opacity-70">
              {checked.filter(Boolean).length} of {rules.length} rules confirmed
            </p>

            <button
              disabled={!allChecked}
              onClick={() => {
                window.open(
                  `https://wa.me/2348164758649?text=${encodeURIComponent(
                    "As-salaamu alaykum! \n \n I want to enroll at An-Nahj Islamic Institute and I have gone through the website. The class I want to join is ________",
                  )}`,
                  "_blank",
                );
              }}
              className={`w-full mt-4 py-3 rounded-md font-medium text-[#ebe1d1] transition 
                ${
                  allChecked
                    ? "bg-[#144727] hover:bg-[#0f3a1f] hover:scale-105 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              {allChecked
                ? "I Agree & Proceed to Enroll"
                : `Confirm all ${rules.length} rules to proceed`}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnrollClient;
