import Handlebars from 'handlebars';
import link from 'bundle-text:./index.hbs';
import './style.scss';

interface LinkProps {
   href: String;
   text: String;
   classes?: string;
   target?: String;
}

const Link = (props: LinkProps) => Handlebars.compile(link)(props);

export default Link;
