import React, { useState } from 'react';

interface FilterProps {
  onSearch: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-md"
        placeholder="Search suppliers..."
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
