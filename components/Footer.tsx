'use client';

import { Instagram, Linkedin, Music, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                eya services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                Your trusted partner in health and wellness, delivering essential medical supplies with care and reliability.
              </p>
              
              {/* Made with love section */}
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span>Powered by oceanwaveweb.com</span>
              </div>
            </div>

            {/* Right Side - Navigation and Social */}
            <div className="flex flex-col items-start lg:items-end">
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-8 mb-8">
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  How it Works
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Services
                </a>
              </nav>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Music className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-100 hover:bg-purple-100 rounded-full flex items-center justify-center transition-colors group"
                >
                  <Globe className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}