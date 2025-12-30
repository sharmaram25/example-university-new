import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Calendar, Gift, Book, Award, Briefcase, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const Alumni = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-20"
    >
<div className="relative h-[65vh] flex items-center justify-center bg-[#1E2A44] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44] via-transparent to-[#1E2A44]/60"></div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E3B23C] text-sm font-bold tracking-widest uppercase mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            Example Alumni Network
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Once a Student, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B23C] to-[#F4D35E]">Forever a Leader.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Join a lifelong community of 50,000+ innovators and change-makers across 120 countries. Connect, mentor, and shape the future together.
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 bg-[#E3B23C] text-[#1E2A44] font-bold rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(227,178,60,0.3)] hover:shadow-[0_0_30px_rgba(227,178,60,0.5)]">
                Access Alumni Portal
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-[#1E2A44] transition-colors">
                Find a Local Chapter
            </button>
          </motion.div>
        </div>
      </div>
<div className="bg-[#0F172A] border-y border-white/5 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800/50">
                <StatItem number="50K+" label="Global Alumni" />
                <StatItem number="120" label="Countries" />
                <StatItem number="15" label="Regional Chapters" />
                <StatItem number="$20M" label="Raised for Aid" />
            </div>
        </div>
      </div>
<div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
            <span className="text-[#2F5DFF] font-bold tracking-wider uppercase text-sm">Hall of Fame</span>
            <h2 className="text-4xl font-bold text-[#1E2A44] mt-2 mb-4">Distinguished Alumni</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Leaders who started their journey at Example University and are now shaping industries worldwide.</p>
        </div>
        
        <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
            <AlumniProfile 
                name="Sarah Jenkins"
                year="Class of 2005"
                role="CTO at TechGlobal"
                desc="Pioneered quantum encryption protocols now used by major banks."
                img="https://randomuser.me/api/portraits/women/33.jpg"
            />
            <AlumniProfile 
                name="David Okonjo"
                year="Class of 2010"
                role="Founder, GreenEarth NGO"
                desc="Awarded the Nobel Peace Prize for his work in sustainable agriculture in Africa."
                img="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <AlumniProfile 
                name="Priya Sharma"
                year="Class of 2012"
                role="Chief Designer, Vogue Italia"
                desc="Revolutionizing sustainable fashion with biodegradable fabrics."
                img="https://randomuser.me/api/portraits/women/65.jpg"
            />
        </motion.div>
      </div>
<div className="bg-gray-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/2 sticky top-24">
                    <h2 className="text-4xl font-bold text-[#1E2A44] mb-6">Alumni Benefits & Services</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Being an alumnus comes with exclusive perks. From lifelong access to our digital library to premium career services, we support your professional growth at every stage of your life.
                    </p>
                    <Link to="/contact" className="inline-flex items-center text-[#2F5DFF] font-bold text-lg hover:underline">
                        View Full Benefits Guide <ArrowRight className="ml-2 w-5 h-5"/>
                    </Link>
                </div>
                <div className="md:w-1/2 grid grid-cols-1 gap-6">
                    <BenefitItem 
                        icon={Book} 
                        title="Digital Library Access" 
                        desc="Access thousands of research journals, e-books, and databases remotely." 
                    />
                    <BenefitItem 
                        icon={Briefcase} 
                        title="Career Advancement" 
                        desc="Exclusive job boards, resume reviews, and leadership workshops." 
                    />
                    <BenefitItem 
                        icon={Users} 
                        title="Global Directory" 
                        desc="Search and connect with alumni in your city or industry." 
                    />
                    <BenefitItem 
                        icon={MessageCircle} 
                        title="Mentorship Program" 
                        desc="Become a mentor or find one to guide your career path." 
                    />
                </div>
            </div>
         </div>
      </div>
<div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-4xl font-bold text-[#1E2A44] mb-2">Reunions & Events</h2>
                <p className="text-gray-600">Reconnect with old friends and make new memories.</p>
            </div>
            <Link to="/contact" className="text-[#2F5DFF] font-bold flex items-center hover:underline group">
                View Calendar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </Link>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
                date="Nov 15"
                title="Grand Annual Homecoming"
                loc="Main Campus, Great Hall"
                desc="The biggest event of the year. Dinner, dance, and nostalgia."
            />
            <EventCard 
                date="Dec 02"
                title="London Chapter Mixer"
                loc="The Shard, London"
                desc="Networking evening for alumni based in the UK."
            />
            <EventCard 
                date="Jan 10"
                title="Tech Leaders Summit"
                loc="Virtual Event"
                desc="Panel discussion featuring alumni from Google, Amazon, and Tesla."
            />
         </div>
      </div>
<div className="bg-[#1E2A44] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F5DFF] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E3B23C] rounded-full blur-[120px] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex p-4 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
                <Gift className="w-12 h-12 text-[#E3B23C]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pay It Forward</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Your support empowers the next generation of visionaries. 
                Whether through mentorship or scholarships, your contribution makes a lasting difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-8 py-4 bg-[#E3B23C] text-[#1E2A44] font-bold rounded-full hover:bg-white transition-colors shadow-xl">
                    Make a Donation
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-[#1E2A44] transition-colors">
                    Become a Mentor
                </button>
            </div>
        </div>
      </div>

    </motion.div>
  );
};

const StatItem = ({ number, label }: { number: string, label: string }) => (
    <div className="p-4">
        <div className="text-4xl md:text-5xl font-extrabold text-[#E3B23C] mb-2 font-display">{number}</div>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{label}</div>
    </div>
);

const AlumniProfile = ({ name, year, role, desc, img }: { name: string, year: string, role: string, desc: string, img: string }) => (
    <motion.div 
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative group overflow-hidden"
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2F5DFF] to-[#E3B23C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        <img src={img} alt={name} loading="lazy" className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-[#F3F4F6] group-hover:border-[#E3B23C] transition-colors object-cover" />
        <h3 className="text-xl font-bold text-[#1E2A44]">{name}</h3>
        <p className="text-sm text-gray-500 mb-4 font-medium">{year}</p>
        <div className="inline-block bg-indigo-50 text-[#2F5DFF] px-3 py-1 rounded-full text-xs font-bold mb-4">{role}</div>
        <p className="text-gray-600 italic text-sm leading-relaxed">"{desc}"</p>
    </motion.div>
);

const BenefitItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#2F5DFF] hover:shadow-md transition-all group">
        <div className="bg-indigo-50 p-4 rounded-xl mr-5 text-[#2F5DFF] group-hover:bg-[#2F5DFF] group-hover:text-white transition-colors">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h3 className="font-bold text-[#1E2A44] text-lg mb-1">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const EventCard = ({ date, title, loc, desc }: { date: string, title: string, loc: string, desc: string }) => (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full">
        <div className="bg-[#1E2A44] p-4 flex justify-between items-center group-hover:bg-[#2F5DFF] transition-colors">
            <span className="font-bold text-[#E3B23C] group-hover:text-white">{date}</span>
            <span className="text-xs text-gray-400 group-hover:text-white/80 uppercase tracking-wider font-bold">Registration Open</span>
        </div>
        <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-[#1E2A44] mb-2">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mb-4">
                <Globe className="w-4 h-4 mr-2" /> {loc}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
            <button className="text-[#2F5DFF] font-bold text-sm uppercase tracking-wider hover:text-[#1E2A44] transition-colors self-start">Register Now</button>
        </div>
    </div>
);