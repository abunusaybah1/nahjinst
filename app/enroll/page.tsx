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

const EnrollPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timer, setTimer] = useState(80);
  const [canEnroll, setCanEnroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show popup after 1 second
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(t);
  }, []);

  // Countdown timer for 60 seconds
  useEffect(() => {
    if (!showPopup) return;
    if (timer === 0) {
      setCanEnroll(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [showPopup, timer]);

  // Detect scroll-to-bottom before enabling button
  const handleScroll = () => {
    const element = scrollRef.current;
    if (!element) return;

    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;

    if (bottom && timer === 0) {
      setCanEnroll(true);
    }
  };

  return (
    <div className="px-6 md:px-16 text-[#144727]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Enroll Now</h1>
      <p className="text-[15.5px] leading-7">
        Please complete the enrollment process below.
      </p>

      {/* POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-[#ebe1d1] w-[90%] md:w-[60%] lg:w-[45%] max-h-[80vh] rounded-xl shadow-xl p-6 border border-[#d4c6b5] animate-scaleIn">
            <h2 className="text-2xl font-semibold text-center">
              Rules & Regulations
            </h2>
            <p className="text-center mb-4">Please read and understand!</p>

            {/* Scrollable Rules Box */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="overflow-y-auto h-60 pr-3 text-[15.5px] leading-7 space-y-3"
            >
              {rules.map((rule, i) => (
                <p key={i}>• {rule}</p>
              ))}
            </div>

            {/* Timer Note */}
            <p className="text-center mt-4 text-sm opacity-70">
              You can proceed after <span className="font-bold">{timer}s</span>{" "}
              and after scrolling to the bottom.
            </p>

            {/* Enroll Button */}
            <button
              disabled={!canEnroll}
              onClick={() => {
                window.open(
                  `https://wa.me/2349015807937?text=${encodeURIComponent("As-salaamu alaykum! \n \n I want to enroll at An-Nahj Islamic Institute and I have gone through the website. The class I want to join is ________")}`,
                  "_blank",
                );
              }}
              className={`w-full mt-5 py-3 rounded-md font-medium text-[#ebe1d1] transition 
                ${
                  canEnroll
                    ? "bg-[#144727] hover:bg-[#0f3a1f] hover:scale-105"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              I Agree & Proceed to Enroll
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0 }
          to { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </div>
  );
};

export default EnrollPage;
