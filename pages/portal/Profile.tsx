import React, { useState } from 'react';
import { PortalLayout } from '../../components/PortalLayout';
import { useUniversity } from '../../context/UniversityContext';
import { User, Mail, Phone, MapPin, Camera, Save, X, FileText, Trash2, Upload, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Profile = () => {
  const { currentUser } = useUniversity();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'documents'>('details');
  
  const [profile, setProfile] = useState({
    phone: '+1 (555) 012-3456',
    address: '456 Campus Avenue, Dorm B, Room 304',
    bio: 'Passionate about Artificial Intelligence and Cloud Computing. Member of the Debate Club.',
    github: 'github.com/ramsharma',
    linkedin: 'linkedin.com/in/ramsharma'
  });

  const [documents, setDocuments] = useState([
    { id: 1, name: 'High School Transcript.pdf', date: '2023-08-15', status: 'Verified' },
    { id: 2, name: 'Identity Proof.jpg', date: '2023-08-16', status: 'Verified' },
    { id: 3, name: 'Medical Certificate.pdf', date: '2024-01-10', status: 'Pending' }
  ]);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleDeleteDoc = (id: number) => {
    if(window.confirm('Are you sure you want to delete this document?')) {
        setDocuments(docs => docs.filter(d => d.id !== id));
    }
  };

  const handleUpload = () => {
    const newDoc = {
        id: Date.now(),
        name: 'New_Upload_' + Math.floor(Math.random() * 1000) + '.pdf',
        date: new Date().toISOString().split('T')[0],
        status: 'Pending'
    };
    setDocuments([...documents, newDoc]);
  };

  return (
    <PortalLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#1E2A44]">My Profile</h1>
            <p className="text-gray-500">Manage your personal information and settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden text-center p-8">
                    <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#E3B23C] to-[#F4D35E] rounded-full flex items-center justify-center text-[#1E2A44] text-4xl font-bold border-4 border-white shadow-lg mx-auto">
                            {currentUser?.name.charAt(0)}
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-[#2F5DFF] text-white rounded-full shadow-md hover:bg-blue-600 transition-colors">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#1E2A44]">{currentUser?.name}</h2>
                    <p className="text-gray-500 font-medium">{currentUser?.role}</p>
                    <p className="text-xs text-gray-400 mt-1">ID: {currentUser?.id.toUpperCase()}</p>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-3 text-sm text-left">
                        <div className="flex items-center text-gray-600">
                            <Mail className="w-4 h-4 mr-3 text-[#2F5DFF]" />
                            {currentUser?.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                            <User className="w-4 h-4 mr-3 text-[#2F5DFF]" />
                            {currentUser?.department || currentUser?.course || 'General'}
                        </div>
                    </div>
                </div>
            </div>
<div className="lg:col-span-2">
<div className="bg-white rounded-t-2xl border-b border-gray-200 px-6 pt-4 flex gap-6">
                    <button 
                        onClick={() => setActiveTab('details')}
                        className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'details' ? 'text-[#2F5DFF]' : 'text-gray-500'}`}
                    >
                        Personal Details
                        {activeTab === 'details' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2F5DFF]" />}
                    </button>
                    {currentUser?.role === 'student' && (
                        <button 
                            onClick={() => setActiveTab('documents')}
                            className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === 'documents' ? 'text-[#2F5DFF]' : 'text-gray-500'}`}
                        >
                            Documents
                            {activeTab === 'documents' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2F5DFF]" />}
                        </button>
                    )}
                </div>

                <div className="bg-white rounded-b-2xl shadow-sm border border-gray-200 p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === 'details' ? (
                            <motion.div
                                key="details"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-[#1E2A44] text-lg">Contact Information</h3>
                                    {!isEditing ? (
                                        <button 
                                            onClick={() => setIsEditing(true)}
                                            className="text-sm font-medium text-[#2F5DFF] hover:underline"
                                        >
                                            Edit Details
                                        </button>
                                    ) : (
                                        <div className="flex gap-2">
                                            <button onClick={() => setIsEditing(false)} className="p-2 text-red-500 hover:bg-red-50 rounded"><X className="w-4 h-4"/></button>
                                            <button onClick={handleSave} className="p-2 text-green-500 hover:bg-green-50 rounded"><Save className="w-4 h-4"/></button>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField 
                                            label="Phone Number" 
                                            value={profile.phone} 
                                            isEditing={isEditing} 
                                            onChange={(v) => setProfile({...profile, phone: v})}
                                            icon={Phone}
                                        />
                                        <InputField 
                                            label="Location" 
                                            value={profile.address} 
                                            isEditing={isEditing} 
                                            onChange={(v) => setProfile({...profile, address: v})}
                                            icon={MapPin}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                        {isEditing ? (
                                            <textarea 
                                                value={profile.bio}
                                                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2F5DFF] outline-none"
                                                rows={4}
                                            />
                                        ) : (
                                            <p className="text-gray-600 text-sm leading-relaxed">{profile.bio}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="docs"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-bold text-[#1E2A44] text-lg">My Documents</h3>
                                    <button 
                                        onClick={handleUpload}
                                        className="flex items-center gap-2 text-sm bg-[#2F5DFF] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                    >
                                        <Upload className="w-4 h-4" /> Upload New
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {documents.map((doc) => (
                                        <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                                            <div className="flex items-center">
                                                <div className="p-3 bg-indigo-50 text-[#2F5DFF] rounded-lg mr-4">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-[#1E2A44] text-sm">{doc.name}</p>
                                                    <p className="text-xs text-gray-500">Uploaded on {doc.date}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                                    doc.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {doc.status}
                                                </span>
                                                <button 
                                                    onClick={() => handleDeleteDoc(doc.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    {documents.length === 0 && <p className="text-center text-gray-400 py-8">No documents uploaded yet.</p>}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </div>
    </PortalLayout>
  );
};

const InputField = ({ label, value, isEditing, onChange, icon: Icon }: any) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            {Icon && <Icon className="w-3 h-3 mr-2" />} {label}
        </label>
        {isEditing ? (
            <input 
                type="text" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2F5DFF] outline-none text-sm"
            />
        ) : (
            <p className="text-gray-900 font-medium text-sm p-2.5 bg-gray-50 rounded-lg border border-transparent">{value}</p>
        )}
    </div>
);
