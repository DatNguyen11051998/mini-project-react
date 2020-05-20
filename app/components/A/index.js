import styled from 'styled-components';
const A = styled.a`
  color: ${props => props.color || '#41addd'};
  &:hover {
    color: #6cc0e5;
  }
  ${props =>
    props.menuHome
      ? `
    display: flex;
    flex-direction: column;
    font-family: NotoSans-Regular;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 45px;
    margin-top: 20px;
    text-decoration: none;
    // &:hover {
    //   color: rgba(0,0,0,0.85);
    // }
`
      : ''}
`;

export default A;
