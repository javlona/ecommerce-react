import sty from "styled-components";
import color from "../../utils/color";

const ArrivalsSty = sty.div`
    margin: 50px 0;
    .arrivals__title {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.9em;
        color: ${color.title};
        letter-spacing: 1.2px;
    }
    .arrivals__tab {
        &--cats {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            margin-bottom: 40px;
            border-bottom: 1px solid ${color.text};
            li {
                list-style-type: none;
                color: ${color.title};
                font-size: 16px;
                cursor: pointer;
                &:hover {
                    color: ${color.primary};

                }
            }
        }
    }
    .arrivals__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;  
        justify-content: space-around;
        .arrivals__card {
            display: flex;
            flex-direction: column;
            .card {
                &__img {
                    width: 350px;
                }
                &__content {
                    padding: 10px;
                }
                &__title-like {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    button {
                        background: transparent;
                        svg {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }
`

export default ArrivalsSty;
