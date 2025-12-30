import React from 'react';
import { Atom, Microscope, Cpu, Globe, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const Research = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-20"
    >
<div className="bg-[#0F172A] text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1E2A44] to-transparent opacity-50"></div>
          <div className="max-w-7xl mx-auto relative z-10">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#E3B23C] font-bold tracking-[0.2em] uppercase text-sm block mb-4"
              >
                Innovation Hub
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
              >
                Pushing Boundaries,<br/>Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F5DFF] to-[#3B82F6]">Impact.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-xl text-gray-400 max-w-2xl leading-relaxed"
              >
                  Example University is at the forefront of global research, addressing complex challenges in sustainability, artificial intelligence, and healthcare.
              </motion.p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<motion.div 
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
           >
               <StatsBox number="₹50 Cr+" label="Annual Research Grants" delay={0} />
               <StatsBox number="1,200+" label="Published Papers (2023)" delay={0.2} />
               <StatsBox number="150+" label="Patents Filed" delay={0.4} />
           </motion.div>
<div className="mb-24">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-3xl font-bold text-[#1E2A44] mb-12"
               >
                 Focus Areas
               </motion.h2>
               <motion.div 
                 variants={stagger}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
               >
                   <ResearchArea 
                        title="Artificial Intelligence & Ethics" 
                        desc="Developing responsible AI systems that solve real-world problems while adhering to ethical standards."
                        icon={Cpu}
                   />
                   <ResearchArea 
                        title="Sustainable Energy & Materials" 
                        desc="Innovating new battery technologies and biodegradable materials to combat climate change."
                        icon={Atom}
                   />
                   <ResearchArea 
                        title="Bio-Medical Engineering" 
                        desc="Bridging the gap between engineering and medicine to create advanced prosthetics and diagnostic tools."
                        icon={Microscope}
                   />
                   <ResearchArea 
                        title="Urban Planning & Smart Cities" 
                        desc="Designing the cities of tomorrow with integrated IoT infrastructure and green spaces."
                        icon={Globe}
                   />
               </motion.div>
           </div>
<motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group border border-white/10"
           >
               <div className="md:w-1/2 overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                     alt="Robotics Lab" 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                     loading="lazy"
                   />
               </div>
               <div className="md:w-1/2 p-12 flex flex-col justify-center text-white relative">
                   <div className="absolute top-0 right-0 p-12 opacity-10">
                     <Atom className="w-48 h-48 text-white" />
                   </div>
                   <span className="text-[#2F5DFF] font-bold mb-4 tracking-wider uppercase text-sm">FEATURED PROJECT</span>
                   <h3 className="text-4xl font-bold mb-6">Project Atlas: Autonomous Disaster Relief</h3>
                   <p className="text-gray-300 mb-8 leading-relaxed text-lg z-10">
                       Led by the School of Robotics, Project Atlas aims to deploy swarms of autonomous drones for search and rescue operations in disaster-struck zones. The project has received funding from global humanitarian organizations.
                   </p>
                   <button className="flex items-center text-[#E3B23C] font-bold text-lg hover:text-white transition-colors group/btn w-fit">
                       Read Full Paper <ArrowUpRight className="ml-2 h-5 w-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                   </button>
               </div>
           </motion.div>

       </div>
    </motion.div>
  );
};

const StatsBox = ({ number, label, delay }: { number: string, label: string, delay: number }) => (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center hover:bg-white transition-all duration-300"
    >
        <h3 className="text-5xl font-extrabold text-[#2F5DFF] mb-4">{number}</h3>
        <p className="text-gray-600 font-semibold text-lg">{label}</p>
    </motion.div>
);

const ResearchArea = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
    <motion.div 
      variants={fadeInUp}
      whileHover={{ y: -5, borderColor: '#2F5DFF' }}
      className="flex items-start p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200"
    >
        <div className="bg-indigo-50 p-4 rounded-xl mr-6 text-[#2F5DFF] shrink-0">
            <Icon className="h-8 w-8" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-[#1E2A44] mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);
