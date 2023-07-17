import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import CityInput from '../components/CityInput';

function HomePage() {
  return (
    <PageContainer>
      <ContentContainer>
        <CityInput />
      </ContentContainer>
    </PageContainer>
  );
}

export default HomePage;
