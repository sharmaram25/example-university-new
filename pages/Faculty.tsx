import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Mail, Linkedin, MapPin, ChevronDown } from 'lucide-react';

const facultyMembers = [
  { id: 101, name: 'Dr. Eleanor Vance', role: 'Chancellor', dept: 'Administration', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', email: 'chancellor@example.univ', location: 'Main Block, A-101' },
  { id: 102, name: 'Prof. David Chen', role: 'Vice-Chancellor', dept: 'Administration', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', email: 'vc@example.univ', location: 'Main Block, A-102' },
  { id: 103, name: 'Dr. Sarah Jenkins', role: 'Dean of Academics', dept: 'Administration', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', email: 'dean.academics@example.univ', location: 'Academic Wing, B-204' },
  { id: 104, name: 'Mr. James Wilson', role: 'Registrar', dept: 'Administration', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', email: 'registrar@example.univ', location: 'Admin Block, G-05' },
  { id: 105, name: 'Ms. Rebecca Lee', role: 'Director of Admissions', dept: 'Administration', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400', email: 'admissions.dir@example.univ', location: 'Admin Block, G-12' },

  { id: 201, name: 'Dr. Rajesh Kumar', role: 'Dean, School of Engineering', dept: 'Engineering', image: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=400', email: 'rajesh.k@example.univ', location: 'Tech Park, E-301' },
  { id: 202, name: 'Prof. Emily Stone', role: 'HOD, Computer Science', dept: 'Engineering', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400', email: 'emily.stone@example.univ', location: 'Tech Park, CS-201' },
  { id: 203, name: 'Dr. Alan Turing', role: 'Professor, AI & Robotics', dept: 'Engineering', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', email: 'alan.t@example.univ', location: 'AI Lab, R-101' },
  { id: 204, name: 'Dr. Meera Patel', role: 'Associate Professor, Civil', dept: 'Engineering', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=400', email: 'meera.p@example.univ', location: 'Civil Block, C-102' },
  { id: 205, name: 'Prof. John Von Neumann', role: 'Professor, Systems', dept: 'Engineering', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400', email: 'john.v@example.univ', location: 'Tech Park, E-405' },

  { id: 301, name: 'Prof. Michael Scott', role: 'Dean, School of Business', dept: 'Business', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', email: 'm.scott@example.univ', location: 'Management Block, M-101' },
  { id: 302, name: 'Dr. Linda Hamilton', role: 'Senior Lecturer, Marketing', dept: 'Business', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400', email: 'linda.h@example.univ', location: 'Management Block, M-203' },
  { id: 303, name: 'Mr. Robert California', role: 'Professor, Strategy', dept: 'Business', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400', email: 'r.california@example.univ', location: 'Management Block, M-205' },

  { id: 401, name: 'Dr. Angela Martin', role: 'HOD, Accounting', dept: 'Commerce', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', email: 'angela.m@example.univ', location: 'Commerce Wing, C-101' },
  { id: 402, name: 'Prof. Kevin Malone', role: 'Lecturer, Finance', dept: 'Commerce', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400', email: 'kevin.m@example.univ', location: 'Commerce Wing, C-103' },

  { id: 501, name: 'Dr. Anita Desai', role: 'Professor, English Lit', dept: 'Humanities', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', email: 'anita.d@example.univ', location: 'Arts Block, H-201' },
  { id: 502, name: 'Dr. Toby Flenderson', role: 'Associate Prof, Psychology', dept: 'Humanities', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', email: 'toby.f@example.univ', location: 'Arts Block, H-302' },

  { id: 601, name: 'Prof. Sofia Vergara', role: 'Dean, School of Design', dept: 'Design', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', email: 'sofia.v@example.univ', location: 'Design Studio, D-101' },
  { id: 602, name: 'Mr. Oscar Nunez', role: 'Lecturer, Fashion Design', dept: 'Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', email: 'oscar.n@example.univ', location: 'Design Studio, D-105' },

  { id: 701, name: 'Dr. Neil Tyson', role: 'Professor, Physics', dept: 'Sciences', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400', email: 'neil.t@example.univ', location: 'Science Block, S-401' },
  { id: 702, name: 'Dr. Marie Curie', role: 'HOD, Chemistry', dept: 'Sciences', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', email: 'marie.c@example.univ', location: 'Science Block, S-405' },

  { id: 801, name: 'Ar. Ted Mosby', role: 'Professor, Architecture', dept: 'Architecture', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', email: 'ted.m@example.univ', location: 'Arch Block, A-301' },
];

const departments = [
  'All',
  'Administration',
  'Engineering',
  'Business',
  'Commerce',
  'Humanities',
  'Design',
  'Sciences',
  'Architecture'
];

export const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesDept = selectedDept === 'All' || member.dept === selectedDept;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-[76px]">
<div className="bg-[#1E2A44] py-16 px-4 sm:px-6 lg:px-8 text-center shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5DFF] rounded-full filter blur-[150px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty & Staff</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A diverse community of world-class educators, researchers, and administrators dedicated to academic excellence.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
<div className="w-full lg:flex-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                    <div className="flex gap-2">
                        {departments.map((dept) => (
                            <button
                                key={dept}
                                onClick={() => setSelectedDept(dept)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                                    selectedDept === dept 
                                    ? 'bg-[#1E2A44] text-white shadow-md' 
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                                }`}
                            >
                                {dept}
                            </button>
                        ))}
                    </div>
                </div>
<div className="w-full lg:w-80 relative shrink-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search name or role..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none transition-all"
                    />
                </div>
            </div>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
            <AnimatePresence mode='popLayout'>
                {filteredFaculty.map((member) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        key={member.id}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#2F5DFF]/30 transition-all duration-300 overflow-hidden group flex flex-col"
                    >
<div className="h-32 bg-gradient-to-r from-gray-100 to-gray-200 relative">
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-[#1E2A44] shadow-sm">
                                {member.dept}
                            </div>
                        </div>
                        
                        <div className="px-6 relative flex-grow flex flex-col">
<div className="-mt-12 mb-4 relative inline-block">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
                                    loading="lazy"
                                />
                            </div>
<div className="mb-6">
                                <h3 className="font-bold text-lg text-[#1E2A44] group-hover:text-[#2F5DFF] transition-colors leading-tight mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-gray-500 line-clamp-2 min-h-[1.25rem]">{member.role}</p>
                            </div>
<div className="mt-auto space-y-3 pb-6">
                                <div className="flex items-center text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                                    <MapPin className="w-3.5 h-3.5 mr-2 text-[#2F5DFF] shrink-0" />
                                    <span className="truncate">{member.location}</span>
                                </div>
                                <div className="flex gap-2">
                                    <a 
                                        href={`mailto:${member.email}`} 
                                        className="flex-1 flex items-center justify-center py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-bold hover:bg-[#1E2A44] hover:text-white hover:border-[#1E2A44] transition-colors"
                                    >
                                        <Mail className="w-3.5 h-3.5 mr-2" /> Email
                                    </a>
                                    <button className="flex-none p-2 rounded-lg border border-gray-200 text-[#0077B5] hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {filteredFaculty.length === 0 && (
            <div className="text-center py-24">
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2A44]">No Faculty Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
                <button 
                    onClick={() => {setSelectedDept('All'); setSearchQuery('')}}
                    className="mt-6 text-[#2F5DFF] font-bold hover:underline"
                >
                    Clear All Filters
                </button>
            </div>
        )}

      </div>
    </div>
  );
};