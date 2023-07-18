import { Box, Button, Grid } from '@mui/material';
import { useCityInput } from '../hooks/useCityInput';
import { usePassengersInput } from '../hooks/usePassengersInput';
import { useDateInput } from '../hooks/useDateInput';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import PassengersInput from '../components/PassengersInput';
import DateInput from '../components/DateInput';

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

  return (
    <PageContainer>
      <ContentContainer>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            {/* TO-DO breadcrumb icons */}
          </Grid>
          <Grid item xs={11} md={7}>
            {values.map((value, index) => (
              <CityInput
                key={index}
                index={index}
                value={value}
                inputValue={inputValues[index]}
                options={options[index]}
                error={errors[index]}
                isLoading={loadings[index]}
                label={index === 0 ? 'City of origin' : 'City of destination'}
                onChange={onChange}
                onInputChange={onInputChange}
                getOptionLabel={getOptionLabel}
                removeDestination={
                  index >= 1 && values.length >= 3
                    ? handleRemoveDestination
                    : undefined
                }
              />
            ))}
            <Button variant="text" onClick={handleAddDestination}>
              Add destination
            </Button>
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
                {' '}
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
