import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

import Link from '/src/components/link';

Handlebars.registerPartial('Link', Link);

const comp = Handlebars.compile(tpl);
const Page404 = comp({});

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = Page404;
    }
});
