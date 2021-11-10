
export const $ = (selector, context = document) => context.querySelector(selector);

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
    cantidad   && ( resultados = {...resultados, cantidadPersonas       : cantidad   } )
    porcentaje && ( resultados = {...resultados, porcentajeSeleccionado : porcentaje },seleccionarPorcentaje(porcentaje ) )


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
    $('#btnReset').removeAttribute('disabled');

    console.log(resultados)
    
}

const seleccionarPorcentaje = (porcentaje) => {
    $$('#btnPorcentaje').forEach(element => {
        element.classList.remove('selected')
        if ( element.getAttribute('name') == porcentaje) {
            element.classList.add('selected')
        }
    })
}

const resetResultados = () => {
    
    resultados = {
        cantidadPersonas       : 0,
        montoTotal             : 0,
        porcentajeSeleccionado : 0,
        propinaPorPersona      : 0,
        totalPorPersona        : 0
    }
    $('#propinaPersona').innerText = resultados.propinaPorPersona;
    $('#totalPersona').innerText = resultados.totalPorPersona;
    $('#bill').value = '';
    $('#numberPeople').value = '';
    seleccionarPorcentaje(resultados.porcentajeSeleccionado)
    $('#btnReset').setAttribute('disabled',true)
    
}

$('#btnReset').addEventListener('click',resetResultados)

// Poncentaje de propina
$$('#btnPorcentaje')?.forEach((element) => {
    element.addEventListener('click', () => establecerValores({
        porcentaje : parseInt(element.getAttribute('name')) || 0,
    }))
});

const elements = [
    $('#bill'),
    $('#dollar')
]
elements.forEach( elemento => {
    elemento.addEventListener('focus',(e) => {
        $('#inputContainer').classList.add('border')
    
    });
})

// Monto total
$('#bill').addEventListener('change',(e) => establecerValores({
    monto : parseInt(e.target.value) || 0,
}));

$('#custom').addEventListener('change',(e) => establecerValores({
    porcentaje : parseInt(e.target.value) || 0,
}));

$('#bill').addEventListener('blur',(e) => {
    $('#inputContainer').classList.remove('border')
});
// $('#bill').addEventListener('focus',(e) => {
//     $('#inputContainer').classList.add('border')

// });

$('#dollar').addEventListener('blur',(e) => {
    $('#inputContainer').classList.remove('border')
});

$('#dollar').addEventListener('click',(e) => {
    console.log(e)
    $('#inputContainer').classList.add('border')
});

// Cantidad personas
$('#numberPeople').addEventListener('change',(e) => establecerValores({
    cantidad : parseInt(e.target.value) || 0,
}));

console.log($('#dollar'))