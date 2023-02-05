import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.scss'

const comp = Handlebars.compile(tpl);
const res = comp({
    user: {
        name: 'name 1',
        surname: 'surname 1',
    },
});

document.getElementById('root').innerHTML = res;
