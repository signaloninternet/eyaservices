"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I contact Designure?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@Designure.com. We typically respond within 24 hours.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive fashion design and manufacturing services, including design consultation, pattern making, sample creation, bulk production, and brand packaging solutions.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we provide ongoing website maintenance services including updates, security monitoring, performance optimization, and technical support to ensure your site runs smoothly.",
  },
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "The timeline varies depending on project complexity. A basic website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you require a deposit for projects?",
    answer:
      "Yes, we typically require a 50% deposit to begin work on your project. The remaining balance is due upon project completion. We accept various payment methods for your convenience.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title */}
          <div className="flex flex-col h-full justify-center items-center relative">
            <div className="absolute z-0 -top-[90px] md:-top-[96px] -left-[250px] ">
              <img
                src="/faq.svg"
                alt="FAQ Background"
                className="w-full h-full z-0 object-cover opacity-20"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4 z-20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white z-20 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full z-20 px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                        {index === 0 && (
                          <>
                            <br />
                            <strong className="text-gray-900">
                              hello@Designure.com
                            </strong>{" "}
                            We typically respond within 24 hours.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
