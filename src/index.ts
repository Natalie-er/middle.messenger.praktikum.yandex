// import Handlebars, { log } from 'handlebars';
import './utils/style.scss';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

let tpl = MainPage;
const path = document.location.pathname.slice(1);

if (path === 'login') {
    tpl = LoginPage;
} else if (path === 'signup') {
    tpl = SignupPage;
}

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = tpl;
    }
});
