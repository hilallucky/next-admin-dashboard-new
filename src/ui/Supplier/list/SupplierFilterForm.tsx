import { useContext, useEffect, useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormLabel,
  Grid,
  MenuItem,
} from '@mui/material';
import { useRouter } from 'next/router';

import { Form } from 'react-final-form';

import { SelectMultiple } from '_/components/input';
import { WithFeature } from '_/components/input/WithFeature';
import { Checkbox } from '_components/input/Checkbox/Checkbox';
import { DateTimePicker } from '_components/input/DateTimePicker/DateTimePicker';
import { Radio } from '_components/input/Radio/Radio';
import { Select } from '_components/input/Select/Select';
import { TextField } from '_components/input/TextField/TextField';
import {
  APPLICATION_NAME_PROMO,
  businessType,
  featureFlagCollections,
} from '_constants/index';
import { PromoCodeListContext } from '_contexts/index';
import { usePromoDiscountTier, usePromoProductList } from '_fetchers/index';

import { PromoCodeFilterFormValidation } from './PromoCodeFilterFormValidation';

export const PromoCodeFilterForm = () => {
  const router = useRouter();
  const { isFilterOpen, setFilterOpen, setDataFilter, dataFilter } =
    useContext(PromoCodeListContext);
  const [selectedTierID, setSelectedTierID] = useState('');
  const [selectedBusinessType, setSelectedBusinessType] = useState('');
  const [tierType, setTierType] = useState<any>([]);

  const resultProductList = usePromoProductList();
  const resultPromoDiscountTier = usePromoDiscountTier();

  const productList = resultProductList.data
    ? resultProductList.data.results.map((item) => ({
        value: item.name,
        label: item.tableLabel,
      }))
    : [];

  const productLabels: {
    [key: string]: string;
  } = Object.fromEntries(
    new Map(productList.map(({ value, label }) => [value, label])),
  );

  useEffect(() => {
    if (resultPromoDiscountTier.data && tierType.length < 1) {
      let promoDiscountTier = resultPromoDiscountTier.data
        ? resultPromoDiscountTier.data.results
        : [];

      promoDiscountTier = promoDiscountTier.map((item) => item.tierType) as any;
      promoDiscountTier = Array.from(new Set(promoDiscountTier));

      if (promoDiscountTier.length > 0) {
        setTierType(promoDiscountTier);
      }
    }
  }, [resultPromoDiscountTier, tierType]);

  const selectBusinessType = (form, value) => {
    setSelectedBusinessType(value);
  };

  const handleCloseFilter = () => {
    setFilterOpen(false);
  };

  const onSubmit = (values: any) => {
    const data = {
      ...dataFilter,
      ...values,
      page: 1,
    };

    Object.keys(data).forEach((key) => {
      if (!data[key] || data[key].length == 0) {
        delete data[key];
      }
    });

    const queryString = new URLSearchParams(data).toString();
    router.push(`?${queryString}`);
    setFilterOpen(false);
  };

  return (
    <>
      <Dialog open={isFilterOpen} onClose={handleCloseFilter}>
        <DialogTitle>Promo Code Filter</DialogTitle>
        <DialogContent>
          <Form
            validate={PromoCodeFilterFormValidation}
            initialValues={dataFilter}
            onSubmit={onSubmit}
            render={({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Promo Code</FormLabel>
                  </Box>
                  <TextField sx={{ mt: 2 }} name="code" fullWidth />

                  <WithFeature
                    applicationName={APPLICATION_NAME_PROMO}
                    for={featureFlagCollections.BACKOFFICE_CUSTOM_CAMPAIGN_CODE}
                  >
                    <Box sx={{ mt: 2 }}>
                      <FormLabel>Custom Campaign Code</FormLabel>
                    </Box>

                    <TextField
                      sx={{ mt: 2 }}
                      name="customCampaignCode"
                      fullWidth
                    />
                  </WithFeature>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Products</FormLabel>
                  </Box>
                  <SelectMultiple name="products" items={productList} />

                  <Grid container direction={'row'} sx={{ mt: 2 }}>
                    <Grid item sm={6}>
                      <FormLabel id="demo-controlled-radio-buttons-group">
                        Tier
                      </FormLabel>
                      <Box>
                        <Radio
                          name="discountTierId"
                          value="1"
                          label="T1"
                          onValueUpdate={setSelectedTierID}
                        />
                        <Radio
                          name="discountTierId"
                          value="2"
                          label="T2"
                          onValueUpdate={setSelectedTierID}
                        />
                        <Radio
                          name="discountTierId"
                          value="3"
                          label="T3"
                          onValueUpdate={setSelectedTierID}
                        />
                      </Box>
                    </Grid>

                    <Grid item sm={6}>
                      <FormLabel id="demo-controlled-radio-buttons-group">
                        Layered with
                      </FormLabel>

                      <Box>
                        <Checkbox name="allowT1" label="T1" />
                        <Checkbox name="allowT2" label="T2" />
                        <Checkbox name="allowT3" label="T3" />
                      </Box>
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Business Type</FormLabel>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Select
                      items={businessType}
                      name="applicableTo"
                      onValueUpdate={(value) => selectBusinessType(form, value)}
                    />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Tier Type</FormLabel>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Select items={tierType} name="discountTierType" />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Valid Date Between</FormLabel>
                  </Box>
                  <Grid
                    container
                    direction={'row'}
                    sx={{ mt: 2 }}
                    columnSpacing={2}
                  >
                    <Grid item sm={6}>
                      <DateTimePicker name="validFrom" label="Valid from" />
                    </Grid>
                    <Grid item sm={6}>
                      <DateTimePicker name="validTo" label="Valid to" />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Promo Value Between</FormLabel>
                  </Box>
                  <Grid container direction={'row'} sx={{ mt: 2 }}>
                    <Grid item sm={5}>
                      <TextField
                        name="discountValueFrom"
                        label="From"
                        type="number"
                      />
                    </Grid>

                    <Grid item sm={2}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Grid>

                    <Grid item sm={5}>
                      <TextField
                        name="discountValueTo"
                        label="To"
                        type="number"
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Gift Between</FormLabel>
                  </Box>
                  <Grid container direction={'row'} sx={{ mt: 2 }}>
                    <Grid item sm={5}>
                      <TextField
                        name="voucherValueFrom"
                        label="From"
                        type="number"
                      />
                    </Grid>

                    <Grid item sm={2}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                        }}
                      >
                        <ArrowForwardIcon />
                      </Box>
                    </Grid>

                    <Grid item sm={5}>
                      <TextField
                        name="voucherValueTo"
                        label="To"
                        type="number"
                      />
                    </Grid>
                  </Grid>

                  <Box sx={{ mt: 2 }}>
                    <FormLabel>Show Only</FormLabel>
                  </Box>
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Checkbox name="includeUpcoming" label="Upcoming" />
                    <Checkbox name="includeActive" label="Active" />
                    <Checkbox name="includeExpired" label="Expired" />
                  </Box>

                  <Divider />

                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      sx={{ mt: 2, ml: 'auto' }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </form>
            )}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};