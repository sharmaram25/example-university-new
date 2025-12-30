import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar, CheckCircle, FileText, DollarSign, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const Admissions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-20"
    >
<div className="relative bg-[#1E2A44] py-24 overflow-hidden">
        <div className="absolute inset-0">
           <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Students" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A44] to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Your Journey Starts Here
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Join a diverse community of scholars, innovators, and leaders. We are looking for students who are ready to challenge the status quo.
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
                to="/apply"
                className="inline-block bg-[#E3B23C] text-[#1E2A44] font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(227,178,60,0.4)] hover:shadow-[0_0_30px_rgba(227,178,60,0.6)] transition-all hover:scale-105"
            >
                Apply Now
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1E2A44] text-center mb-16"
          >
            Application Process
          </motion.h2>
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <StepCard number="01" title="Register Online" desc="Create an account on our admission portal and fill out the basic details." />
            <StepCard number="02" title="Submit Documents" desc="Upload your transcripts, letters of recommendation, and statement of purpose." />
            <StepCard number="03" title="Entrance Exam" desc="Appear for the University Entrance Test (UET) or submit JEE/SAT scores." />
            <StepCard number="04" title="Interview" desc="Shortlisted candidates will be invited for a personal interview." />
          </motion.div>
        </div>
<motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white p-10 rounded-3xl border border-gray-200 shadow-xl"
        >
          <div className="flex items-center mb-8">
            <div className="bg-[#2F5DFF]/10 p-3 rounded-xl mr-4">
                <Calendar className="h-8 w-8 text-[#2F5DFF]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1E2A44]">Important Dates & Deadlines</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-5 px-6 font-bold text-gray-500 uppercase text-sm tracking-wider">Program Level</th>
                  <th className="py-5 px-6 font-bold text-gray-500 uppercase text-sm tracking-wider">Application Opens</th>
                  <th className="py-5 px-6 font-bold text-gray-500 uppercase text-sm tracking-wider">Early Action</th>
                  <th className="py-5 px-6 font-bold text-gray-500 uppercase text-sm tracking-wider">Regular Decision</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#1E2A44]">Undergraduate</td>
                  <td className="py-5 px-6">August 1, 2024</td>
                  <td className="py-5 px-6 text-red-500 font-medium">November 1, 2024</td>
                  <td className="py-5 px-6">January 15, 2025</td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#1E2A44]">Postgraduate</td>
                  <td className="py-5 px-6">September 1, 2024</td>
                  <td className="py-5 px-6 text-red-500 font-medium">December 15, 2024</td>
                  <td className="py-5 px-6">March 1, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-[#1E2A44]">PhD Research</td>
                  <td className="py-5 px-6">Rolling Admission</td>
                  <td className="py-5 px-6 text-gray-400">-</td>
                  <td className="py-5 px-6">May 30, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1E2A44] mb-6">Scholarships & Financial Aid</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe that talent should not be limited by financial constraints. Over 65% of our students receive some form of financial aid.
              </p>
              <ul className="space-y-6">
                <AidItem 
                  icon={Award} 
                  color="text-[#E3B23C]" 
                  title="Merit Scholarships" 
                  desc="Up to 100% tuition waiver for top rankers." 
                />
                <AidItem 
                  icon={DollarSign} 
                  color="text-[#2F5DFF]" 
                  title="Need-Based Grants" 
                  desc="Support for students from economically weaker sections." 
                />
                <AidItem 
                  icon={FileText} 
                  color="text-green-500" 
                  title="Research Fellowships" 
                  desc="Stipends for PhD scholars and research assistants." 
                />
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1E2A44] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden border border-white/10"
            >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
                <h3 className="text-3xl font-bold mb-8">Tuition Fees (Annual)</h3>
                <div className="space-y-6 text-lg">
                    <FeeRow program="B.Tech / B.E." price="₹2.5 Lakhs" />
                    <FeeRow program="MBA" price="₹4.5 Lakhs" />
                    <FeeRow program="B.Des" price="₹3.0 Lakhs" />
                    <FeeRow program="B.Sc / B.A." price="₹1.2 Lakhs" />
                </div>
                <p className="text-sm text-gray-400 mt-8 italic">* Fees are subject to change. Excludes hostel and mess charges.</p>
            </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

const StepCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <motion.div 
    variants={item}
    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#2F5DFF] transition-all duration-300 relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-2 h-full bg-[#2F5DFF] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    <span className="text-5xl font-black text-gray-100 mb-6 block group-hover:text-[#2F5DFF]/10 transition-colors">{number}</span>
    <h3 className="text-xl font-bold text-[#1E2A44] mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const AidItem = ({ icon: Icon, color, title, desc }: { icon: any, color: string, title: string, desc: string }) => (
  <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-transparent hover:border-gray-200 transition-colors">
    <div className={`mt-1 mr-4 ${color}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="font-bold text-[#1E2A44] text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  </li>
);

const FeeRow = ({ program, price }: { program: string, price: string }) => (
    <div className="flex justify-between border-b border-white/10 pb-3">
        <span className="font-medium text-gray-300">{program}</span>
        <span className="font-bold text-[#E3B23C]">{price}</span>
    </div>
);
