import React from 'react';

export const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-[#E3B23C] border-t-[#2F5DFF] rounded-full animate-spin mb-4"></div>
        <p className="text-[#1E2A44] font-semibold animate-pulse">Loading Experience...</p>
      </div>
    </div>
  );
};