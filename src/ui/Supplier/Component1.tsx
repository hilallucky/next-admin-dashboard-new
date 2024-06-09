import React, { useState } from 'react';

interface Component1Props {
  onSubmit: (name: string, color: string) => void;
}

const Component1: React.FC<Component1Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(name, color);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={handleNameChange} />
      <select name="color" value={color} onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Component1;
