import sty from 'styled-components';
import color from '../../utils/color';

const DealSty = sty.div`
    padding: 30px 0;
    width: 100%;
    height: 600px;
    display: flex;
    flex-shrink: 0;
    .deals__left {
        background: #874356;
        width: 300px;
        height: 100%;
    }
    .deals__right {
        width: 500px;
        display: flex;
        flex-direction: column;
        &--top {
            display: flex;
            height: 280px;
            gap: 20px;
            &--left {
                height: 100%;
                background: #F68989;
                flex-basis: 100%;
            }
            &--right {
                width: 100%;
                height: 100%;
                background: #39AEA9;
            }
        }
        &--bottom {
            background: #E2DEA9;
            height: 100%;
        }
    }
`

export default DealSty;