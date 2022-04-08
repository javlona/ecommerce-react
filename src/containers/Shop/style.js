import sty from 'styled-components';
import color from '../../utils/color'

const ShopSty = sty.div`
    .shop__content {
        display: flex;
    }
    .shop__category {
        text-align: left;
    }
    .shop_cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`

export default ShopSty;