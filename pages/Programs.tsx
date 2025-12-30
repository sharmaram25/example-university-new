import React from 'react';
import { useUniversity } from '../context/UniversityContext';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const Programs = () => {
  const { programs } = useUniversity();

  const groupedPrograms = programs.reduce((acc, program) => {
    if (!acc[program.category]) {
      acc[program.category] = [];
    }
    acc[program.category].push(program);
    return acc;
  }, {} as Record<string, typeof programs>);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-20"
    >
<div className="bg-[#1E2A44] text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5DFF] rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E3B23C] rounded-full filter blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 relative z-10"
        >
          World-Class Disciplines. <br/><span className="text-[#E3B23C]">Limitless Possibilities.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto relative z-10"
        >
          From the precision of Engineering to the creativity of Fashion Design, Example University offers over 50+ undergraduate and postgraduate programs designed to meet global industry standards.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {Object.entries(groupedPrograms).map(([category, categoryPrograms], index) => (
          <div key={category} className="mb-24">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold text-[#1E2A44] mb-10 border-l-8 border-[#2F5DFF] pl-6 flex items-center"
            >
              {category}
            </motion.h2>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categoryPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ProgramCard = ({ program }: { program: any }) => (
  <motion.div 
    variants={item}
    whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 flex flex-col h-full"
  >
    <div className="p-8 flex-grow">
      <div className="flex justify-between items-start mb-6">
        <span className="inline-block bg-indigo-50 text-[#2F5DFF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-indigo-100">
          {program.level}
        </span>
        <span className="text-gray-400 text-xs flex items-center font-medium bg-gray-50 px-2 py-1 rounded-full">
          <Clock className="w-3 h-3 mr-1" /> {program.duration}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-[#1E2A44] mb-3 leading-tight group-hover:text-[#2F5DFF] transition-colors">
        <Link to={`/program/${program.id}`}>{program.title}</Link>
      </h3>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {program.description}
      </p>
    </div>
      
    <div className="border-t border-gray-100 p-6 bg-gray-50/50">
      <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 font-medium">
            <BookOpen className="w-4 h-4 mr-2 text-[#E3B23C]" />
            <span>{program.subjects.length} Subjects</span>
          </div>
          <Link to={`/program/${program.id}`} className="text-[#2F5DFF] font-bold text-sm flex items-center group">
            View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
      </div>
    </div>
  </motion.div>
);