import { Step, Stepper } from '@mui/material';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { CircleOutlined, PlaceOutlined } from '@mui/icons-material';
import { VerticalStepperProps } from '../../types/components';

const CustomConnector = styled(StepConnector)(() => ({
  [`& .${stepConnectorClasses.line}`]: {
    border: 'none',
    marginLeft: '-2px',
    marginTop: '4px',
    marginBottom: '4px',
    borderLeft: '4px dotted gray',
    height: '85%',
  },
}));

function VerticalStepper({ length }: VerticalStepperProps) {
  return (
    <Stepper
      orientation="vertical"
      connector={<CustomConnector />}
      style={{ height: '100%' }}
    >
      {Array.from({ length }, () => false).map((_, index) => (
        <Step key={index}>
          {index === length - 1 ? (
            <PlaceOutlined color="secondary" />
          ) : (
            <CircleOutlined />
          )}
        </Step>
      ))}
    </Stepper>
  );
}

export default VerticalStepper;
