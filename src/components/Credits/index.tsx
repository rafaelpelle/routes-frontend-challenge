import { Box } from '@mui/material';
import { styled } from 'styled-components';

const CustomBox = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

function Credits() {
  return (
    <CustomBox>
      <small>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.flaticon.com/free-icons/route"
          title="route icons"
        >
          Route icon created by Freepik - Flaticon
        </a>
      </small>
    </CustomBox>
  );
}

export default Credits;
