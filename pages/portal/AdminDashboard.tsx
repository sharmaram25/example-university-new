import React, { useState } from 'react';
import { useUniversity } from '../../context/UniversityContext';
import { PortalLayout } from '../../components/PortalLayout';
import { Users, UserPlus, BookOpen, TrendingUp, DollarSign, Activity, Search } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

export const AdminDashboard = () => {
  const { users, addUser } = useUniversity();
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'student', password: 'password' });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({
        id: `user${Date.now()}`,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role as any,
        password: newUser.password,
        course: newUser.role === 'student' ? 'General' : undefined,
        semester: newUser.role === 'student' ? 1 : undefined
    });
    setNewUser({ name: '', email: '', role: 'student', password: 'password' });
    alert('User added successfully!');
  };

  const studentsCount = users.filter(u => u.role === 'student').length + 1240; 
  const facultyCount = users.filter(u => u.role === 'teacher').length + 85;

  const enrollmentData = [
      { name: 'Jan', students: 40 },
      { name: 'Feb', students: 30 },
      { name: 'Mar', students: 20 },
      { name: 'Apr', students: 27 },
      { name: 'May', students: 18 },
      { name: 'Jun', students: 23 },
      { name: 'Jul', students: 34 },
    { name: 'Aug', students: 120 },
  ];

  return (
    <PortalLayout>
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1E2A44]">Admin Overview</h1>
            <p className="text-gray-500">System status and user management.</p>
        </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatsWidget icon={Users} color="text-[#2F5DFF]" bg="bg-indigo-50" label="Total Students" value={studentsCount.toString()} trend="+12%" />
            <StatsWidget icon={BookOpen} color="text-[#E3B23C]" bg="bg-yellow-50" label="Total Faculty" value={facultyCount.toString()} trend="+4%" />
            <StatsWidget icon={DollarSign} color="text-green-600" bg="bg-green-50" label="Revenue (YTD)" value="₹18.5 Cr" trend="+8%" />
            <StatsWidget icon={Activity} color="text-purple-600" bg="bg-purple-50" label="System Health" value="99.9%" trend="Stable" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
<div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1E2A44] mb-6">New Enrollments (2024)</h3>
                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={enrollmentData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                            <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                            <Line type="monotone" dataKey="students" stroke="#2F5DFF" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-[#1E2A44] mb-4 flex items-center">
                    <UserPlus className="w-5 h-5 mr-2" /> Quick Add User
                </h3>
                <form onSubmit={handleAddUser} className="space-y-4">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                        <input
                            type="text"
                            required
                            value={newUser.name}
                            onChange={e => setNewUser({...newUser, name: e.target.value})}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none text-gray-900 bg-white"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                        <input
                            type="email"
                            required
                            value={newUser.email}
                            onChange={e => setNewUser({...newUser, email: e.target.value})}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none text-gray-900 bg-white"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase">Role</label>
                        <select
                            value={newUser.role}
                            onChange={e => setNewUser({...newUser, role: e.target.value})}
                            className="w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none text-gray-900 bg-white"
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Faculty</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#1E2A44] text-white font-bold py-2.5 rounded-lg text-sm hover:bg-[#2F5DFF] transition-colors shadow-md"
                    >
                        Create User
                    </button>
                </form>
            </div>
        </div>
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-[#1E2A44]">Recent System Activity</h3>
                <button className="text-sm text-[#2F5DFF] font-medium hover:underline">View All Logs</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="px-6 py-4 font-medium">User</th>
                            <th className="px-6 py-4 font-medium">Action</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3].map(i => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-[#1E2A44]">Vikram Singh</td>
                                <td className="px-6 py-4 text-gray-500">Uploaded Grades for CS101</td>
                                <td className="px-6 py-4 text-gray-500">Oct 12, 2024</td>
                                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Success</span></td>
                            </tr>
                        ))}
                         <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-[#1E2A44]">Ram Sharma</td>
                                <td className="px-6 py-4 text-gray-500">Submitted Assignment 3</td>
                                <td className="px-6 py-4 text-gray-500">Oct 11, 2024</td>
                                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Success</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </PortalLayout>
  );
};

const StatsWidget = ({ icon: Icon, color, bg, label, value, trend }: { icon: any, color: string, bg: string, label: string, value: string, trend: string }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center">
            <div className={`p-3 rounded-xl mr-4 ${bg} ${color}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
                <h3 className="text-2xl font-bold text-[#1E2A44]">{value}</h3>
            </div>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'Stable' ? 'bg-gray-100 text-gray-500' : 'bg-green-50 text-green-600'}`}>
            {trend}
        </span>
    </div>
);