"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-black leading-tight mb-8">
            Create Your Dream Fashion
            <br />
            Line, Anytime, Anywhere!
          </h1>

          <div className="flex font-creato flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button
              size="lg"
              className="bg-white backdrop-blur-sm hover:bg-white/30 hover:text-pink-600 text-black px-4 py-3 rounded-lg border border-white/30 transition-all duration-300 transform"
            >
              Get beta access
            </Button>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg transition-all duration-300 transform"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
