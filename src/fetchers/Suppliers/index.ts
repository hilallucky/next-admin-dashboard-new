import useSWR from 'swr';

type SupplierListFetcherProps = {
  page: number;
  rowsPerPage: number;
  params: URLSearchParams;
};

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error fetching supplier data');
  }

  return response.json();
};

export const useSupplierList = ({
  page,
  rowsPerPage,
  params,
}: SupplierListFetcherProps) => {
  const paramsString =
    params.toString() && params.toString() !== '[object Object]'
      ? `&${params.toString()}`
      : '';
  const key = `/api/v1/suppliers?page=${page}&limit=${rowsPerPage}${paramsString}`;

  const { data, error, isLoading, mutate } = useSWR(key, fetcher);

  console.log({
    data_pages: data?.data.totalPages,
    data_records: data?.data.totalRecords,
  });

  return {
    data: data?.data.suppliers || [],
    totalDataPages: data?.data.totalPages || 1,
    totalDataRecords: data?.data.totalRecords || 0,
    isDataLoading: !error && !data,
    isDataError: error,
    mutate,
  };
};
