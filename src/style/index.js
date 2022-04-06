import sty from "styled-components";

export const Wrapper = sty.div`
    max-width: ${props => props.maxWidth || '1400px'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    margin: 0 auto;
    padding: ${props => props.pd || '0 20px'};
    display: ${props => props.display || 'block'};
    justify-content: ${props => props.jc || 'flex-start'};
    align-items: ${props => props.ai || 'flex-start'};
    flex-direction: ${props => props.fd || 'row'};
`;