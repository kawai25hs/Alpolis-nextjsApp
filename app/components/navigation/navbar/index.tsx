import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-16 bg-amber-50 sticky top-0 drop-shadow-md font-jaro text-lg flex justify-center">
        <div className="container px-4 h-full">
          <div className="flex justify-between md:justify-center items-center h-full">
            <span className="md:hidden sm:mr-auto">
              <Logo />
            </span>

            <ul className="hidden md:flex items-center gap-x-10 text-amber-600">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/introduction">
                  <p>Introduction</p>
                </Link>
              </li>
              <li>
                <Logo />
              </li>
              <li>
                Login
              </li>
              <li>
                Create an account
              </li>
            </ul>

            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="rgb(217 119 6)"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;