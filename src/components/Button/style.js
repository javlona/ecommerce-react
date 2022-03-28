import sty from "styled-components";
import color from "../../utils/color";

const Container = sty.button`
    ${(props) => {
      const type = {
        primary: `
                color: white; 
                background: ${color.primary};`,
        secondary: `
                color: white; 
                background: ${color.secondary};`,
        transparent: `
                color: ${color.secondary}; 
                background: transparent;
                border: 1.5px solid ${color.secondary};`,
      };
      return type[props.type];
    }}
    
`;

export default Container;
