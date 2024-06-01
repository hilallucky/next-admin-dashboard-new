import { useRouter } from 'next/router';

interface StatusProps {
  statusx: string;
  page: string;
}

const Status: React.FC<StatusProps> = ({ statusx, page }) => {
  const router = useRouter();
  const { status } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        {status === 'success' ? 'Success!' : 'Error!'}
      </h1>
      <p>
        {status === 'success'
          ? 'Supplier saved successfully.'
          : 'There was an error saving the supplier.'}
      </p>
      <button
        onClick={() => router.push(`/${page}`)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm mt-4"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Status;
