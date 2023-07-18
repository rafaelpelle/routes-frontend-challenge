import { Button, Grid } from '@mui/material';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import { useCityInput } from '../hooks/useCityInput';

function HomePage() {
  const { inputs } = useCityInput();

  return (
    <PageContainer>
      <ContentContainer>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            {/* TO-DO breadcrumb icons */}
          </Grid>
          <Grid item xs={11} md={7}>
            {inputs.map((cityProps, index) => (
              <CityInput {...cityProps} index={index} key={index} />
            ))}
            {/* <Button variant="text" onClick={useAddIntermediateCity}>
              Add destination
            </Button> */}
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
