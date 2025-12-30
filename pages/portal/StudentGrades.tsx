import React from 'react';
import { PortalLayout } from '../../components/PortalLayout';
import { useUniversity } from '../../context/UniversityContext';
import { Award, TrendingUp, AlertCircle, Download } from 'lucide-react';

export const StudentGrades = () => {
  const { currentUser } = useUniversity();

  const grades = [
    { code: 'CS101', title: 'Introduction to Programming', credit: 4, grade: 'A', points: 9.0, status: 'Completed' },
    { code: 'CS102', title: 'Data Structures', credit: 4, grade: 'A-', points: 8.5, status: 'Completed' },
    { code: 'CS201', title: 'Object Oriented Programming', credit: 3, grade: 'B+', points: 7.8, status: 'Completed' },
    { code: 'CS202', title: 'Operating Systems', credit: 4, grade: 'A', points: 9.2, status: 'Completed' },
    { code: 'MA101', title: 'Mathematics I', credit: 4, grade: 'B', points: 7.5, status: 'Completed' },
    { code: 'ENG101', title: 'Communication Skills', credit: 2, grade: 'O', points: 10.0, status: 'Completed' },
  ];

  const calculateCGPA = () => {
    const totalPoints = grades.reduce((acc, curr) => acc + (curr.points * curr.credit), 0);
    const totalCredits = grades.reduce((acc, curr) => acc + curr.credit, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <PortalLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1E2A44]">Academic Performance</h1>
        <p className="text-gray-500">Semester 3 Results</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#2F5DFF] text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-20"><Award className="w-16 h-16"/></div>
             <h3 className="text-3xl font-bold mb-1">{calculateCGPA()}</h3>
             <p className="text-sm opacity-90 font-medium">Cumulative GPA (CGPA)</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold text-[#1E2A44]">21</h3>
                <p className="text-sm text-gray-500">Credits Earned</p>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-full">
                <CheckCircleIcon />
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
                <h3 className="text-2xl font-bold text-[#1E2A44]">Top 5%</h3>
                <p className="text-sm text-gray-500">Class Rank</p>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-full">
                <TrendingUp className="w-6 h-6"/>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-[#1E2A44]">Grade Sheet</h3>
              <button className="text-sm flex items-center text-[#2F5DFF] font-bold hover:underline">
                  <Download className="w-4 h-4 mr-1" /> Download Transcript
              </button>
          </div>
          <table className="w-full text-left">
              <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      <th className="p-6">Course Code</th>
                      <th className="p-6">Course Title</th>
                      <th className="p-6">Credits</th>
                      <th className="p-6">Grade</th>
                      <th className="p-6">Points</th>
                      <th className="p-6">Status</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                  {grades.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="p-6 font-bold text-[#1E2A44]">{item.code}</td>
                          <td className="p-6 text-gray-600">{item.title}</td>
                          <td className="p-6 text-gray-500">{item.credit}</td>
                          <td className="p-6 font-bold text-[#2F5DFF]">{item.grade}</td>
                          <td className="p-6 text-gray-900 font-medium">{item.points}</td>
                          <td className="p-6">
                              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                  {item.status}
                              </span>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </PortalLayout>
  );
};

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);
