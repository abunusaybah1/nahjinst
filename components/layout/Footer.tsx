"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" w-full bg-[#144727] text-[#ebe1d1] pt-10 pb-6 mt-10">
      <div className="px-6 md:px-12 grid md:grid-cols-3 gap-10">
        {/* Logo + Intro */}
        <div>
          <Image
            src="/images/logolighttrans.png"
            alt="An-Nahj Logo"
            width={60}
            height={50}
            className="mb-3 fill-[#ebe1d1]"
          />
          <h2 className="text-xl font-semibold mb-2">
            An-Nahj Islamic Institute
          </h2>
          <p className="text-sm leading-6">
            Islam • Sunnah • Knowledge | Spreading beneficial knowledge upon the
            Qur&apos;an and authentic Sunnah.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/programs" className="hover:underline">
              Programs
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/enroll" className="hover:underline">
              Enroll
            </Link>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full border-t border-[#ebe1d13b] my-6"></div>

      {/* Bottom */}
      <p className="text-center text-xs opacity-80">
        © {new Date().getFullYear()} An-Nahj Islamic Institute. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
