import React from 'react';
import { useUniversity } from '../../context/UniversityContext';
import { PortalLayout } from '../../components/PortalLayout';
import { Users, Clock, FileText, CheckCircle, Calendar, MessageSquare, Plus } from 'lucide-react';

export const FacultyDashboard = () => {
  const { currentUser, courses } = useUniversity();

    const myClasses = courses.filter(c => c.facultyName === currentUser?.name || currentUser?.role === 'teacher');

  return (
    <PortalLayout>
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="text-2xl font-bold text-[#1E2A44]">Professor Dashboard</h1>
                <p className="text-gray-500">Manage your classes and assignments.</p>
            </div>
            <button className="flex items-center bg-[#2F5DFF] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-blue-600 transition-colors">
                <Plus className="w-4 h-4 mr-2" /> Create Assignment
            </button>
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                 <div className="p-3 bg-indigo-50 text-[#2F5DFF] rounded-xl mr-4">
                     <Users className="w-6 h-6" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-[#1E2A44]">145</h3>
                     <p className="text-sm text-gray-500">Total Students</p>
                 </div>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                 <div className="p-3 bg-yellow-50 text-[#E3B23C] rounded-xl mr-4">
                     <FileText className="w-6 h-6" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-[#1E2A44]">28</h3>
                     <p className="text-sm text-gray-500">Pending Grading</p>
                 </div>
             </div>
             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                 <div className="p-3 bg-green-50 text-green-500 rounded-xl mr-4">
                     <Clock className="w-6 h-6" />
                 </div>
                 <div>
                     <h3 className="text-2xl font-bold text-[#1E2A44]">12</h3>
                     <p className="text-sm text-gray-500">Hours This Week</p>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
                <h2 className="text-lg font-bold text-[#1E2A44]">Active Courses</h2>
                <div className="space-y-4">
                    {myClasses.slice(0, 4).map((course, idx) => (
                        <div key={course.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center group hover:border-[#2F5DFF] transition-colors">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-500 flex items-center justify-center font-bold text-sm mr-4 group-hover:bg-indigo-50 group-hover:text-[#2F5DFF] transition-colors">
                                    {course.code.substring(0,3)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1E2A44]">{course.title}</h3>
                                    <p className="text-sm text-gray-500">{course.code} • Sem {course.semester}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="inline-block bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded mb-1">Active</span>
                                <p className="text-xs text-gray-400">Next Class: Today, 2 PM</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
<div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-lg font-bold text-[#1E2A44] mb-4">Upcoming Tasks</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-gray-300 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-gray-700">Submit Grades for CS101</p>
                                <p className="text-xs text-red-500 font-medium">Due Today</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-gray-300 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-gray-700">Review Project Proposals</p>
                                <p className="text-xs text-gray-400">Due Oct 20</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-gray-300 mr-3 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-gray-700">Department Meeting</p>
                                <p className="text-xs text-gray-400">Tomorrow, 10 AM</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#2F5DFF] p-6 rounded-2xl shadow-lg text-white">
                    <MessageSquare className="w-8 h-8 mb-4 opacity-80" />
                    <h3 className="font-bold text-lg mb-2">Student Feedback</h3>
                    <p className="text-sm opacity-90 mb-4">New feedback is available for your recent "Data Structures" lecture.</p>
                    <button className="w-full py-2 bg-white text-[#2F5DFF] font-bold rounded-lg text-sm">View Feedback</button>
                </div>
            </div>
        </div>
    </PortalLayout>
  );
};
