import { Fragment, useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageContainer from '../components/PageContainer';
import ContentContainer from '../components/ContentContainer';
import VerticalStepper from '../components/VerticalStepper';
import { resultsFetchRequested } from '../actionCreators/results';
import { City } from '../types/model';
import { ResultsReducer } from '../types/reducers';
import dayjs from 'dayjs';

function ResultsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isDesktop = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    dispatch(resultsFetchRequested(searchParams.toString()));
  }, [dispatch, searchParams]);

  const handleGoBack = useCallback(() => {
    navigate({
      pathname: '/',
      search: searchParams.toString(),
    });
  }, [navigate, searchParams]);

  const {
    distances,
    totalDistance,
    cities,
    passengers,
    date,
    isLoading,
    error,
  }: ResultsReducer = useSelector(({ resultsReducer }) => resultsReducer);

  return (
    <PageContainer>
      <ContentContainer>
        {isLoading ? (
          <CircularProgress size={50} />
        ) : !!error ? (
          <Typography color="primary">{error}</Typography>
        ) : (
          <Fragment>
            <Box mb={4} ml={5}>
              <VerticalStepper
                length={cities?.length || 0}
                labels={cities?.map(({ name }: City) => name)}
                distances={distances || undefined}
              />
            </Box>

            <Box textAlign="center">
              <Typography variant="body2" marginBottom={1}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  component={'span'}
                >
                  {totalDistance?.toFixed(2)} km
                </Typography>{' '}
                is total distance
              </Typography>
              <Typography variant="body2" marginBottom={1}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  component={'span'}
                >
                  {passengers}
                </Typography>{' '}
                passengers
              </Typography>
              <Typography variant="body2" fontWeight="bold" color="primary">
                {dayjs(date).format('MMM D, YYYY')}
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
          </Fragment>
        )}
      </ContentContainer>
    </PageContainer>
  );
}

export default ResultsPage;
