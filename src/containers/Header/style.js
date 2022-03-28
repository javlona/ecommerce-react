import color from "../../utils/color";
import sty from "styled-components";

const HeaderSty = sty.div`
    .header__top {
        background: ${color.headerBg};
        padding: 20px 50px 20px 100px ;
        display: flex;
        justify-content: space-between;
        &-links {
            display: flex;
            gap: 10px;
        }
    }
`

export default HeaderSty;