"use client";

import { Instagram, Linkedin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative z-40  overflow-hidden">
      <div className="px-6 z-40 lg:px-12 pt-16 pb-32 md:py-16 relative z-10">
        {/* Desktop Logo */}
        <Link
          href="https://oceanwaveweb.com/"
          target="_blank"
          className="absolute hidden md:block bottom-2 right-0 -translate-x-1/2 z-10"
        >
          <Image
            src="/logolight.png"
            alt="Heart Icon"
            width={200}
            height={200}
            className="opacity-80 hover:opacity-100 transition"
          />
        </Link>

        {/* Mobile Logo */}
        <Link
          href="https://oceanwaveweb.com/"
          target="_blank"
          className="absolute md:hidden bottom-20 left-1/2 -translate-x-1/2 z-10"
        >
          <Image
            src="/logolight.png"
            alt="Heart Icon"
            width={170}
            height={170}
            className="opacity-80 hover:opacity-100 transition"
          />
        </Link>

        <div className="bg-white relative backdrop-blur-sm rounded-3xl shadow-md p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side */}
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="opacity-90"
              />
              <p className="text-gray-600 pt-8 mb-6 leading-relaxed md:max-w-md">
                Your trusted partner in health and wellness, delivering
                essential medical supplies with care and reliability.
              </p>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-start lg:items-end">
              {/* Nav */}
              <nav className="flex flex-wrap gap-6 md:gap-8 mb-8">
                <button
                  onClick={() => handleScroll("home")}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => handleScroll("why-choose-us")}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Why Choose Us?
                </button>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  Our Products
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                 Contact Us
                </Link>
              </nav>

              {/* Social */}
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
