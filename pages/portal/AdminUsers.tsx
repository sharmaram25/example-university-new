import React, { useState } from 'react';
import { PortalLayout } from '../../components/PortalLayout';
import { useUniversity } from '../../context/UniversityContext';
import { Search, Filter, MoreHorizontal, Edit, Trash2, Shield, User, BookOpen } from 'lucide-react';

export const AdminUsers = () => {
  const { users } = useUniversity();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user => {
    const matchesFilter = filter === 'all' || user.role === filter;
    const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PortalLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1E2A44]">User Management</h1>
        <p className="text-gray-500">View and manage system access.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
<div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between gap-4">
             <div className="flex gap-4 items-center flex-1">
                 <div className="relative flex-1 max-w-md">
                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                     <input 
                        type="text" 
                        placeholder="Search users..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none"
                     />
                 </div>
                 <div className="relative">
                     <select 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="pl-4 pr-8 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2F5DFF] outline-none appearance-none cursor-pointer"
                     >
                         <option value="all">All Roles</option>
                         <option value="student">Students</option>
                         <option value="teacher">Faculty</option>
                         <option value="admin">Admins</option>
                     </select>
                     <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                 </div>
             </div>
             <button className="bg-[#1E2A44] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#2F5DFF] transition-colors">
                 Add New User
             </button>
         </div>
<div className="overflow-x-auto">
             <table className="w-full text-left text-sm">
                 <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                     <tr>
                         <th className="px-6 py-4">User Details</th>
                         <th className="px-6 py-4">Role</th>
                         <th className="px-6 py-4">Department/Course</th>
                         <th className="px-6 py-4">Status</th>
                         <th className="px-6 py-4 text-right">Actions</th>
                     </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                     {filteredUsers.map((user) => (
                         <tr key={user.id} className="hover:bg-gray-50 transition-colors group">
                             <td className="px-6 py-4">
                                 <div className="flex items-center">
                                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-[#1E2A44] font-bold mr-3 border border-gray-200">
                                         {user.name.charAt(0)}
                                     </div>
                                     <div>
                                         <p className="font-bold text-[#1E2A44]">{user.name}</p>
                                         <p className="text-gray-400 text-xs">{user.email}</p>
                                     </div>
                                 </div>
                             </td>
                             <td className="px-6 py-4">
                                 <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize ${
                                     user.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                                     user.role === 'teacher' ? 'bg-orange-100 text-orange-700' :
                                     'bg-blue-100 text-blue-700'
                                 }`}>
                                     {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                                     {user.role === 'teacher' && <BookOpen className="w-3 h-3 mr-1" />}
                                     {user.role === 'student' && <User className="w-3 h-3 mr-1" />}
                                     {user.role === 'teacher' ? 'Faculty' : user.role}
                                 </span>
                             </td>
                             <td className="px-6 py-4 text-gray-600">
                                 {user.department || user.course || '-'}
                             </td>
                             <td className="px-6 py-4">
                                 <span className="text-green-600 font-bold text-xs flex items-center">
                                     <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span> Active
                                 </span>
                             </td>
                             <td className="px-6 py-4 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button className="p-2 text-gray-400 hover:text-[#2F5DFF] hover:bg-blue-50 rounded-lg transition-colors mr-1">
                                     <Edit className="w-4 h-4" />
                                 </button>
                                 <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                     <Trash2 className="w-4 h-4" />
                                 </button>
                             </td>
                         </tr>
                     ))}
                     {filteredUsers.length === 0 && (
                         <tr>
                             <td colSpan={5} className="text-center py-12 text-gray-400">
                                 No users found matching your criteria.
                             </td>
                         </tr>
                     )}
                 </tbody>
             </table>
         </div>
      </div>
    </PortalLayout>
  );
};
