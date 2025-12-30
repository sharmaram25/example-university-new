import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1E2A44] mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
<div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about admissions, campus life, or programs? Reach out to us. Our dedicated team is here to assist you on your journey.
            </p>
            <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#2F5DFF]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Campus Address</h3>
                    <p className="text-gray-600 mt-1">123 Knowledge Park III,<br/>Greater Noida, Delhi NCR - 201306, India</p>
                </div>
            </div>
            <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#2F5DFF]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+91 11 2345 6789<br/>Mon-Fri, 9am - 5pm IST</p>
                </div>
            </div>
            <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#2F5DFF]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">admissions@example.univ<br/>info@example.univ</p>
                </div>
            </div>
          </div>
<div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-[#1E2A44] mb-6">Send us a Message</h3>
              <form className="space-y-4">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all" 
                        placeholder="John Doe" 
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all" 
                        placeholder="john@example.com" 
                      />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                      <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all">
                          <option>General Inquiry</option>
                          <option>Admissions</option>
                          <option>Research Partnerships</option>
                          <option>Careers</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                      <textarea 
                        rows={4} 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all" 
                        placeholder="How can we help you?"
                      ></textarea>
                  </div>
                  <button type="button" className="w-full bg-[#2F5DFF] text-white font-bold py-3.5 rounded-lg hover:bg-blue-600 transition-colors flex justify-center items-center shadow-lg shadow-blue-500/20">
                      <Send className="h-4 w-4 mr-2" /> Send Message
                  </button>
              </form>
          </div>
        </div>
<div className="bg-gray-200 rounded-xl h-[400px] w-full flex items-center justify-center relative overflow-hidden group shadow-inner border border-gray-300">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
             <div className="relative z-10 bg-white p-4 rounded-xl shadow-xl text-center border border-gray-100">
                 <p className="font-bold text-[#1E2A44] text-lg">Interactive Map</p>
                 <p className="text-xs text-gray-500 font-medium">Click to explore campus locations</p>
             </div>
        </div>

      </div>
    </div>
  );
};