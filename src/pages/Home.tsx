import { useCallback } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useCityInput } from '../hooks/useCityInput';
import { usePassengersInput } from '../hooks/usePassengersInput';
import { useDateInput } from '../hooks/useDateInput';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import PassengersInput from '../components/PassengersInput';
import DateInput from '../components/DateInput';
import VerticalStepper from '../components/VerticalStepper';

function HomePage() {
  const {
    values,
    inputValues,
    options,
    errors,
    loadings,
    onChange,
    onInputChange,
    getOptionLabel,
    handleAddDestination,
    handleRemoveDestination,
  } = useCityInput();

  const passengersInputProps = usePassengersInput();
  const dateInputProps = useDateInput();

  const shouldRenderRemoveButton = useCallback(
    (index: number) => index >= 1 && values.length >= 3,
    [values],
  );

  return (
    <PageContainer>
      <ContentContainer>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box display="flex">
              <Box mr={3} mt={3} mb={5}>
                <VerticalStepper length={values.length} />
              </Box>
              <Box width="100%">
                {values.map((value, index) => (
                  <CityInput
                    key={index}
                    index={index}
                    value={value}
                    inputValue={inputValues[index]}
                    options={options[index]}
                    error={errors[index]}
                    isLoading={loadings[index]}
                    label={
                      index === 0 ? 'City of origin' : 'City of destination'
                    }
                    onChange={onChange}
                    onInputChange={onInputChange}
                    getOptionLabel={getOptionLabel}
                    removeDestination={
                      shouldRenderRemoveButton(index)
                        ? handleRemoveDestination
                        : undefined
                    }
                  />
                ))}
              </Box>
            </Box>

            <Box display="flex" alignItems="center">
              <Box mr={3}>
                <AddCircleOutline color="primary" />
              </Box>

              <Button variant="text" onClick={handleAddDestination}>
                Add destination
              </Button>
            </Box>
          </Grid>
          <Box
            component={Grid}
            item
            xs={1}
            display={{ xs: 'block', md: 'none' }}
          />
          <Grid item xs={11} md={4}>
            <Grid container>
              <Grid item xs={6} md={12}>
                <PassengersInput {...passengersInputProps} />
              </Grid>
              <Grid item xs={6} md={12}>
                <DateInput {...dateInputProps} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
}

export default HomePage;
