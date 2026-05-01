import React from "react";
import EnrollClient from "./EnrollClient";

export const metadata = {
  title: "Enroll | An-Nahj Islamic Institute",
  description:
    "Enroll at An-Nahj Islamic Institute to start your journey in learning the Qur’an, Arabic, Hadith, and Fiqh. Please read our enrollment rules and regulations before proceeding.",
};
const EnrollPage = () => {
  return (
    <div className="px-6 md:px-16 text-[#144727]">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Enroll Now</h1>
      <p className="text-[15.5px] leading-7">
        Please complete the enrollment process below.
      </p>

      <EnrollClient />
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
