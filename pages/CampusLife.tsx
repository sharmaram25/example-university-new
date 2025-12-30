import React from 'react';
import { Utensils, Music, Heart, Shield, BookOpen, Users, Globe, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const CampusLife = () => {
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-20"
    >
      <div className="relative h-[60vh] min-h-[500px] bg-gray-900 overflow-hidden flex items-center justify-center">
        <motion.div 
            style={{ y: yRange, opacity: 0.5 }}
            className="absolute inset-0 bg-cover bg-center"
            initial={{scale: 1.1}}
            animate={{scale: 1}}
            transition={{duration: 1.5}}
        >
             <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="w-full h-full object-cover" loading="eager" alt="Campus Life" />
        </motion.div>
        <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
        >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Vibrant. Inclusive. Dynamic.</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">Experience a campus that never sleeps, where learning goes beyond the four walls.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<section className="mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <span className="text-[#2F5DFF] font-bold tracking-wider uppercase text-sm">Academics</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44] mt-2 mb-6">The Classroom Experience</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Our classrooms are designed for collaboration, not just dictation. With tiered seating, smart boards, and high-speed connectivity, every lecture turns into an interactive discussion.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center text-gray-700 font-medium">
                            <BookOpen className="w-5 h-5 text-[#E3B23C] mr-3" /> Smart Amphitheaters
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <Users className="w-5 h-5 text-[#E3B23C] mr-3" /> 15:1 Student-Faculty Ratio
                        </li>
                        <li className="flex items-center text-gray-700 font-medium">
                            <Globe className="w-5 h-5 text-[#E3B23C] mr-3" /> Hybrid Learning Capable
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/2 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Classroom" 
                        className="rounded-3xl shadow-2xl z-10 relative w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block z-20 border border-gray-100">
                        <p className="text-3xl font-bold text-[#2F5DFF]">100+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Smart Classrooms</p>
                    </div>
                </div>
            </div>
        </section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
                <div className="relative">
                    <div className="absolute top-4 left-4 w-full h-full border-2 border-[#2F5DFF] rounded-2xl z-0 transform translate-x-4 translate-y-4 hidden md:block"></div>
                    <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Housing" loading="lazy" className="relative z-10 rounded-2xl shadow-2xl w-full" />
                </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A44] mb-6">Student Housing</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">World-class student residences with AC suites, high-speed Wi-Fi, and 24/7 security. Our living spaces are designed to foster community and comfort, ensuring you feel at home away from home.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Single & Double Occupancy', 'Common Recreation Areas', 'Study Lounges', '24/7 Power Backup'].map((item, i) => (
                         <li key={i} className="flex items-center text-gray-700 font-medium">
                            <span className="w-2 h-2 bg-[#2F5DFF] rounded-full mr-3 flex-shrink-0"></span>
                            {item}
                         </li>
                    ))}
                </ul>
            </motion.div>
        </div>
<section className="mb-24">
            <h2 className="text-3xl font-bold text-[#1E2A44] mb-10 text-center">Campus Moments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
                <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Event" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-bold">Annual Fest</span>
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Study" />
                </div>
                <div className="overflow-hidden rounded-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1574629810360-7efbbe436cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Sports" />
                </div>
                <div className="col-span-2 overflow-hidden rounded-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Group" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-bold">Community Outreach</span>
                    </div>
                </div>
            </div>
        </section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-32">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-indigo-50 p-8 md:p-10 rounded-3xl border border-indigo-100 hover:shadow-lg transition-all"
            >
                <h3 className="text-3xl font-bold text-[#1E2A44] mb-6">Clubs & Societies</h3>
                <p className="text-gray-700 mb-8 text-lg">40+ Student Clubs including the 'CodeWarriors' Coding Club, 'Debate Society', and 'RoboTech'.</p>
                <div className="flex flex-wrap gap-3">
                    {['CodeWarriors', 'Debate Society', 'Drama Club', 'Eco-Warriors'].map(tag => (
                        <span key={tag} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-[#2F5DFF] shadow-sm hover:shadow-md transition-shadow cursor-default">{tag}</span>
                    ))}
                </div>
            </motion.div>
            <motion.div 
               variants={fadeIn}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-100 hover:border-[#E3B23C] hover:shadow-lg transition-all"
            >
                <h3 className="text-3xl font-bold text-[#1E2A44] mb-6">Sports & Wellness</h3>
                <p className="text-gray-700 mb-8 text-lg">Olympic-sized swimming pool, synthetic athletic tracks, and indoor sports complex. We believe in a sound mind in a sound body.</p>
                 <div className="flex flex-wrap gap-3">
                    {['Swimming', 'Athletics', 'Yoga', 'Tennis'].map(tag => (
                        <span key={tag} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-bold text-gray-600 shadow-sm">{tag}</span>
                    ))}
                </div>
            </motion.div>
        </div>
<section className="mb-24 bg-[#1E2A44] text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F5DFF] rounded-full blur-[100px] opacity-20"></div>
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/2">
                    <span className="text-[#E3B23C] font-bold uppercase tracking-widest text-sm mb-2 block">Social Responsibility</span>
                    <h2 className="text-3xl font-bold mb-6">Outreach & Impact</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        We believe education extends beyond the campus. Our students actively participate in rural education programs, environmental drives, and tech-literacy workshops for the underprivileged.
                    </p>
                    <button className="bg-[#E3B23C] text-[#1E2A44] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors">
                        Join NSS Wing
                    </button>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
                        <Heart className="w-8 h-8 text-[#E3B23C] mb-2" />
                        <h4 className="font-bold text-lg">Blood Donation</h4>
                        <p className="text-sm text-gray-400">Annual mega camps.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
                        <Globe className="w-8 h-8 text-[#2F5DFF] mb-2" />
                        <h4 className="font-bold text-lg">Green Earth</h4>
                        <p className="text-sm text-gray-400">Tree plantation drives.</p>
                    </div>
                </div>
            </div>
        </section>
<div className="mb-20 md:mb-32">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-[#1E2A44] mb-12 text-center"
            >
                Everyday Conveniences
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={Utensils} 
                    title="Dining & Cafes" 
                    desc="5 multi-cuisine cafeterias offering healthy and hygienic meals. From quick bites to full course meals, we have it all." 
                    delay={0}
                />
                <FeatureCard 
                    icon={Music} 
                    title="Arts & Culture" 
                    desc="Annual cultural fest 'Aurora' attracts talent from across the nation. Join the music band, dance troop, or theatre group." 
                    delay={0.2}
                />
                <FeatureCard 
                    icon={Shield} 
                    title="Health & Safety" 
                    desc="24/7 on-campus infirmary with ambulance service. CCTV surveillance and dedicated security personnel ensure a safe environment." 
                    delay={0.4}
                />
            </div>
        </div>

      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -10 }}
        className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
        <div className="inline-block p-5 bg-indigo-50 shadow-inner rounded-full mb-6 text-[#2F5DFF]">
            <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#1E2A44] mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
);
