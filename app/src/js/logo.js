import logoPath from '../images/logo.svg'

const logo =  new Image()

logo.src = logoPath;
logo.alt = "logo";

document.body.appendChild(logo)