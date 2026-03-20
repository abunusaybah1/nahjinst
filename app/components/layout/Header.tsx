import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5">
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <div className="middle">
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Programs</Link>
        <Link href="">Contact</Link>
      </div>
      <Link className="bg-green-900 text-white px-1 py-1 rounded h-fit" href="">Enroll</Link>
    </div>
  );
};

export default Header;
