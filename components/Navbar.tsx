import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ChevronRight, BookOpen, Building, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUniversity } from '../context/UniversityContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { programs } = useUniversity();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const staticPages = [
    { title: 'Admissions', path: '/admissions', type: 'Page' },
    { title: 'Alumni', path: '/alumni', type: 'Page' },
    { title: 'About Us', path: '/about', type: 'Page' },
    { title: 'Research', path: '/research', type: 'Page' },
    { title: 'Campus Life', path: '/campus-life', type: 'Page' },
    { title: 'Placements', path: '/placements', type: 'Page' },
    { title: 'Contact', path: '/contact', type: 'Page' },
    { title: 'Faculty', path: '/faculty', type: 'Page' },
  ];

  const filteredResults = searchQuery.length < 2 ? [] : [
    ...staticPages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({
      ...p,
      desc: undefined
    })),
    ...programs.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({
      title: p.title,
      path: '/programs',
      type: 'Program',
      desc: p.level
    }))
  ].slice(0, 6);

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Research', path: '/research' },
    { name: 'Campus', path: '/campus-life' },
    { name: 'Alumni', path: '/alumni' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#1E2A44]/90 backdrop-blur-xl shadow-lg py-3 border-b border-white/10' 
            : 'bg-[#1E2A44] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
<Link to="/" className="flex items-center gap-3 group z-50 shrink-0">
              <div className="relative w-10 h-10 flex items-center justify-center">
<svg viewBox="0 0 24 24" className="w-full h-full text-[#2F5DFF] fill-current transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(47,93,255,0.5)]">
                    <path d="M12 2L2 7V12C2 17.52 6.28 22.7 12 24C17.72 22.7 22 17.52 22 12V7L12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 20C9.33 20 7 18 6 15C6 13 12 13 12 13C12 13 18 13 18 15C17 18 14.67 20 12 20Z" />
                 </svg>
                 <Sparkles className="w-3 h-3 text-[#E3B23C] absolute top-0 right-0 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none font-display">EXAMPLE</span>
                <span className="text-[10px] tracking-[0.3em] text-[#E3B23C] font-semibold uppercase mt-1">University</span>
              </div>
            </Link>
<div className="hidden lg:flex items-center bg-white/5 rounded-full p-1.5 backdrop-blur-md border border-white/10 shadow-lg">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-[#2F5DFF]/80 to-[#3B82F6]/80 rounded-full shadow-[0_0_15px_rgba(47,93,255,0.4)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>
<div className="flex items-center gap-2 lg:gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <Link 
                to="/login"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1E2A44] font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all shadow-md"
              >
                <User className="w-4 h-4" />
                <span>Portal</span>
              </Link>
<button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
<AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#1E2A44] border-t border-gray-700 overflow-hidden absolute top-full left-0 w-full shadow-2xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all border border-transparent hover:border-white/5"
                  >
                    {link.name}
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-700/50">
                    <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-[#2F5DFF] px-4 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:bg-[#254EDA] transition-colors"
                    >
                     <User className="w-5 h-5"/> Student & Admin Portal
                    </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
<AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0F172A]/95 backdrop-blur-xl flex flex-col items-center pt-32 px-4"
          >
            <div className="w-full max-w-3xl relative">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-24 right-0 p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#E3B23C]" />
                <input 
                  ref={searchInputRef}
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-transparent focus:border-[#E3B23C] rounded-2xl py-6 pl-16 pr-6 text-2xl text-[#1E2A44] placeholder-gray-400 focus:outline-none transition-all shadow-2xl"
                />
              </motion.div>

              <div className="mt-12 space-y-4">
                {searchQuery.length > 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-2">Results</p>
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => handleSearchResultClick(result.path)}
                          className="w-full text-left p-4 rounded-xl hover:bg-white/10 flex items-center justify-between group transition-all border border-transparent hover:border-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-lg ${result.type === 'Page' ? 'bg-[#2F5DFF]/20 text-[#2F5DFF]' : 'bg-[#E3B23C]/20 text-[#E3B23C]'}`}>
                              {result.type === 'Page' ? <BookOpen className="w-5 h-5" /> : <Building className="w-5 h-5" />}
                            </div>
                            <div>
                              <h4 className="text-white text-lg font-medium group-hover:text-[#E3B23C] transition-colors">{result.title}</h4>
                              {result.desc && <p className="text-xs text-gray-500 mt-0.5">{result.desc}</p>}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </motion.button>
                      ))
                    ) : (
                      <div className="text-center py-10 text-gray-600">
                        No results found.
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-2">Popular Searches</p>
                    <div className="flex flex-wrap gap-3">
                      {['Computer Science', 'Scholarships', 'Hostel Fees', 'Exam Schedule'].map((item, i) => (
                         <button 
                           key={i}
                           onClick={() => setSearchQuery(item)}
                           className="px-5 py-2.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#E3B23C] hover:bg-[#E3B23C]/10 transition-all text-sm font-medium"
                         >
                           {item}
                         </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};