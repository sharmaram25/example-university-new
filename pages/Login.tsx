import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUniversity } from '../context/UniversityContext';
import { Lock, Mail, ArrowRight, BookOpen, User, GraduationCap, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Login = () => {
  const [role, setRole] = useState<'student' | 'teacher' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useUniversity();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
        if (login(email, password)) {
            if (role === 'admin') navigate('/admin');
            else if (role === 'teacher') navigate('/faculty-portal');
            else navigate('/student');
        } else {
            setError('Invalid credentials for ' + role + '. Please check the hints.');
            setLoading(false);
        }
    }, 1000);
  };

  const getDemoCredentials = () => {
      switch(role) {
          case 'student': return { e: 'ram@example.univ', p: 'student' };
          case 'teacher': return { e: 'vikram@example.univ', p: 'teach' };
          case 'admin': return { e: 'admin@example.univ', p: 'admin' };
      }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 lg:p-0">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex min-h-[700px]">
<div className="hidden lg:flex w-1/2 bg-[#1E2A44] relative flex-col justify-between p-12 text-white overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-20">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F5DFF] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E3B23C] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
             </div>
             
             <div className="relative z-10">
                 <Link to="/" className="flex items-center gap-2 mb-8 opacity-80 hover:opacity-100 transition-opacity text-sm font-bold">
                     <ArrowRight className="w-4 h-4 rotate-180" /> Back to Website
                 </Link>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded bg-[#E3B23C] flex items-center justify-center">
                        <span className="font-bold text-[#1E2A44] text-xl">E</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">EXAMPLE UNIVERSITY</span>
                 </div>
                 <h1 className="text-5xl font-bold leading-tight mb-6">
                    Welcome to your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B23C] to-[#F4D35E]">Digital Campus.</span>
                 </h1>
                 <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                     Access your dashboard, manage courses, view grades, and connect with the community.
                 </p>
             </div>

             <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                 <div className="text-center">
                     <h3 className="text-2xl font-bold text-[#2F5DFF]">15k+</h3>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Students</p>
                 </div>
                 <div className="text-center border-l border-white/10">
                     <h3 className="text-2xl font-bold text-[#E3B23C]">98%</h3>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Satisfaction</p>
                 </div>
                 <div className="text-center border-l border-white/10">
                     <h3 className="text-2xl font-bold text-white">24/7</h3>
                     <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Access</p>
                 </div>
             </div>
        </div>
<div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
            <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-[#1E2A44] mb-2">Sign In</h2>
                <p className="text-gray-500">Please select your role to continue.</p>
            </div>
<div className="flex bg-gray-100 p-1.5 rounded-xl mb-8 border border-gray-200">
                {(['student', 'teacher', 'admin'] as const).map((r) => (
                    <button
                        key={r}
                        onClick={() => { setRole(r); setError(''); }}
                        className={`flex-1 flex items-center justify-center py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                            role === r ? 'bg-white text-[#2F5DFF] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        {r === 'student' && <GraduationCap className="w-4 h-4 mr-2" />}
                        {r === 'teacher' && <BookOpen className="w-4 h-4 mr-2" />}
                        {r === 'admin' && <Shield className="w-4 h-4 mr-2" />}
                        <span className="capitalize">{r === 'teacher' ? 'Faculty' : r}</span>
                    </button>
                ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">University Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 z-10" />
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={getDemoCredentials()?.e}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400 z-10" />
                        <input 
                            type="password" 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all text-gray-900 placeholder:text-gray-400 shadow-sm"
                        />
                    </div>
                    <div className="flex justify-between items-center pt-2">
                        <button type="button" onClick={() => {
                            setEmail(getDemoCredentials()?.e);
                            setPassword(getDemoCredentials()?.p);
                        }} className="text-xs text-[#2F5DFF] font-bold hover:underline">
                            Auto-fill Demo Credentials
                        </button>
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-600 font-medium">Forgot Password?</a>
                    </div>
                </div>

                {error && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 text-red-600 text-sm rounded-xl flex items-center border border-red-100 font-medium"
                    >
                        <Shield className="w-4 h-4 mr-2 flex-shrink-0" />
                        {error}
                    </motion.div>
                )}

                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#2F5DFF] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <>Sign In <ArrowRight className="w-4 h-4 ml-2" /></>
                    )}
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">
                    Don't have an account? <Link to="/apply" className="text-[#2F5DFF] font-bold hover:underline">Apply for Admission</Link>
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};