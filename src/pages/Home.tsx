import { useEffect, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Button, Grid } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { useCityInput } from '../hooks/useCityInput';
import { usePassengersInput } from '../hooks/usePassengersInput';
import { useDateInput } from '../hooks/useDateInput';
import { parseSearchParams } from '../utils/searchParams';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import PassengersInput from '../components/PassengersInput';
import DateInput from '../components/DateInput';
import VerticalStepper from '../components/VerticalStepper';

function HomePage() {
  const INITIAL_DATE = dayjs();
  const INITIAL_PASSENGERS = 1;

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const isDesktop = useMediaQuery('(min-width:900px)');

  const passengersInputProps = usePassengersInput(INITIAL_PASSENGERS);
  const dateInputProps = useDateInput(INITIAL_DATE);
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

  useEffect(() => {
    const { passengers, date } = parseSearchParams(searchParams);
    !passengers && searchParams.set('passengers', `${INITIAL_PASSENGERS}`);
    !date && searchParams.set('date', INITIAL_DATE.toJSON());
    setSearchParams(searchParams);
    // dependencies intentionally empty to run only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shouldRenderRemoveButton = useCallback(
    (index: number) => index >= 1 && values.length >= 3,
    [values],
  );

  const passengersIsValid = useMemo(
    () => passengersInputProps.value >= 1,
    [passengersInputProps.value],
  );

  const dateIsValid = useMemo(
    () => dateInputProps.value?.isValid(),
    [dateInputProps.value],
  );

  const citiesAreValid = useMemo(
    () => values.every((value) => !!value),
    [values],
  );

  const handleSubmit = useCallback(() => {
    if (passengersIsValid && dateIsValid && citiesAreValid) {
      navigate({
        pathname: 'results',
        search: searchParams.toString(),
      });
    }
  }, [passengersIsValid, dateIsValid, citiesAreValid, searchParams, navigate]);

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

        <Box mt={4} display="flex" justifyContent="center" width="100%">
          <Button
            variant="contained"
            fullWidth={!isDesktop}
            onClick={handleSubmit}
            disabled={!passengersIsValid || !dateIsValid || !citiesAreValid}
          >
            Submit
          </Button>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
}

export default HomePage;
