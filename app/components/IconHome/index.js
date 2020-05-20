import styled from 'styled-components';

const IconHome = styled.img`
    height: 24px;
    width: 24px;
    visibility: ${props => props.visiable};
    transform : ${props => props.transform};

  ${props =>
    props.img
      ? `
    src ={props.img}
  `
      : ''}
  ${props =>
    props.width
      ? `
      width: ${props.width}px;
  `
      : ''};

  ${props =>
    props.height
      ? `
    height: ${props.height}px;
`
      : ''};

  ${props =>
    props.boder
      ? `
    width: 44px;
    height: 44px;
    background: #F3F3F3;
    border-radius: 50%;
    padding: 10px;
`
      : ''};

  ${props =>
    props.iconClose
      ? `
  margin-left: 1em;
  margin-top: 1.5em;
`
      : ''};

  ${props =>
    props.childrenOfScan
      ? `
  width: 49px;
  height: 49px;
  margin-bottom: 20px;
}
`
      : ''};

  ${props =>
    props.item
      ? `
  width: 27%;
  height: 20vh;
  padding-top: 1.8vh;
  padding-bottom: 1.8vh;
  @media only screen and (min-width: 600px) {
    width: 22%;
    height: 17vh;
}
}
`
      : ''}

  ${props =>
    props.scanFooter
      ? `
  width: 56px;
  height: 56px;
  margin: 20px 20px 20px 0;
}
`
      : ''}

  ${props =>
    props.heartDetail
      ? `
  position: absolute;
  left: 20px;
}`
      : ''}

`;

export default IconHome;
