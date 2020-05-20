import styled from 'styled-components';

const WrapImgHome = styled.div`
  width: 44px;
  height: 44px;
  background: ${props => (props.bg ? props.bg : 'white')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 50%;
  position: relative;
`;

export default WrapImgHome;
