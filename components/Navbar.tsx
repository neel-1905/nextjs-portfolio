"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";

type NavLink = {
  name: string;
  link: string;
};

const NavLink = (props: NavLink) => {
  const { link, name } = props;
  return (
    <Link
      className={`hover:text-secondary text-primary font-medium text-sm sm:text-base`}
      href={link}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: "-10vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, duration: 0.5, delay: 0.5 }}
      className="w-full fixed top-8 md:top-12 px-5 z-10"
    >
      <nav className="max-w-md mx-auto bg_gradient rounded-xl border-2 border-primary">
        <div className="w-full flex justify-center items-center px-9 sm:px-12 py-6">
          <ul className="flex items-center justify-between w-full">
            {navLinks.map((item) => (
              <li key={item.name}>
                <NavLink {...item} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
