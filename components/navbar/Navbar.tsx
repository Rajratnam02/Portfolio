"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

type Section = "home" | "project" | "skill";

interface NavbarProps {
  isActive: Section;
  setIsActive: Dispatch<SetStateAction<Section>>;
}

const Navbar = ({ isActive, setIsActive }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const normalClass = "cursor-pointer text-md group relative inline-block";
  const spanClass =
    "absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100";

  const handleNav = (section: Section) => {
    setIsActive(section);
    setMenuOpen(false);
  };

  const mobileItemClass =
    "w-full cursor-pointer px-6 py-4 text-lg font-coda text-white border-b border-white/10 hover:bg-white/5 transition-colors duration-200";

  return (
    <>
      {/* Main navbar bar */}
      <div className="navbar fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-muted px-6 md:px-15 lg:px-20 backdrop-blur-sm">
        <p
          onClick={() => handleNav("home")}
          className="font-charm cursor-pointer text-xl font-bold text-foreground md:text-2xl lg:text-4xl"
        >
          Rajratnam
        </p>

        {/* Desktop nav */}
        <div className="nav-list hidden gap-10 font-coda text-white md:flex">
          <div onClick={() => handleNav("home")} className={normalClass}>
            Home
            <span
              className={`${spanClass} ${
                isActive === "home" ? "scale-x-100" : ""
              }`}
            />
          </div>

          <div onClick={() => handleNav("project")} className={normalClass}>
            Projects
            <span
              className={`${spanClass} ${
                isActive === "project" ? "scale-x-100" : ""
              }`}
            />
          </div>

          <div onClick={() => handleNav("skill")} className={normalClass}>
            Skills
            <span
              className={`${spanClass} ${
                isActive === "skill" ? "scale-x-100" : ""
              }`}
            />
          </div>

          <div
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1apg-HStU5ljLls3lXz44gBYU9-irzker/view?usp=sharing",
                "_blank",
              )
            }
            className={normalClass}
          >
            Resume
            <span className={spanClass} />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="fixed top-20 left-0 z-40 w-full bg-[#0B0B0D]/95 backdrop-blur-sm md:hidden flex flex-col border-b border-white/10 shadow-xl">
          <div onClick={() => handleNav("home")} className={mobileItemClass}>
            Home
          </div>
          <div onClick={() => handleNav("project")} className={mobileItemClass}>
            Projects
          </div>
          <div onClick={() => handleNav("skill")} className={mobileItemClass}>
            Skills
          </div>
          <div
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1apg-HStU5ljLls3lXz44gBYU9-irzker/view?usp=sharing",
                "_blank",
              );
              setMenuOpen(false);
            }}
            className={mobileItemClass}
          >
            Resume
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
