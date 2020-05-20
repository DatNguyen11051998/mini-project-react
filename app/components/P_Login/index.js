import styled from 'styled-components';

const PLogin = styled.p`
  margin-top: 13.7vh;
  font-family: NotoSans-Regular;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 0;

  ${props =>
    props.text
      ? `
        font-size: 22px;
        color: #30A59C;
        letter-spacing: 0;
        margin-bottom: 3.3vh;
  `
      : ``}
  ${props =>
    props.warning
      ? `
      width: 80vw;
      height: 20vh;
      padding 10px 0;
      border-radius: 10px;
      margin-top: 2.7vh;
      font-size: 16px;
      background: pink;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center
      letter-spacing: 0;
`
      : ``}
`;
export default PLogin;
