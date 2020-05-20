import styled from 'styled-components';
const BackGround = styled.div`
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
    width: ${props => props.width || '100vw'};
    // height: ${props => props.height || '100vh'};
    background-color: ${props => props.background || 'white'};
    opacity: ${props => props.opacity || 1};
`;
export default BackGround;
