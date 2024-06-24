import { useState, useEffect, FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';

interface FormData {
  name: string;
  email: string;
  isEdited?: boolean;
  index?: number;
}

const Home = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    isEdited: false,
  });
  const [data, setData] = useState<FormData[]>([]);
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData');
    if (storedData) {
      setData(JSON.parse(storedData));
      sessionStorage.removeItem('formData');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isEmailDuplicate = (email: string) => {
    return data.some((item) => item.email === email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEmailDuplicate(formData.email)) {
      setError('Email is already in use. Please use a different email.');
      return;
    }

    const updatedData = formData.isEdited
      ? data.map((item, index) => (index === formData.index ? formData : item))
      : [...data, { ...formData, isEdited: false }];

    setData(updatedData);
    setFormData({ name: '', email: '', isEdited: false });
    setError('');

    nameInputRef.current?.focus();
  };

  const handleNextPage = () => {
    sessionStorage.setItem('formData', JSON.stringify(data));
    router.push('/dashboard/input-table/table');
  };

  const handleRowClick = (item: FormData, index: number) => {
    setFormData({ ...item, isEdited: true, index });
    nameInputRef.current?.focus();
  };

  const handleDelete = (index: number) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const handleClearAll = () => {
    setData([]);
  };

  return (
    <div>
      <h1>Input Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            ref={nameInputRef}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{formData.isEdited ? 'Update' : 'Submit'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(item, index)}
              style={{ cursor: 'pointer' }}
            >
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.isEdited ? 'Edited' : 'New'}</td>
              <td>
                <button onClick={() => handleRowClick(item, index)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleNextPage}>Go to Table Page</button>
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
};

export default Home;
