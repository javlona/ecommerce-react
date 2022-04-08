import sty from "styled-components";
import color from "../../utils/color"

const FooterSty = sty.div`
    margin: 80px 0;
    .footer__links {
        display: flex;
        gap: 20px;
        text-align: left;
        .links {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }
    .footer__title {
        color: ${color.title};
        font-weight: 400;
        font-size: 20px;
        margin: 1rem 0;
    }
    .footer__follow-icons {
        display: flex;
        gap: 10px;
        a {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; 
            background: ${color.text};
            padding: 5px;
            width: 40px;
            height: 40px;
            font-size: 22px;
            color: #fff;
        }
    }
    .footer__copyright {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #555;
        padding-top: 20px;
        &-contact {
            a {
                margin-right:15px;
            }
            margin-bottom: 20px;
            
        }
    }
`

export default FooterSty;