import sty from "styled-components";
import color from "../../utils/color"

const AboutSty = sty.div`
    .about_about {
        display: flex;
        gap: 40px;
        .about__pic {
            img {
                width: 450px;
            }
        }
        .about__text {
            text-align: left;
            width: 450px;
        }
    }
`

export default AboutSty