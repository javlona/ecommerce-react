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
        .arrivals__card {
            display: flex;
            flex-direction: column;
            .card__img {
                width: 200px;
                
            }
        }
    }
`

export default ArrivalsSty;
