import useSWR from 'swr';

type ProductListFetcherProps = {
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
    throw new Error(errorData.message || 'Error fetching product data');
  }

  return response.json();
};

export const useProductList = ({
  page,
  rowsPerPage,
  params,
}: ProductListFetcherProps) => {
  const paramsString =
    params.toString() && params.toString() !== '[object Object]'
      ? `&${params.toString()}`
      : '';
  const key = `/api/v1/products?page=${page}&limit=${rowsPerPage}${paramsString}`;

  const { data, error, isLoading, mutate } = useSWR(key, fetcher);

  return {
    data: data?.data.products || [],
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
    throw new Error(errorData.message || 'Error fetching product data');
  }

  return response.json();
};

export const useProductById = (id: number) => {
  const key = `/api/v1/products/${id}`;

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
    throw new Error(errorData.message || 'Error delete product data');
  }

  return response.json();
};

export const useProductDelete = (id: number) => {
  const key = id ? `/api/v1/products/${id}` : null;

  const { data, error, mutate } = useSWR(key, deleter, {
    revalidateOnMount: false,
  });

  return {
    data: data?.data.products || [],
    isDataLoading: !error && !data,
    isDataError: error,
    deleteProduct: () => mutate(),
  };
};
