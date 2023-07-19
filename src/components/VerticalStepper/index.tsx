import { Typography, Tooltip } from '@mui/material';
import { CircleOutlined, PlaceOutlined } from '@mui/icons-material';
import { VerticalStepperProps } from '../../types/components';
import CustomStepper from './CustomStepper';
import CustomStep from './CustomStep';
import CustomConnector from './CustomConnector';

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
            key={index}
            open
            arrow
            placement="left"
            TransitionProps={{ timeout: 1000 }}
            title={
              <Typography variant="body2" color="primary">
                {distances[index]}
              </Typography>
            }
            componentsProps={{
              tooltip: {
                sx: {
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
