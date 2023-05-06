// import Handlebars, { log } from 'handlebars';
import './utils/style.scss';
import loginPage from './pages/login';
// import signupPage from './pages/signup';

let tpl = loginPage;
// const path = document.location.pathname.slice(1);

// if (path === 'signup') {
//     tpl = signupPage;
// }

window.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = tpl;
    }
});
