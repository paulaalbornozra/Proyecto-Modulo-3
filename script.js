// ============================================
// FUNCIÓN QUE INICIA DESDE EL BOTÓN HTML
// ============================================

function iniciar() {

    const btn = document.getElementById("btn");

    // Desactiva el botón mientras corre la app
    btn.disabled = true;
    btn.textContent = "Aplicación ejecutándose...";

    // Ejecuta la aplicación principal
    iniciarAplicacion();

    // Reactiva el botón cuando termina
    btn.disabled = false;
    btn.textContent = "Iniciar Aplicación";
}


// ============================================
// FUNCIÓN PRINCIPAL DE LA APLICACIÓN
// Aquí se ejecuta toda la lógica del programa
// ============================================

function iniciarAplicacion() {

console.clear();

console.log("Bienvenid@");
console.log("====================================");


// --------------------------------------------
// Solicita el nombre del usuario
// --------------------------------------------
let nombre = prompt("¿Cuál es tu nombre?");

if (nombre === null || nombre.trim() === ""){
    nombre = "Usuario";
}
console.log("¡Hola " + nombre + "! Vamos a calcular.");


// --------------------------------------------
// FUNCIONES MATEMÁTICAS
// Cada operación es una función independiente
// --------------------------------------------
function sumar(a,b){
return a+b;
}

function restar(a,b){
return a-b;
}

function multiplicar(a,b){
return a*b;
}

function dividir(a,b){
if(b==0){
return "Error: no se puede dividir por cero";
}
return a/b;
}


// --------------------------------------------
// FUNCIÓN CALCULAR
// Decide qué operación ejecutar usando switch
// --------------------------------------------
function calcular(numero1,numero2,operacion){

let resultado;

switch(operacion){

case "1":
resultado=sumar(numero1,numero2);
console.log(numero1+" + "+numero2+" = "+resultado);
break;

case "2":
resultado=restar(numero1,numero2);
console.log(numero1+" - "+numero2+" = "+resultado);
break;

case "3":
resultado=multiplicar(numero1,numero2);
console.log(numero1+" x "+numero2+" = "+resultado);
break;

case "4":
resultado=dividir(numero1,numero2);
console.log(numero1+" / "+numero2+" = "+resultado);
break;

default:
resultado="Opción no válida";
console.log("Opción no válida");
}

return resultado;
}


// --------------------------------------------
// ARREGLO HISTORIAL
// Guarda todas las operaciones como objetos
// --------------------------------------------
const historial = [];


// --------------------------------------------
// CICLO PRINCIPAL DEL PROGRAMA
// Permite repetir operaciones
// --------------------------------------------
let seguir = true;

while(seguir) {

// Solicita números al usuario
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Validación de datos numéricos
if(isNaN(num1)||isNaN(num2)){

console.log("Error: debes ingresar números válidos");
alert("Por favor ingresa números válidos");

}else{

// Solicita operación
let opcion=prompt(
"¿Qué operación quieres hacer?\n"+
"1 - Sumar\n"+
"2 - Restar\n"+
"3 - Multiplicar\n"+
"4 - Dividir"
);

// Ejecuta cálculo
let resultado=calcular(num1,num2,opcion);

// Crea objeto operación
const operacionRealizada={
numero1:num1,
numero2:num2,
opcion:opcion,
resultado:resultado
};

// Guarda en historial
historial.push(operacionRealizada);

alert("Resultado: "+resultado);
}

// Pregunta si desea continuar
let respuesta=prompt("¿Quieres hacer otra operación? (si/no)");

if(respuesta!==null){
respuesta=respuesta.toLowerCase().trim();
}

if(respuesta==="no"){
seguir=false;
}

}


// --------------------------------------------
// MUESTRA HISTORIAL FINAL
// --------------------------------------------
console.log(" ");
console.log("====================================");
console.log("Historial de operaciones:");
console.log("====================================");

for(let i=0;i<historial.length;i++){

console.log(
"Operación "+(i+1)+": "+
historial[i].numero1+" y "+
historial[i].numero2+
" = "+historial[i].resultado
);

}

console.log("====================================");
console.log("¡Gracias por usar la calculadora, "+nombre+"!");

}
