import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface FormData {
  name: string;
  email: string;
}

const TablePage = () => {
  const [data, setData] = useState<FormData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedData = sessionStorage.getItem('formData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>Table Page</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default TablePage;
