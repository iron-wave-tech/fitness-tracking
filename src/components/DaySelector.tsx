import React from 'react';

interface DaySelectorProps {
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, onDaySelect }) => {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Select Workout Day</h2>
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5, 6].map((day) => (
          <button
            key={day}
            onClick={() => onDaySelect(day)}
            className={`
              py-4 px-6 rounded-xl font-semibold text-center transition-all duration-200
              ${selectedDay === day
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-[1.02]'
              }
              shadow-md
            `}
          >
            Day {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector; 