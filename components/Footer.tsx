"use client";

import { Instagram, Linkedin, Music, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white overflow-hidden">

      <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-32 md:py-16 relative z-10">
        <Link
          href="https://oceanwaveweb.com/"
          target="_blank"
          className="absolute hidden md:block bottom-[4px] left-[40%] z-10"
        >
          <Image
            src="/logolight.png"
            alt="Heart Icon"
            width={200}
            height={200}
          />
        </Link>

        <Link
          href="https://oceanwaveweb.com/"
          target="_blank"
          className="absolute md:hidden bottom-20 left-[24%] z-10"
        >
          <Image
            src="/logolight.png"
            alt="Heart Icon"
            width={170}
            height={170}
          />
        </Link>

        <div className="bg-white/90 relative backdrop-blur-sm rounded-3xl p-2 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Company Info */}
            <div>
              <Image src="/logo.png" alt="Logo" width={150} height={50} />
              <p className="text-gray-600 ml-6 mb-6 leading-relaxed md:max-w-md">
                Your trusted partner in health and wellness, delivering
                essential medical supplies with care and reliability.
              </p>

              {/* Made with love section */}
              <div className="flex relative items-center space-x-2 text-sm text-gray-500"></div>
            </div>

            {/* Right Side - Navigation and Social */}
            <div className="flex flex-col items-start lg:items-end">
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-8 mb-8">
                <button
                  onClick={() => handleScroll("home")}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => handleScroll("why-choose-us")}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Why Us ?
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
                  FAQs
                </button>
              </nav>

              {/* Social Media Icons */}
              <div className="flex space-x-4 pb-16 md:pb-0">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Globe className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
