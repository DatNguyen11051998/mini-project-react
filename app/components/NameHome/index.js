import styled from 'styled-components';

const NameHome = styled.div`
  font-size: 23px;
  color: #1a1a1a;
  text-transform: uppercase;
  width: 65vw;
  @media (min-width: 500px) {
    width: 75vw;
  }
  @media (min-width: 700px) {
    width: 80vw;
  }
  ${props =>
    props.nameOfCategory
      ? `
    justify-content: center;
    align-items: center;
    display: flex;
    width: 95vw;
    text-transform: none;
  }
  
  @media (min-width: 500px) {
    width: 95vw;
  }
  @media (min-width: 700px) {
    width: 95vw;
  }
`
      : ''}
`;

export default NameHome;
