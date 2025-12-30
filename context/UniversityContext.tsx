import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { User, Course, Book, Notice, Program } from '../types';

const MASTER_PROGRAMS: Program[] = [
  {
    id: "BTECH_CSE",
    title: "B.Tech Computer Science & Engineering",
    category: "School of Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Theory + Labs + Projects + Internship",
    description: "Build strong foundations in computation, software systems, and intelligent technologies.",
    subjects: [
      { code: "ENG101", name: "Engineering Mathematics I (Calculus)", semester: 1, credits: 4 },
      { code: "ENG102", name: "Engineering Physics", semester: 1, credits: 4 },
      { code: "ENG103", name: "Programming for Problem Solving (C)", semester: 1, credits: 4 },
      { code: "ENG104", name: "Engineering Graphics & Design", semester: 1, credits: 3 },
      { code: "ENG105", name: "Engineering Mathematics II (Linear Algebra)", semester: 2, credits: 4 },
      { code: "ENG106", name: "Engineering Chemistry", semester: 2, credits: 4 },
      { code: "ENG107", name: "Python Programming", semester: 2, credits: 3 },
      { code: "ENG108", name: "Professional Communication", semester: 2, credits: 2 },
      { code: "CSE201", name: "Data Structures", semester: 3, credits: 4 },
      { code: "CSE202", name: "Digital Logic Design", semester: 3, credits: 3 },
      { code: "CSE203", name: "Discrete Mathematics", semester: 3, credits: 4 },
      { code: "CSE204", name: "Algorithms", semester: 4, credits: 4 },
      { code: "CSE205", name: "Operating Systems", semester: 4, credits: 4 },
      { code: "CSE206", name: "Computer Organization", semester: 4, credits: 3 },
      { code: "CSE301", name: "Database Management Systems", semester: 5, credits: 4 },
      { code: "CSE302", name: "Computer Networks", semester: 5, credits: 4 },
      { code: "CSE303", name: "Introduction to Artificial Intelligence", semester: 5, credits: 3 },
      { code: "CSE304", name: "Machine Learning Basics", semester: 6, credits: 4 },
      { code: "CSE305", name: "Cyber Security Fundamentals", semester: 6, credits: 3 },
      { code: "CSE306", name: "Mini Project", semester: 6, credits: 2 },
      { code: "CSE401", name: "Data Science", semester: 7, credits: 4 },
      { code: "CSE402", name: "Cloud Computing", semester: 7, credits: 3 },
      { code: "CSE403", name: "Major Project Phase I", semester: 7, credits: 6 },
      { code: "CSE404", name: "Major Project Phase II", semester: 8, credits: 12 }
    ]
  },
  {
    id: "BTECH_MECH",
    title: "B.Tech Mechanical Engineering",
    category: "School of Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Theory + Labs + Industrial Training",
    description: "Design, analyze, and manufacture mechanical systems for modern industry.",
    subjects: [
      { code: "ME201", name: "Engineering Mechanics", semester: 3, credits: 4 },
      { code: "ME202", name: "Thermodynamics", semester: 3, credits: 4 },
      { code: "ME203", name: "Material Science", semester: 4, credits: 3 },
      { code: "ME204", name: "Fluid Mechanics", semester: 4, credits: 4 },
      { code: "ME301", name: "Heat Transfer", semester: 5, credits: 4 },
      { code: "ME302", name: "Manufacturing Processes", semester: 5, credits: 4 },
      { code: "ME303", name: "Dynamics of Machines", semester: 6, credits: 4 },
      { code: "ME401", name: "Automobile Engineering", semester: 7, credits: 3 },
      { code: "ME402", name: "Major Project", semester: 8, credits: 12 }
    ]
  },
  {
    id: "BTECH_CIVIL",
    title: "B.Tech Civil Engineering",
    category: "School of Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Theory + Field Work + Structural Labs",
    description: "Plan, design, and construct infrastructure for sustainable development.",
    subjects: [
      { code: "CE201", name: "Solid Mechanics", semester: 3, credits: 4 },
      { code: "CE202", name: "Surveying", semester: 3, credits: 3 },
      { code: "CE203", name: "Structural Analysis", semester: 5, credits: 4 },
      { code: "CE204", name: "Geotechnical Engineering", semester: 6, credits: 4 },
      { code: "CE401", name: "Transportation Engineering", semester: 7, credits: 3 },
      { code: "CE402", name: "Major Project", semester: 8, credits: 12 }
    ]
  },
  {
    id: "BTECH_EEE",
    title: "B.Tech Electrical Engineering",
    category: "School of Engineering",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Theory + Power Labs + Simulation",
    description: "Study electrical systems, power generation, and smart grids.",
    subjects: [
      { code: "EE201", name: "Circuit Theory", semester: 3, credits: 4 },
      { code: "EE202", name: "Electrical Machines", semester: 4, credits: 4 },
      { code: "EE301", name: "Control Systems", semester: 5, credits: 4 },
      { code: "EE302", name: "Power Systems", semester: 6, credits: 4 },
      { code: "EE401", name: "Renewable Energy Technologies", semester: 7, credits: 3 }
    ]
  },
  {
    id: "MTECH_CSE",
    title: "M.Tech Computer Science & Engineering",
    category: "School of Engineering",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Advanced Theory + Research + Dissertation",
    description: "Advanced specialization in AI, systems, and computational research.",
    subjects: [
      { code: "MT101", name: "Advanced Algorithms", semester: 1, credits: 4 },
      { code: "MT102", name: "Advanced Machine Learning", semester: 1, credits: 4 },
      { code: "MT201", name: "Distributed Systems", semester: 2, credits: 4 },
      { code: "MT301", name: "Research Methodology", semester: 3, credits: 3 },
      { code: "MT401", name: "Dissertation / Thesis", semester: 4, credits: 16 }
    ]
  },
  {
    id: "PHD_ENGINEERING",
    title: "Ph.D. in Engineering",
    category: "School of Engineering",
    duration: "3–5 Years",
    level: "Doctoral",
    pedagogy: "Independent Research + Publications + Teaching Assistance",
    description: "Original research contributing to engineering science and technology. Focus areas include AI, Renewable Energy, and Smart Materials.",
    subjects: [
      { code: "PHD01", name: "Advanced Coursework & Methodology", semester: "Year 1", credits: 8 },
      { code: "PHD02", name: "Comprehensive Exam & Proposal Defense", semester: "Year 1", credits: 4 },
      { code: "PHD03", name: "Research & Publication Phase", semester: "Ongoing", credits: 0 },
      { code: "PHD04", name: "Thesis Submission & Defense", semester: "Final", credits: 30 }
    ]
  },

  {
    id: "BCOM_GENERAL",
    title: "B.Com (General)",
    category: "School of Commerce",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Case Studies + Financial Analysis + Regulatory Frameworks",
    description: "Foundational commerce program focusing on accounting, economics, law, and business operations.",
    subjects: [
      { code: "COM101", name: "Financial Accounting", semester: 1, credits: 4 },
      { code: "COM102", name: "Business Communication", semester: 1, credits: 3 },
      { code: "COM103", name: "Micro Economics", semester: 2, credits: 4 },
      { code: "COM104", name: "Business Laws", semester: 2, credits: 3 },
      { code: "COM201", name: "Corporate Accounting", semester: 3, credits: 4 },
      { code: "COM202", name: "Cost Accounting", semester: 3, credits: 4 },
      { code: "COM203", name: "Income Tax Laws", semester: 4, credits: 4 },
      { code: "COM204", name: "Company Law", semester: 4, credits: 3 },
      { code: "COM301", name: "Financial Markets Overview", semester: 5, credits: 3 },
      { code: "COM302", name: "E-Commerce Models", semester: 5, credits: 3 },
      { code: "COM303", name: "GST Practice & Compliance", semester: 6, credits: 4 },
      { code: "COM304", name: "Auditing Principles", semester: 6, credits: 3 }
    ]
  },
  {
    id: "BCOM_HONS",
    title: "B.Com (Honours)",
    category: "School of Commerce",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Advanced Case Analysis + Research Orientation + Industry Exposure",
    description: "An advanced commerce degree emphasizing analytical depth, specialization, and research-based learning.",
    subjects: [
      { code: "HCOM101", name: "Advanced Financial Accounting", semester: 1, credits: 5 },
      { code: "HCOM102", name: "Business Economics", semester: 2, credits: 5 },
      { code: "HCOM201", name: "Corporate & Strategic Accounting", semester: 3, credits: 4 },
      { code: "HCOM202", name: "Direct & Indirect Taxation", semester: 4, credits: 4 },
      { code: "HCOM203", name: "Computer Applications in Business", semester: 4, credits: 3 },
      { code: "HCOM301", name: "Banking & Insurance Systems", semester: 5, credits: 4 },
      { code: "HCOM302", name: "Corporate Governance & Ethics", semester: 6, credits: 4 },
      { code: "HCOM303", name: "Research Project / Dissertation", semester: 6, credits: 8 }
    ]
  },
  {
    id: "MCOM",
    title: "M.Com (Master of Commerce)",
    category: "School of Commerce",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Research-Led Learning + Advanced Financial Modeling",
    description: "Postgraduate program aimed at developing academic, analytical, and leadership competence in commerce and finance.",
    subjects: [
      { code: "MCOM101", name: "Managerial Economics", semester: 1, credits: 4 },
      { code: "MCOM102", name: "Statistical Analysis for Business", semester: 1, credits: 4 },
      { code: "MCOM103", name: "Organizational Theory", semester: 2, credits: 3 },
      { code: "MCOM201", name: "Advanced Financial Management", semester: 3, credits: 4 },
      { code: "MCOM202", name: "International Finance", semester: 3, credits: 4 },
      { code: "MCOM204", name: "Dissertation / Industry Research Project", semester: 4, credits: 12 }
    ]
  },

  {
    id: "BBA_GEN",
    title: "Bachelor of Business Administration (BBA)",
    category: "School of Business",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Leadership Development + Strategic Thinking",
    description: "Build a strong foundation in management principles, business strategy, and functional domains.",
    subjects: [
      { code: "BBA101", name: "Principles of Management", semester: 1, credits: 4 },
      { code: "BBA102", name: "Business Mathematics", semester: 1, credits: 4 },
      { code: "BBA103", name: "Financial Accounting", semester: 1, credits: 3 },
      { code: "BBA105", name: "Marketing Management", semester: 2, credits: 4 },
      { code: "BBA201", name: "Human Resource Management", semester: 3, credits: 4 },
      { code: "BBA202", name: "Management Accounting", semester: 3, credits: 4 },
      { code: "BBA204", name: "Operations Management", semester: 4, credits: 4 },
      { code: "BBA301", name: "Strategic Management", semester: 5, credits: 4 },
      { code: "BBA302", name: "Entrepreneurship Development", semester: 5, credits: 4 },
      { code: "BBAE01", name: "Retail Management", semester: 6, credits: 3 },
      { code: "BBA399", name: "Industry Internship / Capstone Project", semester: 6, credits: 6 }
    ]
  },
  {
    id: "MBA_GEN",
    title: "Master of Business Administration (MBA)",
    category: "School of Business",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Case Method + Leadership Labs + Advanced Quantitative Analysis",
    description: "A comprehensive postgraduate management program designed to develop strategic leaders.",
    subjects: [
      { code: "MBA101", name: "Financial Reporting & Analysis", semester: 1, credits: 4 },
      { code: "MBA102", name: "Marketing Management", semester: 1, credits: 4 },
      { code: "MBA103", name: "Operations Research", semester: 1, credits: 4 },
      { code: "MBA104", name: "Business Statistics", semester: 2, credits: 4 },
      { code: "MBF201", name: "Investment Banking", semester: 3, credits: 4 },
      { code: "MBM201", name: "Consumer Behavior", semester: 3, credits: 4 },
      { code: "MBH201", name: "Industrial Relations", semester: 3, credits: 4 },
      { code: "MBA499", name: "Summer Internship + Final Capstone Project", semester: 4, credits: 8 }
    ]
  },

  {
    id: "BA_ENGLISH",
    title: "BA English Literature",
    category: "School of Humanities",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Critical Reading + Textual Analysis",
    description: "Develops literary sensibility, analytical thinking, and advanced language proficiency.",
    subjects: [
      { code: "ENG101", name: "History of English Literature", semester: 1, credits: 4 },
      { code: "ENG102", name: "Academic Writing", semester: 1, credits: 3 },
      { code: "ENG104", name: "Poetry: Forms and Traditions", semester: 2, credits: 4 },
      { code: "ENG201", name: "Literary Criticism & Theory", semester: 3, credits: 4 },
      { code: "ENG301", name: "Postcolonial Literature", semester: 5, credits: 4 },
      { code: "ENG302", name: "World Literature", semester: 6, credits: 3 }
    ]
  },
  {
    id: "BA_PSYCH",
    title: "BA Psychology",
    category: "School of Humanities",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Conceptual Learning + Case Studies + Behavioral Analysis",
    description: "Introduces human behavior, cognition, and mental processes.",
    subjects: [
      { code: "PSY101", name: "Introduction to Psychology", semester: 1, credits: 4 },
      { code: "SOC102", name: "Introduction to Sociology", semester: 2, credits: 3 },
      { code: "PSY201", name: "Developmental Psychology", semester: 3, credits: 4 },
      { code: "RES203", name: "Research Methods & Statistics", semester: 4, credits: 3 },
      { code: "PSY301", name: "Abnormal Psychology", semester: 5, credits: 4 },
      { code: "PSY302", name: "Counseling Psychology", semester: 6, credits: 3 }
    ]
  },
  {
    id: "MA_PSYCHOLOGY",
    title: "MA Psychology",
    category: "School of Humanities",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Clinical Exposure + Empirical Research",
    description: "Advanced study of psychological theories, diagnostics, and therapeutic approaches.",
    subjects: [
      { code: "PSY501", name: "Advanced Cognitive Psychology", semester: 1, credits: 4 },
      { code: "PSY502", name: "Psychological Assessment", semester: 2, credits: 3 },
      { code: "PSY601", name: "Clinical Psychology", semester: 3, credits: 4 },
      { code: "RES603", name: "Dissertation", semester: 4, credits: 12 }
    ]
  },

  {
    id: "BDES_PRODUCT",
    title: "B.Des Industrial / Product Design",
    category: "School of Design",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Studio-Based Learning + Design Thinking + Prototyping",
    description: "Focuses on human-centered product design, ergonomics, materials, and manufacturing systems.",
    subjects: [
      { code: "DES101", name: "Elements of Design (Color, Form, Space)", semester: 1, credits: 4 },
      { code: "DES102", name: "Freehand Sketching & Visualisation", semester: 1, credits: 3 },
      { code: "PD201", name: "Ergonomics & Human Factors", semester: 3, credits: 4 },
      { code: "PD203", name: "3D Modeling & CAD", semester: 4, credits: 5 },
      { code: "PD301", name: "Design Management", semester: 5, credits: 3 },
      { code: "PD403", name: "Final Graduation Project", semester: 8, credits: 12 }
    ]
  },
  {
    id: "BDES_FASHION",
    title: "B.Des Fashion Design",
    category: "School of Design",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Studio-Based Learning + Craft Exploration + Industry Exposure",
    description: "From concept to couture, focuses on apparel design, textiles, and fashion systems.",
    subjects: [
      { code: "DES101", name: "Elements of Design & Color", semester: 1, credits: 4 },
      { code: "DES102", name: "Fashion Illustration & Sketching", semester: 1, credits: 3 },
      { code: "FD201", name: "Textile Science", semester: 3, credits: 3 },
      { code: "FD202", name: "Pattern Making & Garment Construction", semester: 4, credits: 5 },
      { code: "FD301", name: "Fashion Forecasting & Trend Analysis", semester: 5, credits: 3 },
      { code: "FD402", name: "Graduation Collection & Runway Project", semester: 8, credits: 12 }
    ]
  },
  {
    id: "MDES",
    title: "Master of Design (M.Des)",
    category: "School of Design",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Research-Led Studio Practice + Strategic Design",
    description: "Advanced design education focusing on strategy, systems, and leadership.",
    subjects: [
      { code: "MD101", name: "Design Theory & Criticism", semester: 1, credits: 4 },
      { code: "MD201", name: "Design Strategy & Innovation", semester: 2, credits: 4 },
      { code: "MD301", name: "Master’s Thesis / Industry Project", semester: 4, credits: 16 }
    ]
  },

  {
    id: "BSC_PHYSICS",
    title: "B.Sc (Hons) Physics",
    category: "School of Sciences",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Theoretical Foundations + Mathematical Modeling",
    description: "Builds strong conceptual and experimental grounding in classical, modern, and applied physics.",
    subjects: [
      { code: "PHY101", name: "Calculus & Linear Algebra for Physics", semester: 1, credits: 4 },
      { code: "PHY102", name: "Classical Mechanics", semester: 1, credits: 4 },
      { code: "PHY201", name: "Quantum Mechanics I", semester: 3, credits: 4 },
      { code: "PHY301", name: "Nuclear & Particle Physics", semester: 5, credits: 4 },
      { code: "PHY304", name: "Undergraduate Research Project", semester: 6, credits: 8 }
    ]
  },
  {
    id: "BSC_BIO",
    title: "B.Sc (Hons) Biological Sciences",
    category: "School of Sciences",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Life Science Theory + Laboratory Biology",
    description: "Integrated study of botany, zoology, genetics, and molecular biology.",
    subjects: [
      { code: "BIO101", name: "Cell Biology", semester: 1, credits: 4 },
      { code: "BIO104", name: "Microbiology", semester: 2, credits: 4 },
      { code: "BIO201", name: "Genetics", semester: 3, credits: 4 },
      { code: "BIO301", name: "Molecular Biology", semester: 5, credits: 4 },
      { code: "BIO304", name: "Research Project / Lab Dissertation", semester: 6, credits: 8 }
    ]
  },
  {
    id: "BSC_DATA_SCIENCE",
    title: "B.Sc Data Science",
    category: "School of Sciences",
    duration: "3 Years",
    level: "Undergraduate",
    pedagogy: "Mathematics + Computing + Data-Driven Problem Solving",
    description: "Prepares students for analytics, AI, and computational research.",
    subjects: [
      { code: "DS101", name: "Programming with Python", semester: 1, credits: 4 },
      { code: "DS103", name: "Statistics I", semester: 2, credits: 4 },
      { code: "DS202", name: "Database Management Systems", semester: 3, credits: 3 },
      { code: "DS301", name: "Machine Learning", semester: 5, credits: 4 },
      { code: "DS304", name: "Capstone Data Science Project", semester: 6, credits: 8 }
    ]
  },
  {
    id: "MSC_DATA_SCIENCE",
    title: "M.Sc Data Science",
    category: "School of Sciences",
    duration: "2 Years",
    level: "Postgraduate",
    pedagogy: "Advanced Theory → Applied Analytics → Research Thesis",
    description: "Advanced training in AI, big data, and intelligent systems.",
    subjects: [
      { code: "MDS501", name: "Advanced Statistics", semester: 1, credits: 4 },
      { code: "MDS502", name: "Machine Learning Algorithms", semester: 1, credits: 4 },
      { code: "MDS503", name: "Deep Learning & Neural Networks", semester: 2, credits: 4 },
      { code: "MDS603", name: "Master’s Thesis", semester: 4, credits: 12 }
    ]
  },

  {
    id: "BARCH",
    title: "Bachelor of Architecture (B.Arch)",
    category: "School of Planning & Architecture",
    duration: "5 Years",
    level: "Undergraduate",
    pedagogy: "Design Studios + Site Visits + Professional Internship",
    description: "A comprehensive architectural education integrating design, technology, history, sustainability, and professional practice.",
    subjects: [
      { code: "ARC101", name: "Basic Design Studio", semester: 1, credits: 6 },
      { code: "ARC102", name: "Architectural Drawing & Graphics", semester: 1, credits: 4 },
      { code: "ARC201", name: "Architectural Design – Residential", semester: 3, credits: 6 },
      { code: "ARC304", name: "Computer-Aided Design (AutoCAD / Revit)", semester: 6, credits: 4 },
      { code: "ARC401", name: "Urban Design Studio", semester: 7, credits: 6 },
      { code: "ARC404", name: "Professional Training (Internship)", semester: 8, credits: 16 },
      { code: "ARC503", name: "Final Architectural Thesis", semester: 10, credits: 18 }
    ]
  },
  {
    id: "BPLAN",
    title: "Bachelor of Planning (B.Plan)",
    category: "School of Planning & Architecture",
    duration: "4 Years",
    level: "Undergraduate",
    pedagogy: "Analytical Studios + GIS Labs + Field Surveys",
    description: "Focused on urban, regional, and infrastructure planning with strong grounding in data analysis.",
    subjects: [
      { code: "PLN101", name: "Fundamentals of Planning", semester: 1, credits: 4 },
      { code: "PLN202", name: "Transportation Planning", semester: 4, credits: 4 },
      { code: "PLN301", name: "GIS & Spatial Analysis", semester: 5, credits: 4 },
      { code: "PLN403", name: "Undergraduate Dissertation", semester: 8, credits: 6 }
    ]
  },
  {
    id: "PHD_ARCH",
    title: "Ph.D. in Architecture & Planning",
    category: "School of Planning & Architecture",
    duration: "3–5 Years",
    level: "Doctoral",
    pedagogy: "Original Research + Advanced Seminars",
    description: "Doctoral research program focusing on architecture, urban planning, sustainability, and housing policy.",
    subjects: [
      { code: "PHD701", name: "Research Methodology & Ethics", semester: "Year 1", credits: 4 },
      { code: "PHD703", name: "Comprehensive Research Review", semester: "Year 2", credits: 6 },
      { code: "PHD704", name: "Doctoral Thesis & Publications", semester: "Ongoing", credits: 30 }
    ]
  }
];

const INITIAL_USERS: User[] = [
  { id: 'admin01', name: 'Dr. Aditi Rao', role: 'admin', email: 'admin@example.univ', password: 'admin' },
  { id: 'teach01', name: 'Prof. Vikram Singh', role: 'teacher', email: 'vikram@example.univ', password: 'teach', department: 'CSE' },
  { 
    id: 'stud01', 
    name: 'Ram Sharma', 
    role: 'student', 
    email: 'ram@example.univ', 
    password: 'student', 
    programId: 'BTECH_CSE',
    course: 'B.Tech CSE',
    semester: 4 
  }
];

const generateCourseFromSubject = (subject: any): Course => {
  return {
    id: subject.code,
    code: subject.code,
    title: subject.name,
    facultyName: 'Prof. Faculty Member',
    description: `Comprehensive study material and assessments for ${subject.name}.`,
    credits: subject.credits,
    semester: subject.semester,
    resources: [
      { id: `res-${subject.code}-1`, title: 'Lecture Notes Module 1.pdf', type: 'pdf', url: '#' },
      { id: `res-${subject.code}-2`, title: 'Reference Slides.pptx', type: 'pptx', url: '#' },
    ],
    assignments: [
      { id: `asn-${subject.code}-1`, title: 'Mid-Term Assignment', dueDate: '5 days', status: 'Pending' },
      { id: `asn-${subject.code}-2`, title: 'Practical Report', dueDate: '2 weeks', status: 'Pending' }
    ],
    exams: [
      { id: `exam-${subject.code}`, subject: subject.name, date: '2024-12-20', status: 'Scheduled' }
    ]
  };
};

const generateAllCourses = () => {
  const allCourses: Course[] = [];
  MASTER_PROGRAMS.forEach(prog => {
    prog.subjects.forEach(sub => {
      if (!allCourses.find(c => c.id === sub.code)) {
        allCourses.push(generateCourseFromSubject(sub));
      }
    });
  });
  return allCourses;
};

const INITIAL_BOOKS: Book[] = [
  { id: 'b1', title: 'Introduction to Algorithms by Cormen', status: 'Available' },
  { id: 'b2', title: 'Clean Code by Robert C. Martin', status: 'Checked Out' },
  { id: 'b3', title: 'The Design of Everyday Things', status: 'Available' },
  { id: 'b4', title: 'IEEE Transactions on Pattern Analysis', status: 'PDF Access' }
];

const INITIAL_NOTICES: Notice[] = [
  { id: 'n1', text: 'Exam Schedule Released for Fall Semester', date: '2024-10-01' },
  { id: 'n2', text: 'Hackathon Winners Announced: Team CodeWarriors takes Gold!', date: '2024-10-05' },
  { id: 'n3', text: 'Guest Lecture by CEO of TechGlobal tomorrow at 10 AM', date: '2024-10-10' }
];

interface UniversityContextType {
  currentUser: User | null;
  users: User[];
  courses: Course[];
  programs: Program[];
  books: Book[];
  notices: Notice[];
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  addUser: (user: User) => void;
  submitAssignment: (courseId: string, assignmentId: string) => void;
}

const UniversityContext = createContext<UniversityContextType | undefined>(undefined);

export const UniversityProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [courses, setCourses] = useState<Course[]>(generateAllCourses());
  const [programs] = useState<Program[]>(MASTER_PROGRAMS);
  const [books] = useState<Book[]>(INITIAL_BOOKS);
  const [notices] = useState<Notice[]>(INITIAL_NOTICES);

  const login = (email: string, pass: string) => {
    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const submitAssignment = (courseId: string, assignmentId: string) => {
    setCourses(prevCourses => prevCourses.map(course => {
      if (course.id !== courseId) return course;
      return {
        ...course,
        assignments: course.assignments.map(a => 
          a.id === assignmentId ? { ...a, status: 'Submitted' } : a
        )
      };
    }));
  };

  return (
    <UniversityContext.Provider value={{ currentUser, users, courses, programs, books, notices, login, logout, addUser, submitAssignment }}>
      {children}
    </UniversityContext.Provider>
  );
};

export const useUniversity = () => {
  const context = useContext(UniversityContext);
  if (!context) throw new Error('useUniversity must be used within UniversityProvider');
  return context;
};