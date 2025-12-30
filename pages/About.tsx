import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, Calendar, Users } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-20"
    >
<div className="bg-[#1E2A44] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5DFF] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10 tracking-tight"
        >
          About Example University
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 relative z-10 max-w-2xl mx-auto"
        >
          A Legacy of Excellence since 1990. Fostering innovation, integrity, and impact.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
        >
            <div className="md:w-1/3 bg-[#E3B23C] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#1E2A44] opacity-10 mix-blend-multiply pattern-grid-lg"></div>
                <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Founder" 
                    className="w-40 h-40 rounded-full border-4 border-white shadow-2xl mb-6 object-cover z-10"
                />
                <h3 className="text-2xl font-bold text-[#1E2A44] z-10">Dr. Eleanor Vance</h3>
                <p className="text-[#1E2A44] font-medium z-10 opacity-80 uppercase tracking-widest text-xs mt-1">Chancellor & Founder</p>
            </div>
            <div className="md:w-2/3 p-10 md:p-14 flex flex-col justify-center relative">
                <Quote className="absolute top-10 left-10 text-gray-100 w-24 h-24 -z-0" />
                <h2 className="text-2xl font-bold text-[#1E2A44] mb-6 relative z-10">From the Founders' Desk</h2>
                <p className="text-gray-600 text-lg leading-relaxed italic mb-6 relative z-10">
                    "When we laid the first stone of Example University in 1990, our vision was not just to build classrooms, but to build character. We dreamt of an institution where technology meets humanity, where innovation serves society. Today, looking at our 15,000+ strong community, I see that dream living and breathing in every hallway."
                </p>
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                    "We are committed to creating a future where our students are not just job seekers, but job creators and global thought leaders."
                </p>
                <div className="mt-8 relative z-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-50" />
                </div>
            </div>
        </motion.section>
<section className="mb-24">
            <div className="text-center mb-16">
                <span className="text-[#2F5DFF] font-bold tracking-wider uppercase text-sm">History</span>
                <h2 className="text-4xl font-bold text-[#1E2A44] mt-2">The Roadmap of Innovation</h2>
            </div>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
                <div className="space-y-12">
                    <TimelineRow year="1990" title="The Inception" desc="Established as 'Example Institute of Technology' with just two departments: Civil and Mechanical Engineering." align="left" />
                    <TimelineRow year="2005" title="University Status" desc="Granted full University status by the government. Expanded to include the School of Business and School of Arts." align="right" />
                    <TimelineRow year="2015" title="Global Expansion" desc="Signed strategic MOUs with 20+ international universities including MIT and Cambridge for student exchange programs." align="left" />
                    <TimelineRow year="2023" title="Innovation Hub" desc="Inaugurated the state-of-the-art Research Park and NextGen AI Lab to foster deep tech startups." align="right" />
                </div>
            </div>
        </section>
<section className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1E2A44] mb-12 text-center"
          >
            Academic Leadership
          </motion.h2>
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <LeadershipCard 
              name="Prof. David Chen" 
              role="Vice-Chancellor" 
              desc="Ph.D. in Computer Science from Stanford. Former Director at Google Research."
              img="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <LeadershipCard 
              name="Dr. Sarah Jenkins" 
              role="Dean of Academics" 
              desc="Renowned economist and author of 'The Future of Fiscal Policy'. Oxford Alumna."
              img="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <LeadershipCard 
              name="Dr. Vikram Singh" 
              role="Dean of Student Affairs" 
              desc="Pioneering physicist dedicated to student welfare and holistic development."
              img="https://randomuser.me/api/portraits/men/64.jpg"
            />
          </motion.div>
        </section>
<motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#1E2A44] p-12 md:p-20 rounded-3xl shadow-2xl text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Vision 2030</h2>
          <p className="text-xl md:text-3xl italic font-light leading-relaxed max-w-4xl mx-auto relative z-10 text-gray-200">
            "To become a Top 100 Global University driven by AI-integrated research, sustainable development, and inclusive education for all."
          </p>
          <div className="mt-12 flex justify-center gap-8 relative z-10">
              <div className="flex flex-col items-center">
                  <Award className="w-10 h-10 text-[#E3B23C] mb-2" />
                  <span className="text-sm font-bold uppercase tracking-widest">Excellence</span>
              </div>
              <div className="flex flex-col items-center">
                  <Users className="w-10 h-10 text-[#2F5DFF] mb-2" />
                  <span className="text-sm font-bold uppercase tracking-widest">Community</span>
              </div>
              <div className="flex flex-col items-center">
                  <Calendar className="w-10 h-10 text-green-500 mb-2" />
                  <span className="text-sm font-bold uppercase tracking-widest">Sustainability</span>
              </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

const TimelineRow = ({ year, title, desc, align }: { year: string, title: string, desc: string, align: 'left' | 'right' }) => (
    <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`flex flex-col md:flex-row items-center justify-between w-full ${align === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
        <div className="w-full md:w-5/12"></div>
        <div className="w-8 h-8 bg-[#2F5DFF] rounded-full border-4 border-white shadow-lg z-10 my-4 md:my-0"></div>
        <div className="w-full md:w-5/12 bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-[#2F5DFF] transition-colors text-center md:text-left">
            <span className="text-[#2F5DFF] font-black text-3xl block mb-2">{year}</span>
            <h3 className="text-xl font-bold text-[#1E2A44] mb-2">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const LeadershipCard = ({ name, role, desc, img }: { name: string, role: string, desc: string, img: string }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="h-64 overflow-hidden relative">
       <div className="absolute inset-0 bg-[#1E2A44] opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
       <img src={img} alt={name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-[#1E2A44] mb-1">{name}</h3>
      <p className="text-[#2F5DFF] font-bold uppercase text-xs tracking-wider mb-4">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);
