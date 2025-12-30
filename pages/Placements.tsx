import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Briefcase, TrendingUp, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const data = [
  { year: '2020', package: 8 },
  { year: '2021', package: 9 },
  { year: '2022', package: 10.5 },
  { year: '2023', package: 12.5 },
  { year: '2024', package: 15.2 },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const Placements = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-[#1E2A44] mb-6"
            >
                Placements & Careers
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
            >
                We are committed to launching careers. Our dedicated placement cell works year-round to connect students with top-tier industry leaders from India and abroad.
            </motion.p>
        </div>
<motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
            <StatsCard 
                icon={Briefcase} 
                color="bg-green-100 text-green-600" 
                number="500+" 
                label="Recruiters Visited" 
            />
            <StatsCard 
                icon={TrendingUp} 
                color="bg-blue-100 text-blue-600" 
                number="₹45 LPA" 
                label="Highest Package" 
            />
            <StatsCard 
                icon={Users} 
                color="bg-purple-100 text-purple-600" 
                number="98%" 
                label="Students Placed" 
            />
        </motion.div>
<section className="mb-24 text-center">
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-700 mb-10"
            >
                Our Top Recruiters
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                {['TATA', 'INFOSYS', 'GOOGLE', 'RELIANCE', 'MICROSOFT', 'WIPRO', 'AMAZON', 'DELOITTE', 'ZOMATO'].map((name, i) => (
                    <motion.span 
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl font-black text-[#1E2A44]/30 hover:text-[#1E2A44] transition-colors cursor-default"
                    >
                        {name}
                    </motion.span>
                ))}
            </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
<motion.section 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
                <h2 className="text-2xl font-bold text-[#1E2A44] mb-8">Average Package Growth (LPA)</h2>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="year" tick={{fill: '#4B5563', fontSize: 12}} axisLine={false} tickLine={false} />
                            <YAxis tick={{fill: '#4B5563', fontSize: 12}} axisLine={false} tickLine={false} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', backgroundColor: '#1E2A44', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                                cursor={{ fill: '#F3F4F6' }}
                            />
                            <Bar 
                                dataKey="package" 
                                fill="#3B82F6" 
                                radius={[6, 6, 0, 0]} 
                                barSize={50}
                                animationDuration={1500}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.section>
<section>
                <motion.h2 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-[#1E2A44] mb-8"
                >
                    Alumni Success Stories
                </motion.h2>
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <AlumniCard 
                        name="Aditi Rao" 
                        role="Product Manager at Swiggy"
                        batch="Batch of 2018"
                        img="https://randomuser.me/api/portraits/women/44.jpg"
                    />
                    <AlumniCard 
                        name="Vikram Malhotra" 
                        role="Senior Engineer at Tesla"
                        batch="Batch of 2019"
                        img="https://randomuser.me/api/portraits/men/46.jpg"
                    />
                    <AlumniCard 
                        name="Sneha Kapoor" 
                        role="Consultant at McKinsey"
                        batch="Batch of 2020"
                        img="https://randomuser.me/api/portraits/women/22.jpg"
                    />
                </motion.div>
            </section>
        </div>

      </div>
    </motion.div>
  );
};

const StatsCard = ({ icon: Icon, color, number, label }: { icon: any, color: string, number: string, label: string }) => (
    <motion.div 
        variants={fadeInUp}
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex items-center hover:shadow-xl transition-all duration-300"
    >
        <div className={`${color} p-4 rounded-xl mr-6`}>
            <Icon className="h-8 w-8" />
        </div>
        <div>
            <h3 className="text-4xl font-extrabold text-[#1E2A44]">{number}</h3>
            <p className="text-gray-600 font-medium">{label}</p>
        </div>
    </motion.div>
);

const AlumniCard = ({ name, role, batch, img }: { name: string, role: string, batch: string, img: string }) => (
    <motion.div 
        variants={fadeInUp}
        whileHover={{ x: 10, backgroundColor: '#F9FAFB' }}
        className="flex items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-200 transition-colors cursor-default"
    >
        <img src={img} alt={name} className="w-16 h-16 rounded-full mr-6 object-cover border-2 border-white shadow-md" />
        <div>
            <h4 className="font-bold text-[#1E2A44] text-lg">{name}</h4>
            <p className="text-[#2F5DFF] font-medium">{role}</p>
            <p className="text-gray-400 text-sm mt-1">{batch}</p>
        </div>
    </motion.div>
);
