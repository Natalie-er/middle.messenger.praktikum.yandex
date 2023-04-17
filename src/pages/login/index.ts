import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

import Input from '/src/components/input';
import Button from '/src/components/button';
import Link from '/src/components/link';

Handlebars.registerPartial('Input', Input);
Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);

const comp = Handlebars.compile(tpl);
const loginPage = comp({
    testData: '123', // TODO delete
});

export default loginPage;
