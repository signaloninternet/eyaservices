"use client";

import { Button } from "@/components/ui/button";
import { MapPinCheckIcon, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative max-w-[1600px] mt-[80px] mx-auto h-auto md:h-[650px] gap-6 flex flex-col-reverse md:flex-row items-stretch"
      id="home"
    >
      {/* Left Side Image */}
      <div className="relative w-full rounded-3xl min-h-[400px] md:ml-4 md:w-1/2 h-1/2 md:h-full">
        <Image
          src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg" // replace with your healthcare/abstract medical illustration
          alt="Healthcare abstract design"
          fill
          className="object-cover object-top rounded-3xl"
          priority
        />
      </div>

      {/* Right Side Content */}
      <div className="relative w-full md:mr-4 rounded-3xl md:w-1/2 h-1/2 md:h-full bg-gradient-to-br from-gray-900 via-[#225867] to-black px-6 py-10 lg:p-16 flex flex-col items-start justify-center text-white">
        <h1 className="relative text-3xl lg:text-5xl font-bold z-10">
          Your Health, Our Priority <br />
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Reliable Care, Seamless Delivery
          </span>
        </h1>

        <p className="relative mt-6 text-lg font-creato text-gray-300 max-w-md z-10">
          We deliver essential medical supplies directly to your doorstep.
          Trusted by families, hospitals, and businesses for dependable service
          when you need it most — faster, safer, and smarter.
        </p>

        {/* Buttons */}
        <div className="relative font-creato mt-8 flex gap-4 z-10">
          <a href="tel:+17863436772">
            <Button className="rounded-xl px-4 md:px-6 py-6 gap-3 text-base font-medium shadow-lg bg-[#18a08e] text-white hover:bg-blue-600">
              <PhoneCall className="w-4 h-4" /> Call Now
            </Button>
          </a>

          <Button
            variant="outline"
            className="rounded-xl  gap-3 text-black px-4 md:px-6 py-6 text-base font-medium border-gray-600 hover:text-white hover:bg-gray-800"
          >
            <MapPinCheckIcon /> Local Delivery
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="relative mt-8 font-creato flex flex-col sm:flex-row gap-6 text-sm text-gray-400 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Same-day delivery available
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Trusted by 500+ customers
          </div>
        </div>
      </div>
    </section>
  );
}
