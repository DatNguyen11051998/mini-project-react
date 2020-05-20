import styled from 'styled-components';

const InputLogin = styled.input`
    background: #F0F0F0;
    border-radius: 6px;
    height: 45px;
    border: none;
    padding: 0 17px 0 17px;
    width: 80vw;
    &:focus {
        border: none;
        outline: none;
      }
  ${props =>
    props.primary
      ? `
    background: white;
    color: palevioletred;
    `
      : ''}

  ${props =>
    props.numberOfQuatity
      ? `
  height: 90%;
  width: 40px;
  background: white;
  padding: 0;
  text-align: center;
  `
      : ''}

  ${props =>
    props.type === 'text' ? `margin-top: calc(19.5vh - 13.7vh);` : ''}
  ${props => (props.type === 'password' ? `margin-top: 2.5vh;` : '')}
  ${props =>
    props.type === 'submit'
      ? `
    background: #19AD8C;
    border-radius: 8px;
    font-size: 17px;
    color: white;
    &:focus {
        border: none;
        outline: none;
      }
    `
      : ``}
`;
export default InputLogin;
