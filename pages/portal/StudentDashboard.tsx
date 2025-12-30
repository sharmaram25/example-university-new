import React from 'react';
import { useUniversity } from '../../context/UniversityContext';
import { PortalLayout } from '../../components/PortalLayout';
import { Link } from 'react-router-dom';
import { Book, Clock, GraduationCap, Search, ChevronRight, TrendingUp, AlertCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const StudentDashboard = () => {
  const { currentUser, courses, books, programs } = useUniversity();
  
  const studentProgram = programs.find(p => p.id === currentUser?.programId);
  
  const myCourses = courses.filter(course => {
    if (!studentProgram || !currentUser?.semester) return false;
    const subject = studentProgram.subjects.find(s => 
      s.code === course.code && s.semester === currentUser.semester
    );
    return !!subject;
  });

  const gradeData = [
    { name: 'CS101', score: 85 },
    { name: 'CS102', score: 92 },
    { name: 'CS201', score: 78 },
    { name: 'CS202', score: 88 },
  ];

  return (
    <PortalLayout>
<div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1E2A44]">Hello, {currentUser?.name.split(' ')[0]}! 👋</h1>
            <p className="text-gray-500">Here's what's happening in your semester.</p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400 font-medium">Current GPA</p>
                    <h3 className="text-2xl font-bold text-[#1E2A44]">3.8</h3>
                </div>
                <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400 font-medium">Attendance</p>
                    <h3 className="text-2xl font-bold text-[#1E2A44]">92%</h3>
                </div>
                <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400 font-medium">Credits</p>
                    <h3 className="text-2xl font-bold text-[#1E2A44]">18/24</h3>
                </div>
                <div className="w-10 h-10 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                    <Book className="w-5 h-5" />
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400 font-medium">Pending Tasks</p>
                    <h3 className="text-2xl font-bold text-[#1E2A44]">3</h3>
                </div>
                <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-8">
<div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-[#1E2A44]">My Courses</h2>
                        <button className="text-sm text-[#2F5DFF] font-medium hover:underline">View All</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {myCourses.map(course => (
                            <Link to={`/student/course/${course.id}`} key={course.id} className="block group">
                                <motion.div 
                                    whileHover={{ y: -4 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:border-[#2F5DFF] transition-all h-full"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#2F5DFF] flex items-center justify-center font-bold text-xs">
                                            {course.code.substring(0,3)}
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">{course.credits} Cr</span>
                                    </div>
                                    <h3 className="font-bold text-[#1E2A44] mb-1 group-hover:text-[#2F5DFF] transition-colors">{course.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{course.facultyName}</p>
<div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                                        <div className="bg-[#2F5DFF] h-1.5 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>65% Complete</span>
                                        <span>{course.assignments.filter(a => a.status === 'Pending').length} Assignments Due</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-[#1E2A44] mb-6">Mid-Term Performance</h2>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={gradeData}>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                                    {gradeData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.score > 90 ? '#E3B23C' : '#2F5DFF'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
<div className="space-y-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-[#1E2A44]">Today's Schedule</h2>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">{new Date().toLocaleDateString(undefined, {weekday: 'short'})}</span>
                    </div>
                    <div className="relative pl-4 border-l-2 border-gray-100 space-y-6">
                        {myCourses.slice(0, 3).map((course, idx) => (
                            <div key={idx} className="relative">
                                <div className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white ${idx === 0 ? 'bg-[#2F5DFF]' : 'bg-gray-300'}`}></div>
                                <p className="text-xs text-gray-400 font-mono mb-1">0{9 + idx}:00 AM</p>
                                <h4 className="font-bold text-[#1E2A44] text-sm">{course.title}</h4>
                                <p className="text-xs text-gray-500">Room 30{idx+1} • {course.facultyName}</p>
                            </div>
                        ))}
                    </div>
                </div>
<div className="bg-[#1E2A44] p-6 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F5DFF] rounded-full blur-[50px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <h2 className="text-lg font-bold mb-4 relative z-10">Library Status</h2>
                    <div className="space-y-4 relative z-10">
                        {books.slice(0, 2).map(book => (
                            <div key={book.id} className="flex items-start bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                                <Book className="w-5 h-5 text-[#E3B23C] mr-3 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">{book.title}</p>
                                    <p className={`text-xs mt-1 ${book.status === 'Available' ? 'text-green-400' : 'text-red-400'}`}>
                                        {book.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                        Browse Catalog
                    </button>
                </div>

            </div>
        </div>
    </PortalLayout>
  );
};
