import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Upload, ChevronRight, BookOpen, User, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Apply = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    highSchool: '',
    gpa: '',
    essay: ''
  });

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepComplete = (idx: number) => step > idx;
  const isCurrentStep = (idx: number) => step === idx;

  return (
    <div className="min-h-screen bg-gray-50 flex">
<div className="hidden lg:block w-1/3 bg-[#1E2A44] text-white p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2F5DFF] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-6">Start Your Application</h1>
        <p className="text-gray-300 mb-12">
          Complete the steps below to join the Class of 2028. Our admissions team reviews applications on a rolling basis.
        </p>

        <div className="space-y-8 relative z-10">
          <StepIndicator number={1} title="Personal Details" desc="Basic info and contact" active={isCurrentStep(1)} complete={isStepComplete(1)} />
          <StepIndicator number={2} title="Academic History" desc="Grades and schools" active={isCurrentStep(2)} complete={isStepComplete(2)} />
          <StepIndicator number={3} title="Documents" desc="Transcripts & ID" active={isCurrentStep(3)} complete={isStepComplete(3)} />
          <StepIndicator number={4} title="Review & Submit" desc="Final check" active={isCurrentStep(4)} complete={isStepComplete(4)} />
        </div>
      </div>
<div className="flex-1 p-6 md:p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto pt-8">
            <Link to="/" className="lg:hidden inline-flex items-center text-gray-500 mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>

            <div className="lg:hidden mb-8 flex justify-between px-2">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-2 flex-1 mx-1 rounded-full ${i <= step ? 'bg-[#2F5DFF]' : 'bg-gray-200'}`}></div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#1E2A44] mb-2">Personal Details</h2>
                            <p className="text-gray-500 mb-8">Tell us about yourself.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="First Name" placeholder="Rahul" />
                                <Input label="Last Name" placeholder="Sharma" />
                            </div>
                            <Input label="Email Address" type="email" placeholder="rahul@example.com" />
                            <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Date of Birth</label>
                                <input type="date" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all text-gray-900" />
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#1E2A44] mb-2">Academic History</h2>
                            <p className="text-gray-500 mb-8">Your educational background.</p>

                            <Input label="School Name" placeholder="Delhi Public School" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="Completion Year" placeholder="2024" type="number" />
                                <Input label="Percentage / CGPA" placeholder="95%" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700">Program of Interest</label>
                                <select className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all text-gray-900">
                                    <option>B.Tech Computer Science</option>
                                    <option>B.Des Fashion Design</option>
                                    <option>BBA Management</option>
                                    <option>B.A. Psychology</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#1E2A44] mb-2">Documents</h2>
                            <p className="text-gray-500 mb-8">Upload scanned copies. Max 5MB each.</p>

                            <FileUpload label="Class 12th Marksheet" />
                            <FileUpload label="Letter of Recommendation" />
                            <FileUpload label="Aadhar Card / ID Proof" />
                        </div>
                    )}

                    {step === 4 && (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#1E2A44] mb-4">Ready to Submit?</h2>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                Please review your information before submitting. Once submitted, you cannot make changes to your primary application.
                            </p>
                            <div className="bg-white p-6 rounded-xl text-left mb-8 text-sm text-gray-700 border border-gray-200 shadow-sm">
                                <p className="mb-2"><strong>Name:</strong> Rahul Sharma</p>
                                <p className="mb-2"><strong>Program:</strong> B.Tech Computer Science</p>
                                <p><strong>Documents:</strong> 3 Uploaded</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
<div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200">
                <button 
                    onClick={handlePrev}
                    disabled={step === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
                >
                    Back
                </button>
                
                <button 
                    onClick={step === totalSteps ? () => alert("Application Submitted!") : handleNext}
                    className="px-8 py-3 bg-[#2F5DFF] text-white rounded-lg font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all flex items-center hover:scale-105"
                >
                    {step === totalSteps ? 'Submit Application' : 'Continue'}
                    {step !== totalSteps && <ChevronRight className="w-4 h-4 ml-2" />}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const StepIndicator = ({ number, title, desc, active, complete }: { number: number, title: string, desc: string, active: boolean, complete: boolean }) => (
    <div className={`flex items-start transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-50'}`}>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 border-2 transition-colors ${
            complete ? 'bg-green-500 border-green-500 text-white' : 
            active ? 'bg-[#E3B23C] border-[#E3B23C] text-[#1E2A44]' : 'border-gray-500 text-gray-500'
        }`}>
            {complete ? <CheckCircle className="w-6 h-6" /> : <span className="font-bold">{number}</span>}
        </div>
        <div className="mt-1">
            <h3 className={`font-bold text-lg ${active ? 'text-white' : 'text-gray-300'}`}>{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    </div>
);

const Input = ({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) => (
    <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700">{label}</label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5DFF]/50 focus:border-[#2F5DFF] outline-none transition-all text-gray-900 placeholder:text-gray-400" 
        />
    </div>
);

const FileUpload = ({ label }: { label: string }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#2F5DFF] hover:bg-indigo-50/30 transition-all cursor-pointer group bg-white">
        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#2F5DFF]/10 transition-colors">
            <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#2F5DFF]" />
        </div>
        <p className="text-sm font-bold text-gray-700 mb-1">{label}</p>
        <p className="text-xs text-gray-400">Drag & drop or click to upload</p>
    </div>
);