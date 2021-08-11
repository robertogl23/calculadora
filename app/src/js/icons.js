import inconDollarPath from '../images/icon-dollar.svg'
import inconPersonPath from '../images/icon-person.svg'

const iconPerson = new Image();
iconPerson.src   = inconPersonPath;
iconPerson.alt   = "icon-person"

Array.from( document.getElementsByName( "image-dollar" ) )?.map( ( icon ) => 
{
    const iconDollar = new Image();
    iconDollar.src   = inconDollarPath;
    iconDollar.alt   = "icon-dollar"
    iconDollar.classList.add("icon-dollar")  
    icon.appendChild( iconDollar )
})
    
document.getElementById( "image-person" )?.appendChild( iconPerson )