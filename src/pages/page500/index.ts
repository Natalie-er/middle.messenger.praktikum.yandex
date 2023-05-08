import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';

import Link from '/src/components/link';

Handlebars.registerPartial('Link', Link);

const comp = Handlebars.compile(tpl);
const Page500 = comp({});

export default Page500;
