import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 734px;
  padding: 60px 80px;

  @media only screen and (max-width: 900px) {
    // 900px is the material-ui md breakpoint.
    padding: 24px 12px;
    border-radius: 0px;
  }
`;

export default ContentContainer;
