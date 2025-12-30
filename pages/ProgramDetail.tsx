import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUniversity } from '../context/UniversityContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Award, BookOpen, CheckCircle, ArrowRight, Download, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { programs } = useUniversity();
  
  const [openSection, setOpenSection] = useState<string | null>("Year 1");

  const program = programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1E2A44] mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-[#2F5DFF] font-medium hover:underline">Browse all programs</Link>
        </div>
      </div>
    );
  }

  const subjectsByGroup: Record<string, typeof program.subjects> = {};
  
  program.subjects.forEach(sub => {
    let groupKey = "";
    if (typeof sub.semester === 'number') {
        groupKey = `Year ${Math.ceil(sub.semester / 2)}`;
    } else {
        groupKey = sub.semester.toString();
        if(groupKey === 'Ongoing') groupKey = 'Doctoral Research';
    }

    if (!subjectsByGroup[groupKey]) subjectsByGroup[groupKey] = [];
    subjectsByGroup[groupKey].push(sub);
  });

  const toggleSection = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  const sortedKeys = Object.keys(subjectsByGroup).sort((a, b) => {
      if (a.startsWith('Year') && b.startsWith('Year')) {
          return parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]);
      }
    return 0;
  });

  if (openSection === "Year 1" && !sortedKeys.includes("Year 1") && sortedKeys.length > 0) {
      setOpenSection(sortedKeys[0]);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-20"
    >
<div className="bg-[#1E2A44] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F5DFF] rounded-full filter blur-[120px] opacity-20 translate-x-1/4 -translate-y-1/4"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/programs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors text-sm font-medium">
             <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Programs
          </Link>
          <div className="flex flex-wrap gap-3 mb-6">
             <span className="bg-[#E3B23C] text-[#1E2A44] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{program.category}</span>
             <span className="bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{program.level}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{program.title}</h1>
          
          <div className="flex flex-wrap gap-8 text-gray-300 font-medium text-sm md:text-base">
             <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-[#2F5DFF]" /> {program.duration}</div>
             <div className="flex items-center"><BookOpen className="w-5 h-5 mr-2 text-[#2F5DFF]" /> {program.subjects.length} Modules</div>
             <div className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-[#2F5DFF]" /> Next Intake: Aug 2024</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-12">
<section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#1E2A44] mb-4">Program Overview</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {program.description} 
                    </p>
                    
                    {program.pedagogy && (
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-6">
                            <h3 className="font-bold text-[#1E2A44] mb-2 flex items-center">
                                <GraduationCap className="w-5 h-5 mr-2 text-[#2F5DFF]" /> Pedagogy
                            </h3>
                            <p className="text-gray-700 font-medium">{program.pedagogy}</p>
                        </div>
                    )}

                    <h3 className="text-lg font-bold text-[#1E2A44] mb-3">Key Outcomes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {['Industry-ready skills', 'Global perspective', 'Research opportunities', 'Hands-on projects'].map((item, i) => (
                            <li key={i} className="flex items-center text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </section>
<section>
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl font-bold text-[#1E2A44]">Curriculum & Syllabus</h2>
                        <button className="text-[#2F5DFF] font-bold text-sm flex items-center hover:underline">
                            <Download className="w-4 h-4 mr-2" /> Download Brochure
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        {sortedKeys.map((groupKey) => (
                            <div key={groupKey} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all">
                                <button 
                                    onClick={() => toggleSection(groupKey)}
                                    className="w-full bg-gray-50 px-6 py-5 border-b border-gray-100 flex justify-between items-center hover:bg-gray-100 transition-colors"
                                >
                                    <h3 className="font-bold text-[#1E2A44] text-lg">{groupKey}</h3>
                                    <div className="flex items-center text-gray-500">
                                        <span className="text-xs font-bold uppercase mr-3">{subjectsByGroup[groupKey].length} Modules</span>
                                        {openSection === groupKey ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {openSection === groupKey && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="divide-y divide-gray-100">
                                                {subjectsByGroup[groupKey].map(sub => (
                                                    <div key={sub.code} className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors">
                                                        <div className="mb-2 md:mb-0">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-xs font-mono font-bold text-[#2F5DFF] bg-blue-50 px-2 py-1 rounded w-20 text-center shrink-0">{sub.code}</span>
                                                                <div>
                                                                    <span className="font-medium text-gray-800 block">{sub.name}</span>
                                                                    <span className="text-xs text-gray-400">
                                                                        {typeof sub.semester === 'number' ? `Semester ${sub.semester}` : sub.semester}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500 ml-20 md:ml-0">
                                                            <span className="mr-4 bg-gray-100 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">{sub.credits} Credits</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
<div className="space-y-8">
<div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                    <h3 className="text-xl font-bold text-[#1E2A44] mb-2">Ready to Apply?</h3>
                    <p className="text-gray-500 mb-6 text-sm">Applications for the upcoming academic year are now open.</p>
                    
                    <div className="space-y-4">
                        <Link to="/apply" className="block w-full text-center py-4 bg-[#E3B23C] text-[#1E2A44] font-bold rounded-xl hover:bg-[#d4a025] transition-colors shadow-md">
                            Start Application
                        </Link>
                        <Link to="/contact" className="block w-full text-center py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors">
                            Request Information
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="font-bold text-[#1E2A44] text-sm mb-4">Admissions Contact</h4>
                        <div className="text-sm text-gray-600 space-y-2">
                            <p>+1 (555) 123-4567</p>
                            <p>admissions@example.univ</p>
                        </div>
                    </div>
                </div>
<div className="bg-[#1E2A44] p-8 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <Award className="w-10 h-10 text-[#E3B23C] mb-4 relative z-10" />
                    <h3 className="text-lg font-bold mb-2 relative z-10">World-Class Facilities</h3>
                    <p className="text-gray-300 text-sm relative z-10">
                        Students in this program have exclusive access to the Innovation Lab and 24/7 Digital Library resources.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </motion.div>
  );
};