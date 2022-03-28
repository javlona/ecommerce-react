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

    .header__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 50px 30px 100px;
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