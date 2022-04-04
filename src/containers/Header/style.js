import color from "../../utils/color";
import sty from "styled-components";

const HeaderSty = sty.div`
    .header__top {
        background: ${color.headerBg};
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        &-links {
            display: flex;
            gap: 10px;
            align-items: center;
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

    .header__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        &-logo {
            color: ${color.primary};
            font-size: 24px;
            font-weight: 500;
        }
        &-links {

            a {
                padding-left: 20px;
                padding-right: 20px;
                border-right: 1px solid ${color.title};
                color: ${color.title};
                &:hover {
                    color: ${color.activeLink};
                }
            }

            a:last-child { 
                border-right: none;
            }
        }
        &-actions {
            display: flex;
            gap: 20px;
        }
    }
`

export default HeaderSty;