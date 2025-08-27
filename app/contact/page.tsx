"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get("product");
    if (product) {
      setSelectedProduct(decodeURIComponent(product));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwjzkkd", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setSelectedProduct(""); // reset product field
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main
      className="relative min-h-screen text-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <Header />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Medical Supply Experts
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              EYA Supply
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your trusted partner for medical supplies and healthcare products.
            Get personalized quotes and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT SIDE - INFO */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 text-white shadow-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent mb-2">
                Get A Quote Today!
              </h2>
            </div>

            <h3 className="text-xl font-semibold mb-8 text-white/90">
              EYA Supply - Medical Distribution Services
            </h3>

            <div className="space-y-8 text-sm leading-relaxed">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-teal-300 mb-4 text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  Our Services
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    Medical Equipment & Supplies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    Nutritional Products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    Personal Care Items
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                    Healthcare Accessories
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="font-bold text-teal-300 mb-4 text-base flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  Why Choose EYA Supply
                </h4>
                <div className="space-y-3 text-white/80">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Quality Assured:</strong>{" "}
                      All products sourced from trusted manufacturers
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Fast Delivery:</strong>{" "}
                      Quick and reliable shipping across regions
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">
                        Competitive Pricing:
                      </strong>{" "}
                      Best rates for bulk and individual orders
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <strong className="text-white">Expert Support:</strong>{" "}
                      Knowledgeable team for product selection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 text-white border border-white/10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent mb-2">
                Request Product Information
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  required
                  className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
              />

              <input
                type="text"
                name="organization"
                placeholder="Hospital/Clinic/Organization Name"
                className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
              />

              <input
                type="text"
                name="product"
                placeholder="Product of Interest"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="inquiry_type"
                  required
                  className="w-full border border-white/20 bg-white/10 text-white rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
                >
                  <option value="" className="bg-slate-800">
                    Select Inquiry Type *
                  </option>
                  <option value="pricing" className="bg-slate-800">
                    Pricing Information
                  </option>
                  <option value="bulk_order" className="bg-slate-800">
                    Bulk Order Inquiry
                  </option>
                  <option value="product_demo" className="bg-slate-800">
                    Product Demonstration
                  </option>
                  <option value="technical_support" className="bg-slate-800">
                    Technical Support
                  </option>
                  <option value="partnership" className="bg-slate-800">
                    Partnership Opportunity
                  </option>
                </select>

                <input
                  type="number"
                  name="quantity"
                  placeholder="Estimated Quantity"
                  min="1"
                  className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 transition-all"
                />
              </div>

              <textarea
                name="message"
                placeholder="Additional Details or Special Requirements"
                rows={4}
                className="w-full border border-white/20 bg-white/10 text-white placeholder-white/60 rounded-xl p-4 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/20 resize-none transition-all"
              />

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-sm text-white/80 mb-3 font-medium">
                  Preferred Contact Method:
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_preference"
                      value="phone"
                      required
                      className="text-teal-300 focus:ring-teal-300"
                    />
                    <span className="text-white/90">Call Me</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_preference"
                      value="email"
                      className="text-teal-300 focus:ring-teal-300"
                    />
                    <span className="text-white/90">Email Me</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contact_preference"
                      value="whatsapp"
                      className="text-teal-300 focus:ring-teal-300"
                    />
                    <span className="text-white/90">WhatsApp</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl p-4 mt-8 font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {status === "submitting" ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>

            {/* Feedback messages */}
            {status === "success" && (
              <p className="mt-4 text-green-400 font-medium">
                ✅ Thank you! Your inquiry has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-400 font-medium">
                ❌ Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
