import sty from 'styled-components'
import color from '../../utils/color'

const Container = sty.button`
    ${(props) => {
        const type = {
            primary: `color: red;`,
            secondary: `color: black`,
        }
        return type[props.type]
        let a = `
            font-size: 22px;
            color: white;
        `
        let btn = null;
        switch (props.type) {
            case 'primary':
                btn = `
                background: red;
                color: white;
                font-size: 32px;
                `
                break;
            case 'secondary':
                btn = `background: transparent;`
                break;
            default: 
                btn = `background: black;`
        }
        console.log(a+btn, 'styleeeee');
        return a + btn
    }}

`

// background: ${(props) => props.type ? props.bg : color.secondary };
// color: ${(props) => props.color ? props.color : color.secondary };

export default Container