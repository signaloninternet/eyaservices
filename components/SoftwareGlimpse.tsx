"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Emergency Kits",
    description: "Complete first aid and emergency medical supplies.",
  },
  {
    id: 2,
    image:
      "https://www.romsons.in/cdn/shop/files/ORDPMLPU10_1800x1800.jpg?v=1753245699",
    title: "Adult Pampers",
    description: "Premium quality adult incontinence products.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560848119-ec9255fd285b?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ensure Milk",
    description: "Nutritional supplements for health and wellness.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1628235176517-71013205a2de?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Medical Gloves",
    description: "Professional-grade protective gloves.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1602867005618-ef11b085c9a3?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sanitizing Wipes",
    description: "Anti-bacterial cleaning and sanitizing wipes.",
  },
  {
    id: 6,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/12/369204717/KH/RN/KW/96614569/disposable-adult-underpads-1000x1000.jpg",
    title: "Underpads",
    description: "Protective bedding and furniture covers.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1619618691037-751d1e6c9ad1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Wheelchairs",
    description: "Mobility aids and wheelchair accessories.",
  },
];

export default function SoftwareGlimpse() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const n = portfolioItems.length;
  const SLIDE_W = 640;
  const SLIDE_H = 520;
  const GAP = 24;
  const VISIBLE_W = 1600;
  const trackWidth = n * SLIDE_W + (n - 1) * GAP;
  const centerOffset = VISIBLE_W / 2;
  const translateX = centerOffset - (current * (SLIDE_W + GAP) + SLIDE_W / 2);

  const prev = () => {
    setCurrent((s) => (s - 1 + n) % n);
    resetProgress();
  };

  const next = () => {
    setCurrent((s) => (s + 1) % n);
    resetProgress();
  };

  function resetProgress() {
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoPlay();
  }

  function startAutoPlay() {
    const duration = 40 * 100; // 10 seconds
    const startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        next();
      }
    }, 50);
  }

  // Handle resize
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Start autoplay
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const radius = 23.5;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-16" id="products">
      <div className="max-w-[1400px] relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with arrows */}
        <Image
          src="/glimpsbg.svg"
          alt="Software Glimpse Background"
          width={1400}
          height={600}
          className="absolute z-0 -top-16 md:-top-24 left-0 md:left-[25%] w-[400px] h-[400px] md:w-[650px] md:h-[650px] object-cover opacity-20"
        />
        <div className="flex items-center justify-between mb-8">
          <button
            aria-label="Previous"
            onClick={prev}
            className="p-3 rounded-full bg-[#18a08e]/40 hover:bg-gray-100"
          >
            <Image
              src="/left.svg"
              alt="Next"
              width={24}
              height={24}
              className="relative z-10"
            />
          </button>

          <div className="text-center relative">
            <h2 className="text-4xl z-10 md:text-5xl font-bold pb-8 text-black">
              Essential Health Products
            </h2>
            <p className="text-[#8987A1] text-2xl z-10 mt-2 max-w-md pb-8 mx-auto">
              We stock a comprensive range of medical supplies and health
              products to meet your professional and personal needs.
            </p>
          </div>

          {/* Right Arrow with Smooth Progress Ring */}
          <button
            aria-label="Next"
            onClick={next}
            className="relative p-3 rounded-full bg-[#18a08e]/40 hover:bg-gray-100 flex items-center justify-center w-[50px] h-[40px] md:h-[50px]"
          >
            {/* Background Circle */}
            <svg
              className="absolute hidden md:block top-0 left-0"
              width="50"
              height="50"
            >
              <circle
                cx="25"
                cy="25"
                r={radius}
                stroke="#d1d5db"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="25"
                cy="25"
                r={radius}
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                animate={{ strokeDashoffset: dashOffset }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </svg>
            <Image
              src="/right.svg"
              alt="Next"
              width={24}
              height={24}
              className="relative z-10"
            />
          </button>
        </div>

        {/* Carousel */}
        <div className="flex justify-center">
          {isMobile ? (
            <div className="w-full z-10 max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-2xl relative z-10 overflow-hidden shadow-xl bg-white"
                >
                  <img
                    src={portfolioItems[current].image}
                    alt={portfolioItems[current].title}
                    className="w-full z-10 h-64 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                  {/* Centered Text */}
                  <div className="relative z-10 flex flex-col justify-center items-center h-[100px] px-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-xl">
                      {portfolioItems[current].title}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl max-w-xl mb-4 drop-shadow-md">
                      {portfolioItems[current].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="relative" style={{ width: VISIBLE_W }}>
              <div className="overflow-hidden">
                <motion.div
                  className="flex items-center"
                  style={{ width: trackWidth, gap: GAP }}
                  animate={{ x: translateX }}
                  transition={{ type: "spring", stiffness: 160, damping: 20 }}
                >
                  {portfolioItems.map((item, index) => {
                    const isCurrent = index === current;
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        animate={{
                          scale: isCurrent ? 1 : 0.9,
                          opacity: isCurrent ? 1 : 0.65,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 22,
                        }}
                        style={{ width: SLIDE_W, height: SLIDE_H }}
                        className={`relative rounded-2xl overflow-hidden ${
                          isCurrent ? "z-20" : "z-10"
                        }`}
                      >
                        {/* Background Image */}
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="absolute inset-0 p-10 w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                        {/* Centered Text */}
                        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-xl">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-lg md:text-xl max-w-xl drop-shadow-md">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
