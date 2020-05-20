import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  ${props =>
    props.buttonHome
      ? `
    min-width: 130px;
    height: 43px;
    border-radius: 8px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 13px;
    border: none;
    outline: none;
    `
      : buttonStyles}

  ${props => (props.active ? `background: #30A59C` : '#F8F8F8')};
  ${props => (props.hover ? `background: red` : '#F8F8F8')};
  ${props =>
    props.increase
      ? `
    background: #F1F1F1;
    color: rgba(0,0,0,0.85);
    border: none;
    font-family: OpenSans-Bold;
    border-radius: 5px 0 0 5px;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  `
      : ''};

  ${props =>
    props.decrease
      ? `
    background: #F1F1F1;
    border: none;
    height: 100%;
    font-family: OpenSans-Bold;
    color: rgba(0,0,0,0.85);
    border-radius: 0 5px 5px 0;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    `
      : ''};
  ${props =>
    props.decreaseCart
      ? `
      background-image: linear-gradient(180deg, #F6C53E 0%, #F7B500 100%);
    border: none;
    height: 100%;
    font-family: OpenSans-Bold;
    color: rgba(0,0,0,0.85);
    border-radius: 0 5px 5px 0;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    `
      : ''};
  ${props =>
    props.increaseCart
      ? `
      background-image: linear-gradient(180deg, #F6C53E 0%, #F7B500 100%);
    color: rgba(0,0,0,0.85);
    border: none;
    font-family: OpenSans-Bold;
    border-radius: 5px 0 0 5px;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  `
      : ''};
  ${props =>
    props.addToCart
      ? `
    background-image: linear-gradient(180deg, #F7F7F7 0%, #EEEEEE 100%);
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 50px;
    `
      : ''};
  ${props =>
    props.buyNow
      ? `
    background-image: linear-gradient(180deg, #FEC834 0%, #F7B500 100%);
    border: 1px solid #DDA509;
    border-radius: 8px;
    border: none;
    font-family: NotoSans-Medium;
    font-size: 16px;
    color: #241A00;
    letter-spacing: 0;
    width: 40vw;
    height: 50px;
    `
      : ''};
`;

export default StyledButton;
