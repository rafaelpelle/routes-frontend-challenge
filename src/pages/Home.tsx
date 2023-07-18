import { Button, Grid } from '@mui/material';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import { useCityInput } from '../hooks/useCityInput';

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
                index={index}
                key={index}
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
          <Grid item xs={12} md={4}>
            {/* TO-DO Date and passangers */}
          </Grid>
        </Grid>
      </ContentContainer>
    </PageContainer>
  );
}

export default HomePage;
