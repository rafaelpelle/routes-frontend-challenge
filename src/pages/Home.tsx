import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';
import { useCityInput } from '../hooks/useCityInput';

function HomePage() {
  const cityOfOrigin = useCityInput('City of origin');
  const cityOfDestination = useCityInput('City of destination');

  return (
    <PageContainer>
      <ContentContainer>
        <CityInput {...cityOfOrigin} />
        <CityInput {...cityOfDestination} />
      </ContentContainer>
    </PageContainer>
  );
}

export default HomePage;
