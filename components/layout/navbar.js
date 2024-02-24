import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-[#143c91] sticky top-0 font-semibold">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white flex-row-reverse">
              <li>
                <Link href="/aqsam">
                  <p>الاقسام</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>الادارة</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>شئون الطلاب</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>اتحاد الطلاب</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>المعامل</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>وحدة ضمان الجودة</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>الجداول</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>عن المعهد</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
