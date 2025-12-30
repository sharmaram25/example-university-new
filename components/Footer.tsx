import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white tracking-tight">EXAMPLE</span>
              <span className="text-xs tracking-widest text-[#E3B23C]">UNIVERSITY</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Innovating the Future, Preserving Excellence. Join us in shaping the world through technology and leadership.
            </p>
          </div>
<div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#2F5DFF] transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-[#2F5DFF] transition-colors">Academics</Link></li>
              <li><Link to="/programs" className="hover:text-[#2F5DFF] transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-[#2F5DFF] transition-colors">Admissions</Link></li>
              <li><Link to="/alumni" className="hover:text-[#2F5DFF] transition-colors">Alumni</Link></li>
              <li><Link to="/research" className="hover:text-[#2F5DFF] transition-colors">Research</Link></li>
            </ul>
          </div>
<div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#2F5DFF] shrink-0" />
                <span>123 Innovation Drive,<br/>Tech City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#2F5DFF] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#2F5DFF] shrink-0" />
                <span>admissions@example.univ</span>
              </li>
            </ul>
          </div>
<div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#2F5DFF] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#2F5DFF] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#2F5DFF] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#2F5DFF] transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Example University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
