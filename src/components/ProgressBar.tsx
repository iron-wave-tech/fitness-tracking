import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Progress</span>
        <span className="text-sm font-medium text-gray-600">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar; 