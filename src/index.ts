import './utils/style.scss';
import MainPage from './pages/main';

let tpl = MainPage;

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = tpl;
    }
});
