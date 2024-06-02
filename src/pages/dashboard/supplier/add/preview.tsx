import { useRouter } from 'next/router';

const Preview = ({ formValues }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push('/dashboard/supplier/add');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Preview</h1>
      <div className="mb-4">
        <strong>Full Name:</strong> {formValues.fullName}
      </div>
      <div className="mb-4">
        <strong>Address:</strong> {formValues.address}
      </div>
      <div className="mb-4">
        <strong>City:</strong> {formValues.city}
      </div>
      <div className="mb-4">
        <strong>Status:</strong> {formValues.status}
      </div>
      <div className="mb-4">
        <strong>Hobby:</strong>{' '}
        {Array.isArray(formValues.hobby)
          ? formValues.hobby.join(', ')
          : formValues.hobby}
      </div>
      <div className="mb-4">
        <strong>Friend List:</strong>
        <table className="w-full border border-gray-300 mt-2">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">City</th>
              <th className="p-2 border border-gray-300">Country</th>
            </tr>
          </thead>
          <tbody>
            {formValues.friendList &&
              (formValues.friendList as string).map((friend, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300">{friend.name}</td>
                  <td className="p-2 border border-gray-300">{friend.city}</td>
                  <td className="p-2 border border-gray-300">
                    {friend.country}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button
        className="p-2 bg-black text-white rounded"
        onClick={handleBack} //{() => router.push('/dashboard/supplier/add')}
      >
        Back
      </button>
    </div>
  );
};

export default Preview;
