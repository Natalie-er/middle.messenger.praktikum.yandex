import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs';
import './style.scss';

interface FormFieldProps {
    id: string;
    label: String;
    type?: string;
    name: string;
    value?: string;
    simpleMode?: boolean;
    classes?: string;
    inputClasses?: string;
    labelClasses?: string;
    error?: string;
}

const FormField = (props: FormFieldProps) => {
    if (!props.type) {
        props.type = 'text';
    }
    if (!props.classes) {
        props.classes = '';
    }
    if (props.simpleMode) {
        props.classes += ' form-field--simple ';
    }
    return Handlebars.compile(tpl)(props);
};

export default FormField;
