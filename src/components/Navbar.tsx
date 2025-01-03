import Link from "next/link";
import React from "react";

const navItems = [
  {
    item: "Home",
    path: "/",
  },
  // {
  //   item: "About",
  //   path: "/about",
  // },
  {
    item: "Menu",
    path: "/menu",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-600 text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link href={navItem.path}>{navItem.item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            Baking Bari
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navItems.map((navItem, index) => (
            <ul key={index} className="menu menu-horizontal px-1">
              <li>
                <Link href={navItem.path}>{navItem.item}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
