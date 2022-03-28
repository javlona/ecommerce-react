import color from "../../utils/color";
import sty from "styled-components";

const HeaderSty = sty.div`
    max-width: 1350;
    margin: 0 auto;

    .header__top {
        background: ${color.headerBg};
        padding: 20px 50px 20px 100px;
        display: flex;
        justify-content: space-between;
        &-links {
            display: flex;
            gap: 10px;
        }
        &-msg {
            font-size: 14px;
            font-weight: 500;
        }
        &-lang { 
            border-right: 1px solid ${color.secondary};
            border-left: 1px solid ${color.secondary};
            padding: 0 10px;
        }
    }
`

export default HeaderSty;