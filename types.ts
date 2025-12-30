export interface User {
  id: string;
  name: string;
  role: 'admin' | 'teacher' | 'student';
  email: string;
  password?: string; // In a real app, never store plain text passwords
  department?: string;
  programId?: string; // Links to Program.id
  semester?: number;
  course?: string; // Display name for the course/program
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'pptx' | 'video';
  url: string;
}

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Graded';
}

export interface Exam {
  id: string;
  subject: string;
  date: string;
  status: 'Scheduled' | 'Completed';
}

export interface Course {
  id: string;
  code: string;
  title: string;
  facultyName: string;
  description: string;
  resources: Resource[];
  assignments: Assignment[];
  exams: Exam[];
  credits?: number; // From new data
  semester?: number | string; // From new data
}

export interface Book {
  id: string;
  title: string;
  author?: string;
  status: 'Available' | 'Checked Out' | 'PDF Access';
}

export interface Notice {
  id: string;
  text: string;
  date: string;
}

// New Types for Master Data
export interface ProgramSubject {
  code: string;
  name: string;
  semester: number | string;
  credits: number;
}

export interface Program {
  id: string;
  title: string;
  category: string; // This acts as the School Name
  duration: string;
  level: string;
  description: string;
  pedagogy?: string; // New field for teaching methodology
  subjects: ProgramSubject[];
}