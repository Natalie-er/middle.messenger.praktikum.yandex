import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs';
import './style.scss';

interface FormFieldProps {
    id: string;
    label: String;
    type: string;
    classes?: string;
    inputClasses?: string;
    labelClasses?: string;
    error?: string;
}

const FormField = ({ type = 'text', ...props }: FormFieldProps) => {
    return Handlebars.compile(tpl)(props);
};

export default FormField;
