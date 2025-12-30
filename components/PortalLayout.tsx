import React from 'react';
import { useUniversity } from '../context/UniversityContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LogOut, 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users, 
  FileText, 
  Bell,
  Search,
  GraduationCap,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({ children }) => {
  const { currentUser, logout } = useUniversity();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getLinks = () => {
    switch (currentUser?.role) {
      case 'student':
        return [
          { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
          { name: 'My Courses', path: '/student/courses', icon: BookOpen },
          { name: 'Schedule', path: '/student/schedule', icon: Calendar },
          { name: 'Grades', path: '/student/grades', icon: GraduationCap },
        ];
      case 'teacher':
        return [
          { name: 'Dashboard', path: '/faculty', icon: LayoutDashboard },
          { name: 'My Classes', path: '/faculty/classes', icon: Users },
          { name: 'Assignments', path: '/faculty/assignments', icon: FileText },
          { name: 'Schedule', path: '/faculty/schedule', icon: Calendar },
        ];
      case 'admin':
        return [
          { name: 'Overview', path: '/admin', icon: LayoutDashboard },
          { name: 'User Management', path: '/admin/users', icon: Users },
          { name: 'Course Catalog', path: '/admin/courses', icon: BookOpen },
          { name: 'Reports', path: '/admin/reports', icon: FileText },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  if (!currentUser) {
      setTimeout(() => navigate('/login'), 100);
      return null;
  }

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] font-inter">
<div className="hidden lg:flex w-64 bg-[#1E2A44] text-white flex-col fixed h-full z-30 shadow-2xl transition-all">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#E3B23C] flex items-center justify-center">
            <span className="font-bold text-[#1E2A44]">E</span>
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">Portal</h1>
            <p className="text-xs text-gray-400 uppercase tracking-widest">{currentUser.role}</p>
          </div>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1">
          {links.map((link) => {
             const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path) && link.path !== '/student' && link.path !== '/admin' && link.path !== '/faculty');
             
             return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                  isActive ? 'text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                    <motion.div 
                        layoutId="active-nav"
                        className="absolute inset-0 bg-gradient-to-r from-[#2F5DFF] to-[#3B82F6] opacity-100"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                <link.icon className={`w-5 h-5 mr-3 relative z-10 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <span className="relative z-10 font-medium">{link.name}</span>
              </Link>
             )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
           <button 
             onClick={handleLogout}
             className="flex items-center w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-colors"
           >
             <LogOut className="w-5 h-5 mr-3" />
             <span>Sign Out</span>
           </button>
        </div>
      </div>
<div className="flex-1 lg:ml-64 flex flex-col min-w-0">
<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
<div className="hidden md:flex items-center text-gray-400 bg-gray-100 px-4 py-2 rounded-lg w-96">
                <Search className="w-4 h-4 mr-2" />
                <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full text-gray-700" />
            </div>
<div className="md:hidden">
              <span className="font-bold text-[#1E2A44]">Example Univ</span>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-gray-500 hover:text-[#2F5DFF] transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
<Link to="/profile" className="flex items-center gap-3 pl-6 border-l border-gray-200 group hover:opacity-80 transition-opacity">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-[#1E2A44] group-hover:text-[#2F5DFF] transition-colors">{currentUser.name}</p>
                        <p className="text-xs text-gray-500">{currentUser.role}</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E3B23C] to-[#F4D35E] rounded-full flex items-center justify-center text-[#1E2A44] font-bold border-2 border-white shadow-md">
                        {currentUser.name.charAt(0)}
                    </div>
                </Link>
            </div>
        </header>
<div className="p-4 lg:p-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                {children}
            </motion.div>
        </div>
      </div>
    </div>
  );
};