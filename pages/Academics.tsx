import React from 'react';
import { useUniversity } from '../context/UniversityContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, Gavel, Palette, LineChart, Zap, Atom, BookOpen, Building, 
  ArrowRight, GraduationCap, Briefcase, Library 
} from 'lucide-react';

const getSchoolStyle = (schoolName: string) => {
  if (schoolName.includes('Engineering')) return { icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' };
  if (schoolName.includes('Business')) return { icon: LineChart, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' };
  if (schoolName.includes('Commerce')) return { icon: Briefcase, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' };
  if (schoolName.includes('Humanities')) return { icon: Library, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' };
  if (schoolName.includes('Design')) return { icon: Palette, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' };
  if (schoolName.includes('Sciences')) return { icon: Atom, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' };
  if (schoolName.includes('Architecture') || schoolName.includes('Planning')) return { icon: Building, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' };
  if (schoolName.includes('Computer')) return { icon: Cpu, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' };
  if (schoolName.includes('Law')) return { icon: Gavel, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' };
  
  return { icon: GraduationCap, color: 'text-[#2F5DFF]', bg: 'bg-indigo-50', border: 'border-indigo-100' };
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Academics = () => {
  const { programs } = useUniversity();

  const schools = programs.reduce((acc, program) => {
    if (!acc[program.category]) {
      acc[program.category] = {
        name: program.category,
        programs: []
      };
    }
    acc[program.category].programs.push(program);
    return acc;
  }, {} as Record<string, { name: string, programs: typeof programs }>);

  const schoolKeys = Object.keys(schools).sort();

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-20"
    >
<div className="bg-[#1E2A44] relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F5DFF] rounded-full blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E3B23C] rounded-full blur-[120px] opacity-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Academic <span className="text-[#E3B23C]">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our diverse range of schools and programs designed to foster innovation, critical thinking, and global leadership.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 gap-12">
          {schoolKeys.map((schoolKey) => {
            const school = schools[schoolKey];
            const style = getSchoolStyle(school.name);
            const Icon = style.icon;
            
            const byLevel = {
              Undergraduate: school.programs.filter(p => p.level === 'Undergraduate'),
              Postgraduate: school.programs.filter(p => p.level === 'Postgraduate'),
              'Doctoral & Research': school.programs.filter(p => p.level.includes('Doctor') || p.level === 'Doctoral'),
              'Diploma & Certificate': school.programs.filter(p => p.level.includes('Diploma') || p.level === 'Certificate')
            };

            return (
              <motion.div 
                key={school.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
<div className={`p-6 rounded-2xl ${style.bg} ${style.color} shrink-0`}>
                    <Icon className="w-10 h-10" />
                  </div>
<div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#1E2A44] mb-2">{school.name}</h2>
                            <p className="text-gray-500 max-w-2xl">
                            World-class curriculum, expert faculty, and industry-aligned pedagogy.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {school.programs.length} Programs
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                      {Object.entries(byLevel).map(([level, progs]) => (
                        progs.length > 0 && (
                          <div key={level}>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center">
                              {level}
                              <span className="ml-3 h-px bg-gray-100 flex-grow"></span>
                            </h3>
                            <ul className="space-y-3">
                              {progs.map(prog => (
                                <li key={prog.id}>
                                  <Link 
                                    to={`/program/${prog.id}`}
                                    className="group flex items-start text-[#1E2A44] hover:text-[#2F5DFF] transition-colors"
                                  >
                                    <ArrowRight className="w-4 h-4 mt-1 mr-2 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 text-[#2F5DFF]" />
                                    <span className="font-medium text-sm md:text-base leading-snug">{prog.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
<motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#1E2A44] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <span className="text-[#E3B23C] font-bold tracking-widest uppercase text-sm mb-4 block">Innovation & Discovery</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Research that Matters</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
              Our Centers of Excellence are dedicated to solving global challenges. Students and faculty collaborate on groundbreaking projects funded by industry giants.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Link to="/research" className="inline-flex items-center px-8 py-4 bg-white text-[#1E2A44] font-bold rounded-full hover:bg-gray-100 transition-colors">
                  Visit Research Centers
               </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};