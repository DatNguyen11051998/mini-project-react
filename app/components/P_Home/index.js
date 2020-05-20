import styled from 'styled-components';

const PHome = styled.p`
  font-family: NotoSans-Regular;
  margin: 0;
  padding: 0;
  color: ${props => (props.color ? props.color : '#FFFFFF')};
  background: ${props => (props.bg ? props.bg : '#FFFFFF')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  ${props =>
    props.numberItem
      ? `
    width: 19px;
    height: 19px;
    background: #FA7B00;
    border-radius: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    position: absolute;
    top: 0px;
    right: 0px;
`
      : ''}

  ${props =>
    props.welcome
      ? `
    font-family: NotoSans-Regular;
    font-size: 18px;
    color: rgba(0,0,0,0.85);
    letter-spacing: 0;
    margin-left: 20px;
    margin-bottom: 10px;
`
      : ''}

  ${props =>
    props.welcome_sub
      ? `
    font-family: NotoSans-Regular;
    font-size: 14px;
    color: rgba(124,124,124,0.85);
    letter-spacing: 0;
    margin-left: 20px;
`
      : ''}

  ${props =>
    props.experience
      ? `
      font-family: NotoSans-Light;
      font-size: 17px;
      letter-spacing: 0;
      color: rgba(0,0,0,0.70);
      line-height: 20px;
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: #F0F0F0;'
  `
      : ''}

//  Deatil
  ${props =>
    props.detailItem
      ? `
      font-family: NotoSans-Regular;
      font-size: 16px;
      letter-spacing: 0;
      margin-left: 5%;
  }
  `
      : ''}

  ${props =>
    props.subTextDetail
      ? `
      font-family: NotoSans-Regular;
      font-size: 14px;
      color: #0091FF;
      letter-spacing: 0;
  }
  `
      : ''}

  ${props =>
    props.textDetail
      ? `
      font-family: NotoSans-Bold;
      font-size: 16px;
      color: rgba(0,0,0,0.85);
      letter-spacing: 0
  }
  `
      : ''}

  ${props =>
    props.oldPrice
      ? `
      font-family: NotoSans-Regular;
      font-size: 16px;
      color: rgba(0,0,0,0.50);
      letter-spacing: 0;
      text-decoration: line-through;
  }
  `
      : ''}

  ${props =>
    props.newPrice
      ? `
      font-family: NotoSans-Bold;
      font-size: 20px;
      color: #000000;
      letter-spacing: 0;
      line-height: 27px;
      margin-left: 15px;
  }
  `
      : ''}


  ${props =>
    props.textDetailColor
      ? `
      font-family: NotoSans-Regular;
      font-size: 16px;
      color: #7D7D7D;
      letter-spacing: 0;
      line-height: 22px;
  }
  `
      : ''}

  ${props =>
    props.detailColor
      ? `
      font-family: NotoSans-SemiBold;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 22px;
      margin-left: 5px;
  }
  `
      : ''}

  ${props =>
    props.colorToChose
      ? `
      width: 24px;
      height: 24px;
      border-radius: 50%;
  }
  `
      : ''}

  ${props =>
    props.textDetailSize
      ? `
      font-family: NotoSans-Regular;
      font-size: 16px;
      color: #7D7D7D;
      letter-spacing: 0;
      line-height: 22px;
  }
  `
      : ''}

  ${props =>
    props.detailSize
      ? `
      font-family: NotoSans-SemiBold;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0;
      line-height: 22px;
      margin-left: 5px;
  }
  `
      : ''}

  ${props =>
    props.textQuatity
      ? `
      font-family: NotoSans-Regular;
      font-size: 14px;
      color: rgba(0,0,0,0.85);
      letter-spacing: 0;
  }
  `
      : ''}

  ${props =>
    props.titleQuatity
      ? `
      font-family: NotoSans-SemiBold;
      font-size: 16px;
      color: #2AB64D;
      letter-spacing: 0;
      // width: 40vw;
  }
  `
      : ''}

  ${props =>
    props.addToCart
      ? `
      font-family: NotoSans-Medium;
      font-size: 16px;
      color: #241A00;
      letter-spacing: 0;
      background: inherit;
      @media only screen and (max-width: 420px) {
          display: none;
        }
  }
  `
      : ''}

`;

export default PHome;
