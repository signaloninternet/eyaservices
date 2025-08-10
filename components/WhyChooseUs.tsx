"use client";

import { Star, Settings, MessageSquare, Award, Square } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Why Choose Us?
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className="
          font-creato
          grid grid-cols-1 gap-6
          lg:grid-cols-8 lg:grid-rows-2
          auto-rows-[minmax(150px,auto)]
        "
        >
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/one.svg" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Easy-to-Use Design Tools.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our intuitive design platform is built for creators of all skill
              levels. Whether you’re a beginner or an experienced designer, you
              can bring your vision to life with ease.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/five.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              End-to-End Manufacturing.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              With Designure, you don’t just design – you manufacture. We handle
              the production process for you, ensuring your designs become
              reality.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
               <Image width={24} height={24} src="/four.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Build Your Brand.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Customize packaging, labels, and more to create a unique brand
              experience for your customers. Launch and grow your fashion brand
              from anywhere in the world.
            </p>
          </div>

          {/* Card 4 - Tall with image */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 2" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/three.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Top Quality, Best Prices.
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              We offer competitive manufacturing prices without compromising on
              quality, making it easier for you to scale your fashion business.
            </p>
            <div className="w-full h-1/2 mt-auto rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Lorem ipsum
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="bg-white p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Image width={24} height={24} src="/two.png" alt="Star Icon" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Development
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
