import styled from 'styled-components';
import bgImg from '../../assets/bg.svg';

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${bgImg});
`;

export default PageContainer;
