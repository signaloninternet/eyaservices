"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What products does Eya Supply offer?",
    answer:
      "We provide a wide range of essential health products, including emergency kits, adult pampers, Ensure milk, medical gloves, sanitizing wipes, underpads, and wheelchairs. All products are carefully sourced to ensure quality and reliability.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes! All our products are available for same-day delivery, subject to availability and order time. Please place your order early in the day to ensure prompt delivery.",
  },
  {
    question: "How can I place an order with Eya Supply?",
    answer:
      "You can place an order through our website or by contacting us directly via phone or email. Our team is always ready to assist you in selecting the right health products for your needs.",
  },
  {
    question: "Do you sell in bulk or only for individuals?",
    answer:
      "We cater to both individual and bulk orders. Whether you need supplies for personal use, healthcare facilities, or businesses, Eya Supply can accommodate your requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods, including credit/debit cards, bank transfers, and secure online payment options. Please contact us if you have specific payment needs.",
  },
  {
    question: "Can I get a custom solution for my healthcare needs?",
    answer:
      "Absolutely. If you have specific requirements, our team will work with you to provide tailored health supply solutions that fit your needs.",
  },
  {
    question: "How can I contact Eya Supply?",
    answer:
      "You can reach us by phone at 786-343-6772 or by email at eyasupply@gmail.com. Alternatively, you can fill out the contact form on our website, and we’ll get back to you within 24 hours.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="faq">
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
          <div className="space-y-4 font-creato z-20">
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
