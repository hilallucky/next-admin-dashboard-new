// hooks/useList.ts
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useList = () => {
  const { data, error, mutate } = useSWR<any[]>('/api/v1/suppliers', fetcher);

  //   console.log({ data: data?.data?.suppliers });

  return {
    list: data?.data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
