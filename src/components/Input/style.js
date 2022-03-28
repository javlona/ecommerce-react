import sty from "styled-components";
import color from "../../utils/color";

const Container = sty.input`
    padding: 5px 15px;
    outline: none;
    border: 1px solid ${color.text};
    border-radius: 5px;
`
export default Container;