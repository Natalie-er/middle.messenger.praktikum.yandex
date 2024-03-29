import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs';
import '/src/utils/style.scss';

import FormField from '/src/components/formField';
import Button from '/src/components/button';
import Link from '/src/components/link';

Handlebars.registerPartial('FormField', FormField);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);

const comp = Handlebars.compile(tpl);
const SignupPage = comp({});

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = SignupPage;
    }
});
