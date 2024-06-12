type SupplierList = {
  page: number;
  rowsPerPage: number;
  params: any;
  setIsLoading: any;
  setIsErrorPage: any;
};

const getSupplierListFetcher = async ({
  page,
  rowsPerPage,
  params,
  setIsLoading,
  setIsErrorPage,
}: SupplierList) => {
  try {
    const response = await fetch(
      `/api/v1/suppliers?page=${page}&limit=${rowsPerPage}${params.toString() ? '&' + params.toString() : ''}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    setIsErrorPage(error);
  } finally {
    setIsLoading(false);
  }
};

export default getSupplierListFetcher;
