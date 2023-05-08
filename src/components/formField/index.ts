import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs';
import './style.scss';

interface FormFieldProps {
    id: string;
    label: String;
    type?: string;
    name: string;
    classes?: string;
    inputClasses?: string;
    labelClasses?: string;
    error?: string;
    require?: boolean; // TODO
}

const FormField = (props: FormFieldProps) => {
    if (!props.type) {
        props.type = 'text';
    }
    return Handlebars.compile(tpl)(props);
};

export default FormField;
