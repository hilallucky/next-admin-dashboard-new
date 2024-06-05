import React from 'react';

interface LinearProgressProps {
    progress: number;
    className?: string;
}

const LinearProgress: React.FC<LinearProgressProps> = ({ progress, className = '' }) => {
    return (
        <div className={`w-full bg-gray-200 rounded ${className}`}>
            <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default LinearProgress;
