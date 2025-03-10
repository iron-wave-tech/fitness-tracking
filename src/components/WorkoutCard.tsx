import React from 'react';

interface WorkoutCardProps {
  exercise: {
    name: string;
    setsReps: string;
    recovery?: string;
    group: string;
  };
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ exercise }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full mx-auto transform transition-all duration-300 hover:scale-[1.02]">
      <div className="mb-4">
        <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">{exercise.group}</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{exercise.name}</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Sets / Repetitions</span>
          <span className="text-gray-800 font-semibold">{exercise.setsReps}</span>
        </div>
        {exercise.recovery && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Recovery</span>
            <span className="text-gray-800 font-semibold">{exercise.recovery}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard; 