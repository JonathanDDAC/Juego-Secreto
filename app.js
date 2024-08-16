let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = []
let numeroMaximo = 10
CondicionInicial ();
//let parrafo = document.querySelector('p'); 
//parrafo.innerHTML ='Selecciona un numero del 1 al 10'; //en este caso P hace referencia al parrajo ya cargado en HTML

function asignarTextoElemento(Elemento, texto ){ //asi se crea la funcion - Elemento y texto son variables
    let ElementoHTML = document.querySelector(Elemento); //document.queryselector permite asignar la variable a titulo
    ElementoHTML.innerHTML = texto; //y esta variable se asigna valor el cual cambia en la ventana
    // del navegador ya que h1 significa Header 1
    return;
}

function verificaIntento() {
let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log('numero usuario ' + numeroUsuario);
console.log('numero secreto ' + numeroSecreto);
console.log(numeroUsuario == numeroSecreto);
console.log('intentos ' + intentos);

if(numeroUsuario == numeroSecreto){
    asignarTextoElemento('P',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`); //operador terniario para hacer un if con un signo de interrogacion y else es dos puntos :
   document.getElementById('reiniciar').removeAttribute('disabled');
    // si el usuario no acertO
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero es menor')
        } else {
            asignarTextoElemento('p','El numero es mayor')
        }
        intentos++;
        limpiarcaja()
    }
return;
}

function limpiarcaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //return nos devuelve el resultado asignado en la funcion
     //se desea que el proximo numero secreto no se repita con los anteriores por eso
     //si el numero genreado esta incluido en la lista listaNumerosGenrados entonces generamos un nuevo numero
     //hasta que se generen todos los numeros del 1 al numero maximo configurado
     console.log(listaNumeroSorteados);
     // si ya sorteamos todos los numeros, podemos mostrar un mensaje en la pantalla para cerrar juego
     if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

     } else {        
     if(listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); //si el numero esta en la lista genera nuevamente el numero secreto
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //Indicar el mensaje de elija un numero
    CondicionInicial();
    //deshabilitar el boton de nuevo juego    
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    }
function CondicionInicial () {
    asignarTextoElemento('h1','Juego del Numero Secreto'); //asi se asigna la funcion creada (h1=al elemento y el texto que se asigna)
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo} `); 
      //Generar un nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //reiniciar el numero de intentos
    intentos = 1;
}





