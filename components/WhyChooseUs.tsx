"use client";

import {
  Star,
  Settings,
  MessageSquare,
  Award,
  Square,
  ShieldCheckIcon,
  Clock12Icon,
  Clock,
  Users,
  MapPinCheck,
  LucideHeartPulse,
  LucideHeadphones,
  HeadphonesIcon,
  Headphones,
  PhoneIncomingIcon,
} from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="py-20 mt-8 relative" id="why-choose-us">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-4">
            Why Choose Eya Supply?
          </h2>
          <p className="text-gray-600 text-lg">
            We’re more than just a supplier – we’re your trusted partner in
            health and wellness.
          </p>
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
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Trusted & Reliable
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Licensed medical supply distributor with quality guarantees on all
              products.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Fast Delivery
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Same-day delivery available. Most orders delivered within 2–4
              hours.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Community Focused
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Proudly serving local families and businesses for over 5 years.
            </p>
          </div>

          {/* Card 4 - Tall with image */}
          <div
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 2", gridRow: "span 2" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <LucideHeartPulse className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Serving Healthcare Professionals & Families
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed mb-4">
              From individual families to healthcare facilities, we provide the
              medical supplies you need with the personal service you deserve.
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
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <MapPinCheck className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Local Service
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Serving the entire metro area with personalized, caring service.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="bg-[#18a08e] p-8 rounded-2xl shadow-sm flex flex-col   transition-all duration-300"
            style={{ gridColumn: "span 3", gridRow: "span 1" }}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
               <PhoneIncomingIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              24/7 Emergency Support
            </h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Our team is always available for urgent orders and emergencies,
              ensuring you never face delays in critical times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
