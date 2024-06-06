// import React from 'react';

// interface ChipProps {
//     label: string;
//     className?: string;
// }

// const Chip: React.FC<ChipProps> = ({ label, className = '' }) => {
//     return <span className={`px-2 py-1 bg-gray-200 rounded-full ${className}`}>{label}</span>;
// };

// export default Chip;

import React from 'react';

interface ChipProps {
  label: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ label, className = '' }) => {
  return (
    <span className={`px-2 py-1 bg-gray-200 rounded-full text-sm ${className}`}>
      {label}
    </span>
  );
};

export default Chip;
