import Handlebars from 'handlebars';
import tpl from 'bundle-text:./index.hbs'; // TODO type
import '/src/utils/style.scss';
import './style.scss';

import arrowSvg from '../../resources/icons/arrow.svg';
import pictureSvg from '../../resources/icons/picture.svg';

import Button from '/src/components/button';
import Link from '/src/components/link';
import FormField from '/src/components/formField';

Handlebars.registerPartial('Button', Button);
Handlebars.registerPartial('Link', Link);
Handlebars.registerPartial('FormField', FormField);

const search = document.location.search.slice(1);
let changeDataMode = search === 'change-data';
let changePasswordMode = search === 'change-password';
let defaultMode = !changeDataMode && !changePasswordMode;

const comp = Handlebars.compile(tpl);
const ProfilePage = comp({
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    firstName: 'Иван',
    secondName: 'Иванов',
    displayName: 'Иван',
    phone: '+7 (909) 967 30 30',
    password: '9999999999',
    // TODO
    avatar: pictureSvg,
    arrow: arrowSvg,
    defaultMode,
    changeDataMode,
    changePasswordMode,
});

export default ProfilePage;
