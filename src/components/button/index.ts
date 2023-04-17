import Handlebars from 'handlebars';
import button from 'bundle-text:./index.hbs';
import './style.scss';

interface ButtonProps {
    text: String;
    classes?: string;
}

const Button = (props: ButtonProps) => Handlebars.compile(button)(props);

export default Button;
