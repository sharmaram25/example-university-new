import React from 'react';
import { PortalLayout } from '../../components/PortalLayout';
import { useUniversity } from '../../context/UniversityContext';
import { Users, MoreHorizontal, Mail, FileText } from 'lucide-react';

export const FacultyClasses = () => {
  const { courses, currentUser } = useUniversity();
  
  const myClasses = courses.filter(c => c.facultyName === currentUser?.name || currentUser?.role === 'teacher');

  const students = [
      { id: '1', name: 'Ram Sharma', id_no: 'STU001', attendance: '95%', grade: 'A' },
      { id: '2', name: 'Priya Patel', id_no: 'STU004', attendance: '88%', grade: 'B+' },
      { id: '3', name: 'John Doe', id_no: 'STU012', attendance: '72%', grade: 'C' },
      { id: '4', name: 'Alice Smith', id_no: 'STU023', attendance: '91%', grade: 'A-' },
  ];

  return (
    <PortalLayout>
       <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1E2A44]">My Classes</h1>
            <p className="text-gray-500">Manage student rosters and performance.</p>
        </div>

        <div className="space-y-8">
            {myClasses.map((course) => (
                <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-50">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <h2 className="text-xl font-bold text-[#1E2A44]">{course.title}</h2>
                                <span className="bg-[#2F5DFF] text-white text-xs font-bold px-2 py-0.5 rounded uppercase">{course.code}</span>
                            </div>
                            <p className="text-sm text-gray-500">Semester {course.semester} • 4 Credits</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex gap-3">
                             <button className="text-sm font-bold text-gray-600 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
                                View Assignments
                             </button>
                             <button className="text-sm font-bold text-white bg-[#1E2A44] px-4 py-2 rounded-lg hover:bg-[#2F5DFF] transition-colors">
                                Manage Roster
                             </button>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-gray-400 font-medium border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4">Student Name</th>
                                    <th className="px-6 py-4">ID Number</th>
                                    <th className="px-6 py-4">Attendance</th>
                                    <th className="px-6 py-4">Current Grade</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {students.map((student, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-[#1E2A44] flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 text-xs font-bold text-gray-500">
                                                {student.name.charAt(0)}
                                            </div>
                                            {student.name}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 font-mono">{student.id_no}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${parseInt(student.attendance) > 85 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                {student.attendance}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 font-bold text-[#1E2A44]">{student.grade}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-gray-400 hover:text-[#2F5DFF] mx-2"><Mail className="w-4 h-4" /></button>
                                            <button className="text-gray-400 hover:text-[#2F5DFF]"><MoreHorizontal className="w-4 h-4" /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-gray-100 text-center">
                        <button className="text-sm text-[#2F5DFF] font-bold hover:underline">View All 45 Students</button>
                    </div>
                </div>
            ))}
        </div>
    </PortalLayout>
  );
};
