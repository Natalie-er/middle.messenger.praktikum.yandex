// import Handlebars, { log } from 'handlebars';
import './utils/style.scss';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import Page404 from './pages/page404';
import Page500 from './pages/page500';

let tpl = MainPage;
const path = document.location.pathname.slice(1);

switch (path) {
    case 'login':
        tpl = LoginPage;
        break;
    case 'signup':
        tpl = SignupPage;
        break;
    case '404':
        tpl = Page404;
        break;
    case '500':
        tpl = Page500;
        break;
    default:
        tpl = MainPage;
}

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = tpl;
    }
});
