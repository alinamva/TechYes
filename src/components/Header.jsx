import React from "react";
import logo from "..//assets/logo.png";
import { navLinks } from "../constants";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 1px 10px rgb(211,211,211))",
    transition: {
      repeatType: "reverse",
      duration: 0.4,
      repeat: Infinity,
    },
  },
};
// const headerVariants = {
//   hidden: {
//     opacity: 0,
//     y: -250,
//   },
//   visible: {
//     opacity: 1,
//     y: -10,
//   },
//   trasition: {
//     type: "spring",
//     delay: 2,
//     stiffness: 120,
//   },
// };
const Header = () => {
  return (
    <motion.div
      className="navbar lg:px-32 lg:py-9 px-8 py-8 w-full flex items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      <div className="navbar-start flex gap-4">
        <div className="cursor-pointer min-w-full">
          <img src={logo} alt="logo" />
        </div>
        <div className="dropdown absolute left-3/4">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content absolute right-0 mt-3 z-[1] p-2 shadow bg-base_btn rounded-box w-52"
          >
            {navLinks.map((nav, index) => (
              <li key={index}>
                <a>{nav.title}</a>
              </li>
            ))}
            <button className="bg-base_btn hidden lg:block">
              {" "}
              <Link to="contact" smooth={true} duration={500}>
                Let's Talk
              </Link>{" "}
            </button>
          </ul>
        </div>
      </div>
      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          {navLinks.map((nav, index) => (
            <li key={index} className="hover:bg-lightgrey rounded duration-300">
              <Link to={nav.id} smooth={true} duration={500}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <motion.button
          whileHover="hover"
          variants={buttonVariants}
          className="bg-base_btn hidden lg:block"
        >
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Let's Talk
          </Link>{" "}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Header;
