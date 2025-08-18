"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock } from "lucide-react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen w-screen bg-[#225867] mx-auto rounded-3xl max-w-[1200px] relative flex items-center justify-center p-4 sm:p-6 lg:p-8">

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Call to Action */}
        <div className="text-white space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Order
              Your{" "}
              <span className="text-emerald-400">
                Health
                <br className="hidden sm:block" />
                Essentials
              </span>
              ?
            </h1>
            <p className="text-base font-creato sm:text-lg text-gray-300 max-w-md">
              Get in touch with us today. We're here to help with all your
              health supply needs, whether for personal use or business
              requirements.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 font-creato sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Call us now</p>
                <p className="text-lg sm:text-xl font-semibold">786 343 6772</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Email us</p>
                <p className="text-lg sm:text-xl font-semibold">
                  elbardezgarcia@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">
                  Business Hours
                </p>
                <p className="text-lg sm:text-xl font-semibold">
                  Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-6PM
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex font-creato flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full">
              Call Now
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full">
              Email Us
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full">
              Live Chat
            </Button>
          </div>
        </div>

        {/* Right Side - Quote Form with Glassmorphic Effect */}
        <div className="relative z-20 font-creato">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-2 md:p-8 shadow-2xl">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Get a Quote Today
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Organization (Optional)
                      </label>
                      <Input
                        type="text"
                        placeholder="Company or organization"
                        value={formData.organization}
                        onChange={(e) =>
                          handleInputChange("organization", e.target.value)
                        }
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("serviceType", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency-kits">
                          Emergency Kits
                        </SelectItem>
                        <SelectItem value="adult-care">
                          Adult Care Products
                        </SelectItem>
                        <SelectItem value="medical-supplies">
                          Medical Supplies
                        </SelectItem>
                        <SelectItem value="health-monitoring">
                          Health Monitoring
                        </SelectItem>
                        <SelectItem value="bulk-orders">Bulk Orders</SelectItem>
                        <SelectItem value="custom-solutions">
                          Custom Solutions
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your health supply needs, preferred delivery timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full min-h-[100px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg"
                  >
                    ✈️ Send Message & Get Quote
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our terms of service.
                    We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
