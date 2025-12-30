import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UniversityProvider } from './context/UniversityContext';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Programs = lazy(() => import('./pages/Programs').then(module => ({ default: module.Programs })));
const ProgramDetail = lazy(() => import('./pages/ProgramDetail').then(module => ({ default: module.ProgramDetail })));
const Academics = lazy(() => import('./pages/Academics').then(module => ({ default: module.Academics })));
const Faculty = lazy(() => import('./pages/Faculty').then(module => ({ default: module.Faculty })));
const Admissions = lazy(() => import('./pages/Admissions').then(module => ({ default: module.Admissions })));
const Research = lazy(() => import('./pages/Research').then(module => ({ default: module.Research })));
const CampusLife = lazy(() => import('./pages/CampusLife').then(module => ({ default: module.CampusLife })));
const Placements = lazy(() => import('./pages/Placements').then(module => ({ default: module.Placements })));
const Alumni = lazy(() => import('./pages/Alumni').then(module => ({ default: module.Alumni })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Apply = lazy(() => import('./pages/Apply').then(module => ({ default: module.Apply })));

const StudentDashboard = lazy(() => import('./pages/portal/StudentDashboard').then(module => ({ default: module.StudentDashboard })));
const FacultyDashboard = lazy(() => import('./pages/portal/FacultyDashboard').then(module => ({ default: module.FacultyDashboard })));
const AdminDashboard = lazy(() => import('./pages/portal/AdminDashboard').then(module => ({ default: module.AdminDashboard })));
const CourseDetail = lazy(() => import('./pages/portal/CourseDetail').then(module => ({ default: module.CourseDetail })));

const Profile = lazy(() => import('./pages/portal/Profile').then(module => ({ default: module.Profile })));
const StudentSchedule = lazy(() => import('./pages/portal/StudentSchedule').then(module => ({ default: module.StudentSchedule })));
const StudentGrades = lazy(() => import('./pages/portal/StudentGrades').then(module => ({ default: module.StudentGrades })));
const FacultyClasses = lazy(() => import('./pages/portal/FacultyClasses').then(module => ({ default: module.FacultyClasses })));
const AdminUsers = lazy(() => import('./pages/portal/AdminUsers').then(module => ({ default: module.AdminUsers })));

const AppContent = () => {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/student') || 
                   location.pathname.startsWith('/admin') || 
                   location.pathname.startsWith('/faculty-portal') ||
                   location.pathname.startsWith('/profile');
  
  const isFocusPage = location.pathname === '/apply';

  return (
    <div className="flex flex-col min-h-screen font-inter bg-white selection:bg-[#E3B23C] selection:text-[#1E2A44]">
      {!isPortal && !isFocusPage && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/program/:id" element={<ProgramDetail />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/research" element={<Research />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/apply" element={<Apply />} />

              <Route path="/profile" element={<Profile />} />

              <Route path="/student" element={<StudentDashboard />} />
              <Route path="/student/courses" element={<StudentDashboard />} />
              <Route path="/student/course/:id" element={<CourseDetail />} />
              <Route path="/student/schedule" element={<StudentSchedule />} />
              <Route path="/student/grades" element={<StudentGrades />} />

              <Route path="/faculty-portal" element={<FacultyDashboard />} />
              <Route path="/faculty-portal/classes" element={<FacultyClasses />} />
              <Route path="/faculty-portal/assignments" element={<FacultyDashboard />} />
              <Route path="/faculty-portal/schedule" element={<StudentSchedule />} />

              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/courses" element={<AdminDashboard />} />
              <Route path="/admin/reports" element={<AdminDashboard />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      {!isPortal && !isFocusPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <UniversityProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </UniversityProvider>
  );
}

export default App;