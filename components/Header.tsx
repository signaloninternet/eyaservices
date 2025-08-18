"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, PhoneCallIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed font-creato top-4 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className={`flex-shrink-0 transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-12 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex h-full w-content border-[2px] rounded-2xl px-10 items-center space-x-8 transition-all duration-300 ${
              scrolled
                ? "bg-white border-gray-200 shadow-md"
                : "bg-white/60 border-white"
            }`}
          >
            <button
              onClick={() => handleScroll("home")}
              className="text-gray-900 hover:text-purple-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("why-choose-us")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Why Choose Us ?
            </button>

            <button
              onClick={() => handleScroll("products")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Our Products
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Frequently Asked Questions
            </button>
          </nav>

          {/* Desktop Call Button */}
          <div
            className={`hidden md:block transition-all duration-300 ${
              scrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
            }`}
          >
            <Link href="tel:+17863436772">
              {" "}
              {/* CHANGE number */}
              <Button className="bg-[#18a08e] hover:bg-purple-700 text-white px-6 py-4 rounded-xl transition-all duration-300">
                <PhoneCallIcon className="inline w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-all duration-300 ${
                scrolled
                  ? "bg-white shadow-md text-gray-800"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 shadow-lg">
            {/* X (Close) Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-gray-700 hover:text-purple-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleScroll("home")}
              className="text-lg font-medium text-gray-900 hover:text-purple-600 transition"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("why-choose-us")}
              className="text-lg text-gray-600 hover:text-purple-600 transition"
            >
              Why Choose Us ?
            </button>
            <button
              onClick={() => handleScroll("products")}
              className="text-lg text-gray-600 hover:text-purple-600 transition"
            >
              Products
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="text-lg text-gray-600 hover:text-purple-600 transition"
            >
              Frequently Asked Questions
            </button>
            <a
              href="tel:+17863436772"
              onClick={() => setIsMenuOpen(false)} // ✅ closes menu after call
              className="w-full px-6"
            >
              <Button className="w-full bg-cyan-600 text-white px-6 py-3 rounded-full transition">
                <PhoneCallIcon className="inline w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
