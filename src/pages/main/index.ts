import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

const comp = Handlebars.compile(tpl);
const MainPage = comp({});

export default MainPage;

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = MainPage;
    }
});
