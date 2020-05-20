import styled from 'styled-components';

const IconLoggin = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  top: 9px;
  left: 9px;
  ${props =>
    props.img
      ? `
    src ={props.img}
  `
      : ''}
`;

export default IconLoggin;
