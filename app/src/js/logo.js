import logoPath from '../images/logo.svg'
import { $ } from './app';

const logo =  new Image()

logo.src = logoPath;
logo.alt = "logo";
// logo.classList.add('logo')

$('.logo').appendChild(logo)