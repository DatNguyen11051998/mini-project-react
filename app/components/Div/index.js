import styled from 'styled-components';
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  border: ${props => (props.ActiveColor ? `1px solid #0091FF` : 'none')};
  ${props => (props.height ? `height:${props.height}` : '')};
  ${props => (props.block2 ? `margin-top: 10px` : '')};
  ${props =>
    props.menuHome ? `align-items: flex-start;margin-left: 30px` : ''};
  ${props =>
    props.language ? `display: block;margin-left: 30px;margin-top: 45px` : ''};

  ${props =>
    props.wrappButtonLanguage
      ? `background-color: #F1F1F1;
      border-radius: 8px;
      margin-top: 15px;
      width: 120px;
      height: 36px;
      display: flex;
      flex-direction: row;
      & > & {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px!important;
        cursor: pointer;
      }
      `
      : ''};

  ${props =>
    props.bg
      ? `
      display: block;
      background-color: ${props.bg};
  `
      : ''}

  ${props =>
    props.flexStart
      ? `
      align-items: flex-start;
      width: 59%;
  `
      : ''}

  ${props =>
    props.row
      ? `
      flex-direction: row;
  `
      : ''}
  ${props =>
    props.home
      ? `
      display: block;
      position: relative;
  `
      : ''}

  ${props =>
    props.WrappMenuAcc
      ? `
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(45, 51, 55, 0.85);
      width: 100%;
      height: 100vh;
      z-index:11;
  `
      : ''}

  ${props =>
    props.menuAcc
      ? `
      display: block;
      background-color: #F1F1F1;
      width: 75%;
      height: 100vh;
      opacity: 1;
      @media only screen and (min-width: 500px) {
          width: 400px
      }
  `
      : ''}

  ${props =>
    props.Acc
      ? `
      justify-content: space-evenly;
      margin-top: 2em;
  `
      : ''}

  ${props =>
    props.main
      ? `
      margin-top: 60px;
  `
      : ''}

  ${props =>
    props.align
      ? `
      justify-content: center;
      align-items: center;
  `
      : ''}

  ${props =>
    props.welcome
      ? `
      background: #FFFFFF;
      border-radius: 12px;
      width: 91vw;
      height: 76px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
  `
      : ''}

  ${props =>
    props.scan
      ? `
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      @media screen and (min-width: 500px) {
          justify-content: center;
        }
  `
      : ''}

  ${props =>
    props.childrenOfScan
      ? `
      width: 125px;
      height: 125px;
      background: #fac228;
      justify-content: center;
      border-radius: 10px;
      font-size: 14px;
      @media screen and (min-width: 500px) {
          margin-left: 5vw;
          margin-right: 5vw;
      }
  `
      : ''}

  ${props =>
    props.filterItem
      ? `
      background: #FFFFFF;
      width: 375px;
      height: 69px;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      overflow-x: scroll ;
      justify-content: flex-start;
      @media screen and (min-width: 375px) {
          width: 100vw;
          height: 100px;
      }`
      : ''}

  ${props =>
    props.listItem
      ? `
      width: 100vw;
      flex-direction: row;
      flex-wrap: wrap;
      // justify-content: center;
      // align-items: center;
      // overflow-y: auto;
  `
      : ''}

  ${props =>
    props.item
      ? `
      background: black;
      width: 47%;
      height: 32vh;
      background: white;
      margin: 1% 1% 0 1%;
      @media only screen and (min-width: 600px) {
          width: 30.5%;
          height: 30vh;
      }
  `
      : ''}

  ${props =>
    props.detailItem
      ? `
      align-items: flex-start;
  `
      : ''}

  ${props =>
    props.showMore
      ? `
      background: #FFFFFF;
      width: 98%;
      height: 46px;
      margin-top: 1%;
      display: flex;
      color: #30A59C;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 14px;
  `
      : ''}

  ${props =>
    props.footer
      ? `
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
  `
      : ''}

  ${props =>
    props.mainCategory
      ? `
      margin-top: 60px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
  `
      : ''}

  ${props =>
    props.category
      ? `
      border-radius: 10px;
      align-items: flex-end;
      background: #F0F0F0;
      width: 90%;
      align-items: center;
      justify-content: center;
      height: 45px;
  `
      : ''}

  ${props =>
    props.categoryHome
      ? `
      margin-top: 60px;
      display: flex;
      width: 100vw;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      flex-wrap: wrap;
    `
      : ''}

  ${props =>
    props.itemCategory
      ? `
      width: 96vw;
      height: 35px;
      background: white;
      margin: 10px 1vw 10px 1vw;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 400px) {
        width: 48vw;
        
      }
        `
      : ''}
  ${props =>
    props.footerMenuHome
      ? `
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-left: 25px;
      background: #F1F1F1;
      width: 100vw;
      padding-top: 18px;
      font-size: 12px;
      `
      : ''}; 

  ${props =>
    props.typeofFilter
      ? `
      background: white;
      padding-left: 24px;
      justify-content: center;
      align-items: flex-start;
      width: 100vw
      height: 56px;
  `
      : ''}

  ${props =>
    props.nofounded
      ? `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100px;
  `
      : ''}

// Detail Page
  ${props =>
    props.mainDetail
      ? `
      width: 100vw;
      margin-top: 60px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
  `
      : ''}
  ${props =>
    props.mainDetailCart
      ? `
      width: 98vw;
      margin-left: 1%;
      border-radius: 10px;
      margin-top: 70px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
  `
      : ''}
  ${props =>
    props.optionDetailproduct
      ? `
      width: 100vw;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
  `
      : ''}

  ${props =>
    props.nameOfDetailProduct
      ? `
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-top: 10px;
      padding-left: 15px;
  `
      : ''}

  ${props =>
    props.priceDetailProduct
      ? `
      flex-direction: row;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      padding-left: 15px;
  `
      : ''}

  ${props =>
    props.colorDetailProduct
      ? `
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
  `
      : ''}

  ${props =>
    props.textDetailColor
      ? `
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 15px;
  `
      : ''}

  ${props =>
    props.choseColor
      ? `
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      padding-left: 15px;
  `
      : ''}

  ${props =>
    props.colorToChose
      ? `
      width: 38px;
      height: 38px;
      border-radius: 50%;
      flex-direction: row;
      justify-content: center;
      margin-left: 10px;
  `
      : ''}
  ${props =>
    props.colorBoder
      ? `
      width: 38px;
      height: 38px;
      border-radius: 50% solid grey;
      flex-direction: row;
      justify-content: center;
      margin-left: 10px;
  `
      : ''}
  ${props =>
    props.sizeDetailProduct
      ? `
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
  `
      : ''}

  ${props =>
    props.textDetailSize
      ? `
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      padding-left: 15px;
  `
      : ''}

  ${props =>
    props.choseSize
      ? `
      width: 100vw;
      margin-left: 45px;
  `
      : ''}

  ${props =>
    props.sizeToChose
      ? `
      flex-direction: row;
      justify-content: center;
      background: #F1F1F1;
      border-radius: 4.8px;
      width: 53px;
      height: 35px;
      margin-right: 2vw;
  `
      : ''}

  ${props =>
    props.ActiveSize
      ? `
      background: #FFFFFF;
      border: 2px solid #2CA4FF;
      border-radius: 4.8px;  
  `
      : ''}

  ${props =>
    props.quatity
      ? `
      width: 100vw;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-left: 15px;
      margin-top: 10px;
  `
      : ''}
  ${props =>
    props.cartQuatity
      ? `
        background: linear-gradient(180deg, #F6C53E 0%, #F7B500 100%);
      width: 121px;
      height: 39px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      margin-top: 10px;
      border-radius: 5px;
  `
      : ''}
  ${props =>
    props.wrapChangeQuatity
      ? `
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
  `
      : ''}

  ${props =>
    props.changeQuatity
      ? `
      background: #F1F1F1;
      width: 121px;
      height: 39px;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      margin-top: 10px;
      border-radius: 5px;
  `
      : ''}

  ${props =>
    props.buyProduct
      ? `
          width: 100vw;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          margin-top: 15px;
          `
      : ''};

  `;

export default Div;
