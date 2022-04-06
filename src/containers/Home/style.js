import sty from "styled-components";
import color from "../../utils/color";

const HomeSty = sty.div`
    text-align: left;
    .home__hero {
        background: ${color.text};
        height: 500px;
        
    }
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
    .features {
        margin-top: 50px;
        display: flex;
        gap: 20px;
        &__card {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            border: 1px solid ${color.title};
            padding: 20px;
            margin-right: 20px;
            &-txt {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            &--title {
                font-weight: 500;
            }
        }
    }
`
//padding: 20px 50px 20px 100px;
export default HomeSty;