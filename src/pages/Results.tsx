import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import VerticalStepper from '../components/VerticalStepper';
import { useCallback } from 'react';

function ResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isDesktop = useMediaQuery('(min-width:900px)');

  const handleGoBack = useCallback(() => {
    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  }, [navigate, searchParams]);

  return (
    <PageContainer>
      <ContentContainer>
        <Box mb={4} ml={5}>
          <VerticalStepper
            length={4}
            labels={['Paris', 'Montpellier', 'Dijon', 'Bordeaux']}
            distances={['300.23km', '300.23km', '300.23km']}
          />
        </Box>

        <Box>
          <Typography variant="body2" marginBottom={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="primary"
              display="inline"
            >
              765.16 km
            </Typography>{' '}
            is total distance
          </Typography>
          <Typography variant="body2" marginBottom={1}>
            <Typography
              variant="body2"
              fontWeight="bold"
              color="primary"
              display="inline"
            >
              5
            </Typography>{' '}
            passengers
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="primary">
            Feb 14, 2023
          </Typography>
        </Box>

        <Box mt={5} display="flex" justifyContent="center" width="100%">
          <Button
            variant="contained"
            fullWidth={!isDesktop}
            onClick={handleGoBack}
          >
            Back
          </Button>
        </Box>
      </ContentContainer>
    </PageContainer>
  );
}

export default ResultsPage;
