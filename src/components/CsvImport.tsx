import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface CsvImportProps {
  onDataImport: (data: any) => void;
}

const CsvImport: React.FC<CsvImportProps> = ({ onDataImport }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        const workoutProgram: Record<number, any[]> = {};
        
        // Skip header row
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            // Split by comma and handle possible quotes
            const columns = line.split(',').map(item => item.trim().replace(/^"(.*)"$/, '$1'));
            
            if (columns.length >= 5) {
              const [workoutDay, workoutGroup, exerciseName, setsReps, restTime] = columns;
              
              const dayNumber = parseInt(workoutDay) || 1;

              if (!workoutProgram[dayNumber]) {
                workoutProgram[dayNumber] = [];
              }

              workoutProgram[dayNumber].push({
                name: exerciseName,
                group: workoutGroup,
                setsReps: setsReps,
                recovery: restTime
              });
            }
          }
        }
        
        onDataImport(workoutProgram);
      };
      reader.readAsText(file);
    }
  }, [onDataImport]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.csv']
    },
    multiple: false
  });

  return (
    <div className="space-y-8">
      <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">CSV Format Guide</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Your CSV should have these columns in order:</p>
          <ol className="list-decimal list-inside space-y-1 bg-gray-50 p-4 rounded-lg">
            <li>Workout Day (1-6)</li>
            <li>Workout Group (e.g., "Shoulders")</li>
            <li>Exercise Name</li>
            <li>Sets/Reps (e.g., "3 sets of 12 reps")</li>
            <li>Rest Time (e.g., "60 seconds")</li>
          </ol>
        </div>
      </div>

      <div 
        {...getRootProps()} 
        className={`
          border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          transition-all duration-200 max-w-md mx-auto
          ${isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-400'
          }
        `}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="text-4xl text-gray-400">
            📄
          </div>
          {isDragActive ? (
            <p className="text-blue-500 font-medium">Drop your CSV file here</p>
          ) : (
            <>
              <p className="text-gray-600 font-medium">
                Drag and drop your workout CSV file here
              </p>
              <p className="text-gray-400 text-sm">
                or click to select a file
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CsvImport; 