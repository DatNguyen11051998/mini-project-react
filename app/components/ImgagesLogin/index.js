import styled from 'styled-components';

const Imgages = styled.img`

  ${props =>
    props.loggin
      ? `
  height: 88px;
  width: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(19vh - 44px);
  background: #FFFFFF;
  padding: 4px;
  border-radius: 50%;
`
      : ''}

  ${props =>
    props.imgDetail
      ? `
  height: 120px;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 500px) {
    height: 130px;
    width: 25vw;
  }
  @media screen and (min-width: 700px) {
    height: 130px;
    width: 20vw;
  }
  @media screen and (min-width: 900px) {
    height: 130px;
    width: 20vw;
  }
  @media screen and (max-width: 2000px) {
    height: auto;
    width: 20vw;
  }
`
      : ''}

  ${props =>
    props.optionDetailproduct
      ? `
  height: 48px;
  width: 48px;
  margin-left: 4vw;
  @media screen and (min-width: 600px) {
    height: 52px;
    margin-left: 6vw;
  }
`
      : ''}

  ${props =>
    props.img
      ? `
    src ={props.img}
  `
      : ''}
`;

export default Imgages;
