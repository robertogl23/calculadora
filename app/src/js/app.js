
const $ = (selector, context = document) => context.querySelector(selector);

const $$ = (selector, context = document) => context.querySelectorAll(selector);

let resultados = {
    cantidadPersonas       : 0,
    montoTotal             : 0,
    porcentajeSeleccionado : 0,
    propinaPorPersona      : 0,
    totalPorPersona        : 0
}

const calcularPorcentaje = (cantidad,porcentaje) => Math.floor(cantidad*porcentaje)/100;

const establecerValores = ({cantidad,monto,porcentaje}) => {
    
    monto      && ( resultados = {...resultados, montoTotal             : monto      } )
    porcentaje && ( resultados = {...resultados, porcentajeSeleccionado : porcentaje } )
    cantidad   && ( resultados = {...resultados, cantidadPersonas       : cantidad   } )

    const {cantidadPersonas,montoTotal,porcentajeSeleccionado} = resultados;

    if(cantidadPersonas == 0 || montoTotal == 0 || porcentajeSeleccionado == 0){
        console.log('falta valores')
        return 
    }

    const montoFinal           = montoTotal + calcularPorcentaje(montoTotal,porcentajeSeleccionado);
    const montoTotalPorPersona = montoFinal / cantidadPersonas;
    const propina              = calcularPorcentaje(montoTotal,porcentajeSeleccionado) / cantidadPersonas;
 
    resultados = {
        ...resultados,
        totalPorPersona : montoTotalPorPersona,
        propinaPorPersona : propina
    }

    $('#propinaPersona').innerText = resultados.propinaPorPersona;
    $('#totalPersona').innerText = resultados.totalPorPersona;

    console.log(resultados)
    
}

$('#btnReset').addEventListener('click',() => console.log(calcularPorcentaje(100,5)))

// Poncentaje de propina
$$('#btnPorcentaje')?.forEach((element) => {
    element.addEventListener('click', () => establecerValores({
        porcentaje : parseInt(element.getAttribute('name')) || 0,
    }))
});

// Monto total
$('#bill').addEventListener('change',(e) => establecerValores({
    monto : parseInt(e.target.value) || 0,
}))

// Cantidad personas
$('#numberPeople').addEventListener('change',(e) => establecerValores({
    cantidad : parseInt(e.target.value) || 0,
}))