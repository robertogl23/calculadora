import inconDollarPath from '../images/icon-dollar.svg'
import inconDollar2Path from '../images/icon-dollar-2.svg'
import inconPersonPath from '../images/icon-person.svg'

// const iconPerson = new Image();
// iconPerson.src   = inconPersonPath;
// iconPerson.alt   = "icon-person";

const crearIcon = (opciones) => {
    const icon = new Image();
    icon.src   = opciones?.path;
    icon.alt   = opciones?.alt;
    opciones?.css && icon.classList.add(opciones.css)
    document.getElementById( opciones?.id )?.appendChild( icon )
    // return icon;
}
const ObtenerIconPorTipo = (type,id) => {
    type === "person" && crearIcon({
        path: inconPersonPath,
        alt : "icon-person",
        id  : id
    })
    type === "dollar" && crearIcon({
        path: inconDollarPath,
        alt : "icon-dollar",
        id  : id
    })
    type === "dollar-2" && crearIcon({
        path: inconDollar2Path,
        alt : "icon-dollar",
        id  : id,
        css : "icon-dollar"
    })
}
Array.from( document.getElementsByName( "icon" ) )?.map( ( icon ) => 
{
    icon.getAttribute( "type" ) != null && ObtenerIconPorTipo( icon.getAttribute( "type" ), icon.id )

})
    
// document.getElementById( "image-person" )?.appendChild( iconPerson )