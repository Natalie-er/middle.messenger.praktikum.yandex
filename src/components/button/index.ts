import Handlebars from 'handlebars';
import button from 'bundle-text:./index.hbs';
import './style.scss';

interface ButtonProps {
    text: String;
    type?: 'button' | 'submit';
    classes?: string;
}

const Button = (props: ButtonProps) => {
    if (!props.type) {
        props.type = 'button';
    }

    return Handlebars.compile(button)(props);
};

export default Button;
