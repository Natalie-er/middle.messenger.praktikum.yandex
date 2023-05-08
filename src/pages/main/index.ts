import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

const comp = Handlebars.compile(tpl);
const MainPage = comp({});

export default MainPage;
