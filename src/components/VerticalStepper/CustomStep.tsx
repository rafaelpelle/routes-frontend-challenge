import { Step } from '@mui/material';
import { styled } from 'styled-components';

const CustomStep = styled(Step)`
  display: flex;
  align-items: center;

  .MuiTypography-body2 {
    margin-left: 4px;
  }
`;

export default CustomStep;
