"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#ebe1d1] text-[#144727] py-3 shadow-sm z-1000">
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <Image
          src="/images/logo1trans.png"
          alt="Logo"
          width={70}
          height={50}
          className="cursor-pointer"
        />

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-7 text-[15px]">
          <Link
            href="/"
            className="hover:text-[#144710] hover:underline hover:scale-105 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#144710] hover:underline hover:scale-105 transition"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="hover:text-[#144710] hover:underline hover:scale-105 transition"
          >
            Programs
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#144710] hover:underline hover:scale-105 transition"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/enroll"
          className="hidden md:block bg-[#144727] text-[#ebe1d1] px-4 py-2 rounded-md font-medium hover:bg-[#144710] hover:scale-105 transition"
        >
          Enroll
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl hover:text-[#144710] hover:scale-120 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#ebe1d1] px-6 mt-3 pb-5 border-t border-[#144727] py-3">
          <nav className="flex flex-col gap-4 text-[16px]">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-[#144710] hover:underline hover:scale-105 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-[#144710] hover:underline hover:scale-105 transition"
            >
              About
            </Link>
            <Link
              href="/programs"
              onClick={() => setOpen(false)}
              className="hover:text-[#144710] hover:underline hover:scale-105 transition"
            >
              Programs
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-[#144710] hover:underline hover:scale-105 transition"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/enroll"
              onClick={() => setOpen(false)}
              className="bg-[#144727] text-[#ebe1d1] w-fit px-4 py-2 rounded-md font-medium hover:bg-[#144710] hover:scale-105 transition"
            >
              Enroll
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
