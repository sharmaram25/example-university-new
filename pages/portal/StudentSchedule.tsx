import React from 'react';
import { PortalLayout } from '../../components/PortalLayout';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export const StudentSchedule = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  const schedule: any = {
    'Mon': { '09:00': { title: 'Data Structures', code: 'CS102', room: '301', color: 'bg-blue-100 text-blue-700 border-blue-200' }, '11:00': { title: 'Operating Systems', code: 'CS202', room: 'Lab 2', color: 'bg-purple-100 text-purple-700 border-purple-200' } },
    'Tue': { '10:00': { title: 'DBMS', code: 'CS203', room: '304', color: 'bg-green-100 text-green-700 border-green-200' }, '14:00': { title: 'Algorithms', code: 'CS201', room: '302', color: 'bg-orange-100 text-orange-700 border-orange-200' } },
    'Wed': { '09:00': { title: 'Data Structures', code: 'CS102', room: '301', color: 'bg-blue-100 text-blue-700 border-blue-200' }, '13:00': { title: 'Mathematics II', code: 'MA102', room: 'Hall A', color: 'bg-pink-100 text-pink-700 border-pink-200' } },
    'Thu': { '11:00': { title: 'Operating Systems', code: 'CS202', room: 'Lab 2', color: 'bg-purple-100 text-purple-700 border-purple-200' } },
    'Fri': { '10:00': { title: 'Cyber Security', code: 'CS401', room: '305', color: 'bg-red-100 text-red-700 border-red-200' }, '15:00': { title: 'Project Lab', code: 'PRJ101', room: 'Lab 4', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' } },
  };

  return (
    <PortalLayout>
      <div className="mb-6 flex justify-between items-end">
        <div>
            <h1 className="text-2xl font-bold text-[#1E2A44]">Weekly Schedule</h1>
            <p className="text-gray-500">Fall Semester 2024</p>
        </div>
        <button className="flex items-center text-sm font-bold text-[#2F5DFF] bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md border border-gray-100">
            <CalendarIcon className="w-4 h-4 mr-2" /> Download PDF
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
        <div className="min-w-[800px]">
<div className="grid grid-cols-6 border-b border-gray-200 bg-gray-50">
                <div className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center border-r border-gray-200">Time</div>
                {days.map(day => (
                    <div key={day} className="p-4 text-sm font-bold text-[#1E2A44] text-center border-r border-gray-200 last:border-r-0">
                        {day}
                    </div>
                ))}
            </div>
{times.map((time) => (
                <div key={time} className="grid grid-cols-6 border-b border-gray-100 last:border-b-0">
                    <div className="p-4 text-xs font-bold text-gray-500 text-center border-r border-gray-100 flex items-center justify-center">
                        {time}
                    </div>
                    {days.map((day) => {
                        const classInfo = schedule[day]?.[time];
                        return (
                            <div key={`${day}-${time}`} className="p-2 border-r border-gray-100 last:border-r-0 min-h-[100px]">
                                {classInfo ? (
                                    <div className={`h-full w-full rounded-lg p-3 border ${classInfo.color} transition-transform hover:scale-[1.02] cursor-pointer shadow-sm`}>
                                        <p className="text-xs font-bold uppercase opacity-70 mb-1">{classInfo.code}</p>
                                        <p className="font-bold text-sm leading-tight mb-1">{classInfo.title}</p>
                                        <div className="flex items-center text-xs opacity-80 mt-2">
                                            <Clock className="w-3 h-3 mr-1" />
                                            <span>{classInfo.room}</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full w-full"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
      </div>
    </PortalLayout>
  );
};
