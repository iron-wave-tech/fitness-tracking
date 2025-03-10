'use client';

import { useState } from 'react';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressBar from '@/components/ProgressBar';
import DaySelector from '@/components/DaySelector';

const workoutProgram = {
  1: [
    {
      name: 'UPPER BACK',
      setsReps: '3 X 12',
      recovery: '1\'',
      group: 'Shoulders'
    },
    {
      name: 'LATERAL RAISES',
      setsReps: '3 X 8',
      recovery: '1\'',
      group: 'Shoulders'
    },
    {
      name: 'HYPEREXTENSION WITH DISC + ROW',
      setsReps: '3 X 12',
      recovery: '1\'',
      group: 'Shoulders'
    },
    {
      name: 'LOW PULLEY WITH TRAZY BAR',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Lower Back'
    },
    {
      name: 'T-BAR',
      setsReps: '3 X 8',
      recovery: '1\'',
      group: 'Lower Back'
    },
    {
      name: 'PULL DOWN WITH BAR',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Lower Back'
    },
    {
      name: 'ROMANIAN DEADLIFT WITH MULTI',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Lower Back'
    },
    {
      name: 'BALANCED ROW WITH STRETCH GRIP WITH MULTI',
      setsReps: '3 X 12',
      recovery: '1\'',
      group: 'Lower Back'
    }
  ],
  2: [
    {
      name: 'SQUAT',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Legs'
    },
    {
      name: 'PRESS',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Legs'
    },
    {
      name: 'LEG EXTENSION',
      setsReps: '4 X 15 CON 2" ISO',
      recovery: '1\'',
      group: 'Legs'
    },
    {
      name: 'LEG CURL',
      setsReps: '4 X 12 CON 2" ISO',
      recovery: '1\'',
      group: 'Hamys'
    },
    {
      name: 'LAT WITH PRESS',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Chest'
    },
    {
      name: 'ISO MIX CROSSES',
      setsReps: '4 X 5+5+5',
      recovery: '1\'',
      group: 'Chest'
    },
    {
      name: 'CLOSE CHEST PRESS',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Chest'
    }
  ],
  3: [
    {
      name: 'HIGH PULLEY WITH TRAZY BAR',
      setsReps: '4 X 8',
      recovery: '1\'',
      group: 'Back'
    },
    {
      name: 'LOW PULLEY WITH FORWARD BENDING TORSO',
      setsReps: '4 X 8',
      recovery: '1\'',
      group: 'Back'
    },
    {
      name: 'PUSH DOWN WITH BAR',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Triceps'
    },
    {
      name: 'FLAT BENCH WITH BALANCED CLOSE GRIP',
      setsReps: '3 X 8',
      recovery: '1\'',
      group: 'Triceps'
    },
    {
      name: 'PUSH DOWN WITH ROPES',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Triceps'
    },
    {
      name: 'BARREL CURL',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Biceps'
    },
    {
      name: 'DUMBBELL CURL INVERTED BENCH 30',
      setsReps: '3 X 12',
      recovery: '1\'',
      group: 'Biceps'
    },
    {
      name: 'LOW CABLE HAMMER SINGLE',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Biceps'
    }
  ],
  4: [
    {
      name: 'BARREL DEADLIFTS',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Hamys'
    },
    {
      name: 'BARBELL ROMANIAN DEADLIFTS',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Hamys'
    },
    {
      name: 'CHEST PRESS',
      setsReps: '4 X 15',
      recovery: '1\'',
      group: 'Chest'
    },
    {
      name: 'DUMBBELL PRESSES BENCH 30',
      setsReps: '10/8/6/4',
      recovery: '90"',
      group: 'Chest'
    },
    {
      name: 'FLAT BENCH MULTIPOWER',
      setsReps: '3 X 10',
      recovery: '1\'',
      group: 'Chest'
    },
    {
      name: 'PECTORAL',
      setsReps: '3 X 12',
      recovery: '1\'',
      group: 'Chest'
    },
    {
      name: 'LOW CABLE CROSSOVER LATERAL RAISES',
      setsReps: '4 X 8',
      recovery: '1\'',
      group: 'Shoulders'
    },
    {
      name: 'LATERAL RAISES',
      setsReps: '4 X 8',
      recovery: '1\'',
      group: 'Shoulders'
    },
    {
      name: 'REVERSE FLY BENCH 45 DUMBBELL',
      setsReps: '4 X 12',
      recovery: '1\'',
      group: 'Shoulders'
    }
  ],
  5: [  // Push Day 1
    {
      name: 'LEG RAISE',
      setsReps: '4 X 10 10" 10 10" 10',
      recovery: '1\'',
      group: 'Push 1'
    },
    {
      name: 'BARREL SIT UP',
      setsReps: '4 X 12/15',
      recovery: '1\'',
      group: 'Push 1'
    },
    {
      name: 'OBLIQUE CRUNCH INCLINE BENCH',
      setsReps: '4 X 15 X LATO',
      recovery: '1\'',
      group: 'Push 1'
    }
  ],
  6: [  // Push Day 2 & 3
    {
      name: 'REVERSE CRUNCH',
      setsReps: '4 X 10 10" 10 10" 10',
      recovery: '1\'',
      group: 'Push 2'
    },
    {
      name: 'PLANK',
      setsReps: '4 X 15',
      recovery: '1\'',
      group: 'Push 2'
    },
    {
      name: 'WHEEL',
      setsReps: '3 X 60"',
      recovery: '1\'',
      group: 'Push 3'
    }
  ]
};

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const currentWorkout = workoutProgram[selectedDay as keyof typeof workoutProgram] || [];

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setCurrentExercise(0);
    setWorkoutStarted(false);
    setShowCongrats(false);
  };

  const handleNext = () => {
    if (currentExercise < currentWorkout.length - 1) {
      setCurrentExercise(currentExercise + 1);
    }
  };

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const handleStartWorkout = () => {
    setWorkoutStarted(true);
    setShowCongrats(false);
  };

  const handleFinishWorkout = () => {
    setShowCongrats(true);
  };

  const handleHome = () => {
    setWorkoutStarted(false);
    setCurrentExercise(0);
    setShowCongrats(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Fitness Tracker
        </h1>

        {!workoutStarted ? (
          <>
            <DaySelector selectedDay={selectedDay} onDaySelect={handleDaySelect} />
            <div className="flex justify-center">
              <button
                onClick={handleStartWorkout}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Start Workout
              </button>
            </div>
          </>
        ) : showCongrats ? (
          <div className="text-center space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                🎉 Workout Complete! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Great job completing your Day {selectedDay} workout!
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleHome}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleHome}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                ← Home
              </button>
              <h2 className="text-2xl font-semibold text-gray-700">Day {selectedDay}</h2>
              <div className="w-16"></div> {/* Spacer for alignment */}
            </div>
            
            <ProgressBar 
              current={currentExercise + 1} 
              total={currentWorkout.length} 
            />

            <WorkoutCard exercise={currentWorkout[currentExercise]} />

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentExercise === 0}
                className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
              {currentExercise === currentWorkout.length - 1 ? (
                <button
                  onClick={handleFinishWorkout}
                  className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                >
                  Finish Workout
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
} 