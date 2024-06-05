import {
    Ref,
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useState,
  } from 'react';
  
  import { Edit, RemoveRedEye } from '@mui/icons-material';
  import {
    Box,
    Button,
    Chip,
    LinearProgress,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
  } from '@mui/material';
  import Link from 'next/link';
  import { useRouter } from 'next/router';
  
  import { Paginations } from '_/components/input/Paginations';
  import { WithFeature } from '_/components/input/WithFeature';
  import { APPLICATION_NAME_PROMO, featureFlagCollections } from '_/constants';
  import { DateFromToLabel } from '_components/input/DateFromToLabel';
  import { DateTimeLabel } from '_components/input/DateTimeLabel';
  
  import { PromoCodeListContext } from '../../../contexts';
  import { usePromoCodeList } from '../../../fetchers';
  import { PromoCode } from '../../../interfaces';
  
  const PromoCodeTable = forwardRef(
    (props: Record<string, unknown>, ref: Ref<{ refresh: () => void }>) => {
      const router = useRouter();
      const { query } = router;
  
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(30);
  
      const { dataFilter, setDataFilter } = useContext(PromoCodeListContext);
  
      const { data, isError, isLoading, mutate } = usePromoCodeList({
        ...dataFilter,
        page: page + 1,
        limit: rowsPerPage,
      });
  
      const handleChangePage = (event: unknown, newPage: number) => {
        const queryObject = {
          ...dataFilter,
          page: newPage + 1,
          limit: rowsPerPage,
        } as any;
  
        const queryString = new URLSearchParams(queryObject).toString();
        router.push(`?${queryString}`);
      };
  
      const handleChangePageNew = (event: unknown, newPage: number) => {
        const queryObject = {
          ...dataFilter,
          page: newPage,
          limit: rowsPerPage,
        } as any;
  
        const queryString = new URLSearchParams(queryObject).toString();
        router.push(`?${queryString}`);
      };
  
      useEffect(() => {
        const queryPage = query.page ? Number(query.page) - 1 : 0;
        const queryRowsPerPage = query.limit ? Number(query.limit) : 30;
        setPage(queryPage);
        setRowsPerPage(queryRowsPerPage);
        if (query.products) {
          query.products = query.products.toString().split(',');
        }
        setDataFilter({ ...query } as any);
      }, [query]);
  
      useImperativeHandle(ref, () => ({
        refresh() {
          mutate();
        },
      }));
  
      if (isError)
        return <Box sx={{ width: '100%', mt: 2 }}>Internal Server Error</Box>;
      if (isLoading)
        return (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        );
  
      return (
        <>
          <TableContainer sx={{ maxHeight: '75vh' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Product</b>
                  </TableCell>
                  <TableCell>
                    <b>Chanel</b>
                  </TableCell>
                  <TableCell>
                    <b>Code</b>
                  </TableCell>
  
                  <WithFeature
                    applicationName={APPLICATION_NAME_PROMO}
                    for={featureFlagCollections.BACKOFFICE_CUSTOM_CAMPAIGN_CODE}
                  >
                    <TableCell>
                      <b>Custom Campaign Code</b>
                    </TableCell>
                  </WithFeature>
  
                  <TableCell>
                    <b>Value</b>
                  </TableCell>
                  <TableCell>
                    <b>Gift</b>
                  </TableCell>
                  <TableCell>
                    <b>Layered With</b>
                  </TableCell>
                  <TableCell>
                    <b>Validity Date</b>
                  </TableCell>
                  <TableCell>
                    <b>Created Date</b>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.results.map((item: PromoCode) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Typography variant="h6" display="block" gutterBottom>
                            {item.productName}
                          </Typography>
  
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            {item.applicableTo}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          {item.discountTierType}
                          <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                          >
                            T{item.discountTierId}
                          </Typography>
                        </TableCell>
                        <TableCell>{item.frontendCode}</TableCell>
  
                        <WithFeature
                          applicationName={APPLICATION_NAME_PROMO}
                          for={
                            featureFlagCollections.BACKOFFICE_CUSTOM_CAMPAIGN_CODE
                          }
                        >
                          <TableCell>{item.customCampaignCode ?? ''}</TableCell>
                        </WithFeature>
  
                        <TableCell>
                          {item.discountValue
                            ? `${item.discountValue}${
                                item.discountType == 'PERCENTAGE' ? '%' : '$'
                              }`
                            : `-`}
                        </TableCell>
                        <TableCell>
                          {item.voucherValue ? `${item.voucherValue}$` : `-`}
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={2}>
                            {item.allowT1 && item.discountTierId !== 1 && (
                              <Chip label="T1" color="primary" />
                            )}
                            {item.allowT2 && item.discountTierId !== 2 && (
                              <Chip label="T2" color="primary" />
                            )}
                            {item.allowT3 && item.discountTierId !== 3 && (
                              <Chip label="T3" color="primary" />
                            )}
                            {!item.allowT1 && !item.allowT2 && !item.allowT3 && (
                              <Chip label="No Layer" color="default" />
                            )}
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <DateFromToLabel
                            dateFrom={item.validFrom}
                            dateTo={item.validTo}
                          />
                        </TableCell>
                        <TableCell>
                          <DateTimeLabel date={item.createdAt} />
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" spacing={2}>
                            <Link href={`/promo-code/view/${item.id}`}>
                              <Button
                                size="small"
                                variant="contained"
                                startIcon={<RemoveRedEye />}
                                color="success"
                              >
                                <a>View</a>
                              </Button>
                            </Link>
                            <Link href={`/promo-code/edit/${item.id}`}>
                              <Button
                                size="small"
                                variant="contained"
                                endIcon={<Edit />}
                                color="warning"
                              >
                                Edit
                              </Button>
                            </Link>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Paginations
            data={data}
            pageNew={page}
            rowsPerPage={rowsPerPage}
            handleChangePageNew={handleChangePageNew}
          />
        </>
      );
    },
  );
  PromoCodeTable.displayName = 'PromoCodeTable';
  export default PromoCodeTable;