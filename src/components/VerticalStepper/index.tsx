import {
  Step,
  Stepper,
  StepConnector,
  Typography,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CircleOutlined, PlaceOutlined } from '@mui/icons-material';
import { VerticalStepperProps } from '../../types/components';

const CustomStepper = styled(Stepper)(() => ({
  height: '100%',
}));

const CustomStep = styled(Step)(() => ({
  display: 'flex',
  alignItems: 'center',
  [`& .MuiTypography-body2`]: {
    marginLeft: '4px',
  },
}));

const CustomConnector = styled(StepConnector)(() => ({
  [`& .MuiStepConnector-line`]: {
    border: 'none',
    marginLeft: '-2px',
    marginTop: '4px',
    marginBottom: '4px',
    borderLeft: '4px dotted gray',
    height: '85%',
  },
}));

function VerticalStepper({ length, labels, distances }: VerticalStepperProps) {
  return (
    <CustomStepper orientation="vertical" connector={<CustomConnector />}>
      {Array.from({ length }, () => false).map((_, index) => {
        const StepComponent = (
          <CustomStep key={index}>
            {index === length - 1 ? (
              <PlaceOutlined color="secondary" />
            ) : (
              <CircleOutlined />
            )}
            {labels && (
              <Typography noWrap variant="body2" display="inline">
                {labels[index]}
              </Typography>
            )}
          </CustomStep>
        );
        return distances && distances[index] ? (
          <Tooltip
            open
            arrow
            placement="left"
            TransitionProps={{ timeout: 1500 }}
            title={
              <Typography variant="body1" color="primary">
                {distances[index]}
              </Typography>
            }
            componentsProps={{
              tooltip: {
                sx: {
                  display: 'inline-block',
                  top: '30px',
                  padding: '3px 12px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  bgcolor: 'common.white',
                  '& .MuiTooltip-arrow': {
                    color: 'primary.main',
                  },
                },
              },
            }}
          >
            {StepComponent}
          </Tooltip>
        ) : (
          StepComponent
        );
      })}
    </CustomStepper>
  );
}

export default VerticalStepper;
