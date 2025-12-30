import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUniversity } from '../../context/UniversityContext';
import { FileText, CheckCircle, Clock, Upload, ArrowLeft, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { courses, submitAssignment } = useUniversity();
  const [activeTab, setActiveTab] = useState<'syllabus' | 'notes' | 'assignments'>('syllabus');

  const course = courses.find(c => c.id === id);

  if (!course) return <div className="p-8">Course not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/student" className="inline-flex items-center text-gray-500 hover:text-[#2F5DFF] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
        </Link>
<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <span className="text-[#2F5DFF] font-bold text-sm tracking-wider">{course.code}</span>
                    <h1 className="text-3xl font-bold text-[#1E2A44] mt-1">{course.title}</h1>
                    <p className="text-gray-500 mt-2">Faculty: {course.facultyName}</p>
                </div>
            </div>
        </div>
<div className="flex space-x-4 border-b border-gray-200 mb-8">
            {['syllabus', 'notes', 'assignments'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-4 px-4 text-sm font-medium capitalize transition-colors relative ${
                        activeTab === tab ? 'text-[#2F5DFF]' : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab}
                    {activeTab === tab && (
                        <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2F5DFF]" />
                    )}
                </button>
            ))}
        </div>
<AnimatePresence mode="wait">
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
            >
                {activeTab === 'syllabus' && (
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-[#1E2A44] mb-4">Course Description</h3>
                        <p className="text-gray-600 leading-relaxed">{course.description}</p>
                        
                        <h4 className="font-bold text-[#1E2A44] mt-6 mb-2">Modules</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Introduction to Big Data</li>
                            <li>Cloud Infrastructure Patterns</li>
                            <li>Data Visualization Techniques</li>
                            <li>Security in the Cloud</li>
                        </ul>
                    </div>
                )}

                {activeTab === 'notes' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.resources.length > 0 ? course.resources.map(resource => (
                            <div key={resource.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-red-50 text-red-500 p-3 rounded-lg mr-4">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-800">{resource.title}</p>
                                        <p className="text-xs text-gray-400 uppercase">{resource.type}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-[#2F5DFF]">
                                    <Download className="h-5 w-5" />
                                </button>
                            </div>
                        )) : (
                            <p className="text-gray-500">No resources available.</p>
                        )}
                    </div>
                )}

                {activeTab === 'assignments' && (
                    <div className="space-y-4">
                        {course.assignments.length > 0 ? course.assignments.map(assignment => (
                            <div key={assignment.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-center">
                                <div className="mb-4 md:mb-0">
                                    <h3 className="font-bold text-gray-800 text-lg">{assignment.title}</h3>
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <Clock className="h-4 w-4 mr-1" /> Due: {assignment.dueDate}
                                    </p>
                                </div>
                                
                                {assignment.status === 'Submitted' ? (
                                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 font-medium text-sm border border-green-100">
                                        <CheckCircle className="h-4 w-4 mr-2" /> Submitted
                                    </span>
                                ) : (
                                    <button 
                                        onClick={() => submitAssignment(course.id, assignment.id)}
                                        className="inline-flex items-center px-6 py-2 rounded-full bg-[#2F5DFF] text-white font-medium text-sm hover:bg-blue-600 transition-colors shadow-md"
                                    >
                                        <Upload className="h-4 w-4 mr-2" /> Upload Work
                                    </button>
                                )}
                            </div>
                        )) : (
                            <p className="text-gray-500">No pending assignments.</p>
                        )}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
