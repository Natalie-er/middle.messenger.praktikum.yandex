import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

const comp = Handlebars.compile(tpl);
const ChatsPage = comp({});

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = ChatsPage;
    }
});
