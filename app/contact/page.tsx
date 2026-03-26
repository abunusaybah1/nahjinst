"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phone = "2348164758649";

  const handleSend = () => {
    const text = `As-salaamu alaykum! My name is ${name || "________"}.\n\n${message || "I would like to make an enquiry about An-Nahj Islamic Institute."}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="px-6 md:px-16 text-[#144727]">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>

      <p className="text-[15.5px] md:w-2/3 leading-7 mb-10">
        Have questions or ready to join? Reach out to us through WhatsApp or
        send a message below. We are always ready to assist you, bi idhniLlāhi.
      </p>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="flex-1 bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5]">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <div className="flex items-center gap-3 mb-4">
            <FaWhatsapp />
            <span
              className="cursor-pointer "
              onClick={() => {
                window.open("https://wa.me/2348164758649");
              }}
            >
              +234 901 580 7937
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span
              className="cursor-pointer "
              onClick={() => {
                window.open("mailto:nahjinst@gmail.com");
              }}
            >
              nahjinst@gmail.com
            </span>
          </div>

          <p className="mt-6 text-[15px] leading-6">
            Our classes are conducted online via WhatsApp. Kindly
            send us a message, and we will guide you through the enrollment
            process.
          </p>
        </div>

        {/* Form */}
        <div className="flex-1 bg-[#ebe1d1] p-6 rounded-xl border border-[#d4c6b5]">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 p-3 rounded-md border border-[#d4c6b5] bg-white outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-4 p-3 rounded-md border border-[#d4c6b5] bg-white outline-none"
          />

          {/* Button */}
          <button
            onClick={handleSend}
            className="w-full bg-[#144727] text-[#ebe1d1] py-3 rounded-md font-medium hover:bg-[#0f3a1f] hover:scale-105 transition"
          >
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
