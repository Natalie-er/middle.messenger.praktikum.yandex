// import Handlebars, { log } from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import './utils/style.scss';
import loginPage from './pages/login';

let tpl = loginPage;
// const path = document.location.pathname.slice(1);
// if (path === 'login') {
//     tpl = loginPage;
// }

const rootElement = document.getElementById('root');
if (rootElement) {
    rootElement.innerHTML = tpl;
}