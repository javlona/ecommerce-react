import sty from "styled-components";
import color from "../../utils/color";

const HomeSty = sty.div`
    background: ${color.text};
    height: 500px;
    text-align: left;
    padding: 20px 50px 20px 100px;
    .home__heading {
        &--big {
            font-size: 70px;
            color: ${color.secondary};
            padding: 20px 0 40px 0;
        }
        &--small {
            font-weight: 500;
            color: ${color.secondary};
            padding-top: 40px;
        }
    }
`

export default HomeSty;