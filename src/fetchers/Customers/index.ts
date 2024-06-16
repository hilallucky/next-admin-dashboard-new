import useSWR from 'swr';

type CustomerListFetcherProps = {
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
    throw new Error(errorData.message || 'Error fetching customer data');
  }

  return response.json();
};

export const useCustomerList = ({
  page,
  rowsPerPage,
  params,
}: CustomerListFetcherProps) => {
  const paramsString =
    params.toString() && params.toString() !== '[object Object]'
      ? `&${params.toString()}`
      : '';
  const key = `/api/v1/customers?page=${page}&limit=${rowsPerPage}${paramsString}`;

  const { data, error, isLoading, mutate } = useSWR(key, fetcher);

  return {
    data: data?.data.customers || [],
    totalDataPages: data?.data.totalPages || 1,
    totalDataRecords: data?.data.totalRecords || 0,
    isDataLoading: !error && !data,
    isDataError: error,
    mutate,
  };
};

const fetcherById = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error fetching customer data');
  }

  return response.json();
};

export const useCustomerById = (id: number) => {
  const key = `/api/v1/customers/${id}`;

  const { data, error, isLoading, mutate } = useSWR(key, fetcherById);

  return {
    data: data?.data || '',
    isDataLoading: !error && !data,
    isDataError: error,
    mutate,
  };
};

const deleter = async (url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error delete customer data');
  }

  return response.json();
};

export const useCustomerDelete = (id: number) => {
  const key = id ? `/api/v1/customers/${id}` : null;

  const { data, error, mutate } = useSWR(key, deleter, {
    revalidateOnMount: false,
  });

  return {
    data: data?.data.customers || [],
    isDataLoading: !error && !data,
    isDataError: error,
    deleteCustomer: () => mutate(),
  };
};
