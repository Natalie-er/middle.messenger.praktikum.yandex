import Handlebars from 'handlebars';
import input from 'bundle-text:./index.hbs';
import './style.scss';

interface InputProps {
    label: String;
    type?: string;
    labelClasses?: string;
    inputClasses?: string;
}

const Input = (props: InputProps) => {
    if (props.type === undefined) {
        props.type = 'text';
    }
    return Handlebars.compile(input)(props);
};

export default Input;
