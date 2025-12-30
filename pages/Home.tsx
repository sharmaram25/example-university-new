import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Trophy, Users, Globe, Building, Calendar, Quote, Sparkles, Zap, Cpu, Palette, Gavel, LineChart, CheckCircle } from 'lucide-react';
import { useUniversity } from '../context/UniversityContext';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Home = () => {
  const { notices } = useUniversity();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white overflow-hidden"
    >
<div className="fixed top-[76px] left-0 w-full z-30 pointer-events-none">
</div>
<section className="relative h-screen flex items-center justify-center bg-[#1E2A44] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#1E2A44] via-[#0F172A] to-[#1E2A44]"></div>
<motion.div 
          style={{ y: heroY, opacity: 0.4 }}
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        >
             <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="University Campus"
                className="w-full h-full object-cover"
                loading="eager"
                width="1950"
                height="1200"
             />
        </motion.div>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44] via-[#1E2A44]/50 to-transparent"></div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center h-full pt-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#E3B23C] text-xs md:text-sm font-bold mb-6 md:mb-8 tracking-widest uppercase shadow-lg"
          >
            <Trophy className="w-3 h-3 md:w-4 md:h-4 text-[#E3B23C]" /> Ranked #1 for Innovation
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 md:mb-8 leading-[1.1] break-words"
          >
            Innovating the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F5DFF] via-[#60A5FA] to-[#2F5DFF] bg-[length:200%_auto] animate-gradient">Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-2 text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4"
          >
            Join a community of 15,000+ visionaries shaping the world through cutting-edge technology and principled leadership.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full px-4"
          >
            <Link to="/programs" className="group relative px-6 py-3 md:px-10 md:py-5 bg-[#E3B23C] text-[#1E2A44] font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(227,178,60,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(227,178,60,0.5)] w-full sm:w-auto text-center flex justify-center items-center text-lg">
              <span className="relative z-10 flex items-center">Explore Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/></span>
            </Link>
            <Link to="/contact" className="px-6 py-3 md:px-10 md:py-5 rounded-full border border-white/20 bg-white/5 text-white font-bold backdrop-blur-sm hover:bg-white hover:text-[#1E2A44] transition-all hover:scale-105 w-full sm:w-auto text-center text-lg">
              Virtual Campus Tour
            </Link>
          </motion.div>
        </motion.div>
<motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
            <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>
<div className="bg-[#0F172A] text-white py-3 overflow-hidden border-y border-gray-800 relative z-20 shadow-md">
        <div className="flex whitespace-nowrap animate-marquee">
           <div className="flex space-x-12 px-4">
             {notices.map((notice) => (
               <span key={notice.id} className="text-sm font-medium text-gray-300 flex items-center hover:text-[#E3B23C] transition-colors cursor-pointer group">
                 <span className="w-1.5 h-1.5 bg-[#E3B23C] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                 {notice.text} <span className="text-gray-600 mx-3">|</span> <span className="text-gray-500 font-mono text-xs">{notice.date}</span>
               </span>
             ))}
           </div>
<div className="flex space-x-12 px-4" aria-hidden="true">
             {notices.map((notice) => (
               <span key={`dup-${notice.id}`} className="text-sm font-medium text-gray-300 flex items-center hover:text-[#E3B23C] transition-colors cursor-pointer group">
                 <span className="w-1.5 h-1.5 bg-[#E3B23C] rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                 {notice.text} <span className="text-gray-600 mx-3">|</span> <span className="text-gray-500 font-mono text-xs">{notice.date}</span>
               </span>
             ))}
           </div>
        </div>
        <style>{`
          .animate-marquee {
            display: flex;
            animation: marquee 50s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
<section className="bg-white relative z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100/0 md:divide-gray-100">
            <StatsCard icon={Sparkles} number="98%" label="Placement Rate" color="text-[#E3B23C]" />
            <StatsCard icon={Users} number="150+" label="Research Patents" color="text-[#2F5DFF]" />
            <StatsCard icon={Globe} number="45" label="Global Partners" color="text-purple-500" />
            <StatsCard icon={Building} number="500+" label="Acre Smart Campus" color="text-green-500" />
          </div>
        </div>
      </section>
<section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
                <span className="text-[#2F5DFF] font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44] mt-2">Why Example University?</h2>
            </div>
            
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10"
            >
                <FeatureBox 
                    title="Industry Integrated" 
                    desc="Our curriculum is co-designed with industry leaders to ensure you learn what matters now."
                    icon={Building}
                />
                <FeatureBox 
                    title="Global Exposure" 
                    desc="Semester exchange programs with 45+ universities across Europe, USA, and Asia."
                    icon={Globe}
                />
                <FeatureBox 
                    title="Research Driven" 
                    desc="Access to 12 research centers and $5M in annual student research grants."
                    icon={Cpu}
                />
            </motion.div>
        </div>
      </section>
<section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44]">Our Schools</h2>
                    <p className="text-gray-500 mt-2 text-lg">Five centers of excellence, one vision.</p>
                </div>
                <Link to="/academics" className="flex items-center text-[#2F5DFF] font-bold hover:underline">
                    View All Faculties <ArrowRight className="ml-2 w-5 h-5"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <SchoolCard title="Computer Science & AI" icon={Cpu} color="bg-blue-50 text-blue-600" />
                <SchoolCard title="Engineering & Robotics" icon={Zap} color="bg-orange-50 text-orange-600" />
                <SchoolCard title="Global Business" icon={LineChart} color="bg-green-50 text-green-600" />
                <SchoolCard title="Law & Governance" icon={Gavel} color="bg-red-50 text-red-600" />
                <SchoolCard title="Digital Arts & Design" icon={Palette} color="bg-purple-50 text-purple-600" />
            </div>
        </div>
      </section>
<section className="py-16 md:py-24 bg-[#1E2A44] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#2F5DFF]/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          >
            <motion.div variants={fadeInUp} className="md:w-1/2">
              <span className="text-[#E3B23C] font-bold tracking-wider uppercase text-sm mb-2 block">Innovation Hub</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Where Ideas Become Impact.</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                From the NextGen AI Lab to our Sustainable Energy Center, our campus is a living laboratory. Students don't just learn about the future; they build it here.
              </p>
              <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-200"><CheckCircle className="w-5 h-5 text-[#E3B23C] mr-3"/> 24/7 Access to Labs</li>
                  <li className="flex items-center text-gray-200"><CheckCircle className="w-5 h-5 text-[#E3B23C] mr-3"/> Student Patent Support</li>
                  <li className="flex items-center text-gray-200"><CheckCircle className="w-5 h-5 text-[#E3B23C] mr-3"/> Industry Mentorship</li>
              </ul>
              <Link to="/research" className="inline-flex items-center px-8 py-4 bg-white text-[#1E2A44] font-bold rounded-full hover:bg-gray-100 transition-colors">
                Explore Research
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp} className="md:w-1/2 relative w-full">
               <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-64 md:h-[450px] w-full bg-gray-800">
                    <img 
                        src="https://images.unsplash.com/photo-1581093588401-fbb07362f705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Research Lab" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-[#2F5DFF] p-6 rounded-xl shadow-lg hidden md:block z-20">
                   <p className="text-3xl font-bold text-white">150+</p>
                   <p className="text-sm text-blue-200">Patents Filed</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
<section className="py-12 bg-white border-b border-gray-100 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Trusted by Global Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  {['GOOGLE', 'MICROSOFT', 'AMAZON', 'DELOITTE', 'GOLDMAN SACHS', 'TESLA'].map(brand => (
                      <span key={brand} className="text-xl md:text-2xl font-black text-[#1E2A44] cursor-default select-none">{brand}</span>
                  ))}
              </div>
          </div>
      </section>
<section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44] mb-4">Student Voices</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from the people who make Example University extraordinary.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard 
                    text="The practical exposure at Example University is unmatched. The AI lab allowed me to publish my first research paper in my second year."
                    author="Priya Patel"
                    course="B.Tech CSE"
                    image="https://randomuser.me/api/portraits/women/44.jpg"
                />
                <TestimonialCard 
                    text="Campus life is vibrant and inclusive. From the debate club to the sports complex, there is always something happening."
                    author="James Carter"
                    course="MBA"
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <TestimonialCard 
                    text="The faculty here are not just teachers, they are mentors. They guided me to secure an internship at Google."
                    author="Sofia Rodriguez"
                    course="B.Des"
                    image="https://randomuser.me/api/portraits/women/68.jpg"
                />
            </div>
        </div>
      </section>
<section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
              >
                  <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44]">Campus Events</h2>
                      <p className="text-gray-500 mt-2 text-lg">Experience the energy of our community.</p>
                  </div>
                  <Link to="/campus-life" className="group flex items-center text-[#2F5DFF] font-bold text-lg">
                    View Calendar <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform"/>
                  </Link>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <EventCard date="Oct 25" month="2024" title="Annual Tech Symposium" loc="Main Auditorium" tag="Tech" />
                  <EventCard date="Nov 05" month="2024" title="Inter-University Sports Meet" loc="Sports Complex" tag="Sports" />
                  <EventCard date="Nov 12" month="2024" title="Guest Lecture: Future of FinTech" loc="Business School Hall" tag="Business" />
              </div>
          </div>
      </section>
<section className="bg-[#1E2A44] py-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to define your future?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link to="/apply" className="px-10 py-4 bg-[#E3B23C] text-[#1E2A44] font-bold text-lg rounded-full hover:bg-white transition-colors shadow-lg w-full sm:w-auto">
                      Apply for 2026
                  </Link>
                  <Link to="/contact" className="px-10 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#1E2A44] transition-colors w-full sm:w-auto">
                      Download Brochure
                  </Link>
              </div>
          </div>
      </section>
    </motion.div>
  );
};

const StatsCard = ({ icon: Icon, number, label, color }: { icon: any, number: string, label: string, color: string }) => (
  <div className="p-4 md:p-8 text-center group cursor-default">
    <Icon className={`h-8 w-8 md:h-10 md:w-10 mx-auto mb-4 ${color} transform group-hover:scale-110 transition-transform`} />
    <h3 className="text-2xl md:text-4xl font-bold text-[#1E2A44] mb-2">{number}</h3>
    <p className="text-gray-500 font-semibold uppercase tracking-wider text-[10px] md:text-xs">{label}</p>
  </div>
);

const FeatureBox = ({ title, desc, icon: Icon }: { title: string, desc: string, icon: any }) => (
    <motion.div 
        variants={fadeInUp}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
        <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-[#2F5DFF] mb-6">
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#1E2A44] mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
);

const SchoolCard = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
    <div className="group relative bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center cursor-pointer h-full min-h-[160px] justify-center">
        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
            <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-bold text-[#1E2A44] mb-2 text-sm md:text-base">{title}</h3>
        <span className="text-xs text-gray-400 font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity mt-auto absolute bottom-4">Explore Programs</span>
    </div>
);

const TestimonialCard = ({ text, author, course, image }: { text: string, author: string, course: string, image: string }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#2F5DFF]/30 transition-all relative">
        <Quote className="text-[#E3B23C]/20 w-12 h-12 absolute top-6 right-6" />
        <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">"{text}"</p>
        <div className="flex items-center">
            <img 
                src={image} 
                alt={author} 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
                loading="lazy"
            />
            <div>
                <h4 className="font-bold text-[#1E2A44] text-sm">{author}</h4>
                <p className="text-[#2F5DFF] text-xs font-bold uppercase">{course}</p>
            </div>
        </div>
    </div>
);

const EventCard = ({ date, month, title, loc, tag }: { date: string, month: string, title: string, loc: string, tag: string }) => (
    <div className="bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col">
        <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <span className="bg-white text-[#1E2A44] text-xs font-bold px-3 py-1 rounded-full border border-gray-200">{tag}</span>
                <span className="text-[#E3B23C] font-bold text-sm">{month}</span>
            </div>
            <h3 className="font-bold text-xl text-[#1E2A44] mb-2 group-hover:text-[#2F5DFF] transition-colors line-clamp-2">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-6 mt-auto pt-4">
                <Calendar className="h-4 w-4 mr-2" /> {date}
            </div>
            <p className="text-sm text-gray-500 flex items-center border-t border-gray-200 pt-4">
                <Building className="h-4 w-4 mr-2" /> {loc}
            </p>
        </div>
    </div>
);