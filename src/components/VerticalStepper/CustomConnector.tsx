import { StepConnector } from '@mui/material';
import { styled } from 'styled-components';

const CustomConnector = styled(StepConnector)`
  .MuiStepConnector-line {
    border: none;
    margin-left: -2px;
    margin-top: 4px;
    margin-bottom: 4px;
    border-left: 4px dotted gray;
    height: 85%;
  }
`;

export default CustomConnector;
