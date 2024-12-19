"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import LightDarkButton from "../LightDarkButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll to change Navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Define navigation links
  const navLinks = [
    { name: "Home", href: "/#navbar" },
    { name: "Projects", href: "/#projects" },
    { name: "Certificates", href: "/photos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white dark:bg-slate-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Brand Name */}
        <Link href="/#navbar">
      
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg font-medium ${
                (link.href === "/#navbar" && pathname === "/") ||
                pathname === link.href
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
              } transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions: Dark Mode Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <LightDarkButton />
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-3/4 bg-white dark:bg-slate-800 h-full p-6 transition-transform duration-300 ease-in-out">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-medium ${
                    (link.href === "/#navbar" && pathname === "/") ||
                    pathname === link.href
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
                  } transition-colors`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
