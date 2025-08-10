'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function BetaAccessSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 text-9xl font-bold text-purple-600/20 transform -rotate-12">✦</div>
        <div className="absolute top-20 right-20 text-9xl font-bold text-blue-600/20 transform rotate-12">✦</div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Beta access now!
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="full name"
              className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="write your message...."
              rows={6}
              className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform  -105"
          >
            Join the Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
}