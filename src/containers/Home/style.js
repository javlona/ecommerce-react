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
    .home__newsletter {
        height: 400px;
        background: ${color.text};
        &--title {
            text-align: center;
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 100px;
        }
        .ant-input:hover {
            border-color: ${color.secondary};
        }
        .ant-input:focus {
            border-color: ${color.secondary};
            box-shadow: 0 0 0 2px rgb(38, 38, 38 / 20%) !important;
        }
        &--input {
            width: 100%;
            input, button {
                height: 60px;
            }
        }
    }
`
//padding: 20px 50px 20px 100px;
export default HomeSty;