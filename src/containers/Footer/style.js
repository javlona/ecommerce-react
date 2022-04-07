import sty from "styled-components";
import color from "../../utils/color"

const FooterSty = sty.div`
    margin: 80px 0;
    .footer__links {
        display: flex;
        gap: 20px;
        text-align: left;
        
    }
    .footer__title {
        color: ${color.title};
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 1rem;
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
`

export default FooterSty;