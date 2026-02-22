// ============================================================
//  🖥  APLICACIÓN DE CONSOLA JS — MÓDULO 3
//  Docente: Sabina Romero
//  5 Lecciones: Intro · Variables · Arreglos · Funciones · Objetos
// ============================================================

// ────────────────────────────────────────────────────────────
// LECCIÓN 1 — Introducción a JavaScript
// Conceptos: console.log(), prompt(), alert()
// ────────────────────────────────────────────────────────────
console.log('════════════════════════════════════════');
console.log('  🚀 LECCIÓN 1 — Introducción a JavaScript');
console.log('════════════════════════════════════════');

// Mostrar un mensaje de bienvenida en la consola
console.log('¡Hola mundo! Bienvenido al Módulo 3 de JavaScript.');
console.log('Esta app se ejecuta directamente en la consola del navegador.');

// prompt() pide un dato al usuario y lo devuelve como string
const nombre = prompt('👤 ¿Cuál es tu nombre?');

// alert() muestra una ventana emergente
alert(`¡Hola, ${nombre}! Bienvenido/a al curso de JavaScript. 🎉`);

// Mostrar el nombre recibido en la consola
console.log(`✅ Nombre recibido: ${nombre}`);
console.log('💡 console.log() imprime aquí, prompt() pide datos, alert() muestra un aviso.');
console.log('');

// ────────────────────────────────────────────────────────────
// LECCIÓN 2 — Variables, Operaciones y Condicionales
// Conceptos: let, const, operadores, if/else, switch
// ────────────────────────────────────────────────────────────
console.log('════════════════════════════════════════');
console.log('  📦 LECCIÓN 2 — Variables y Condicionales');
console.log('════════════════════════════════════════');

// const: su valor NO cambia luego de asignarse
const APP_VERSION = '1.0.0';
const MODULO = 3;
console.log(`App versión: ${APP_VERSION}  |  Módulo: ${MODULO}`);

// let: su valor SÍ puede cambiar
let resultado = 0;

// Pedir dos números al usuario
const num1 = Number(prompt('🔢 Ingresa el primer número:'));
const num2 = Number(prompt('🔢 Ingresa el segundo número:'));

// Operaciones matemáticas básicas
const suma     = num1 + num2;
const resta    = num1 - num2;
const producto = num1 * num2;
const division = num2 !== 0 ? num1 / num2 : 'Error: división por cero';

resultado = suma;

console.log(`Números ingresados → ${num1} y ${num2}`);
console.log(`➕ Suma:        ${suma}`);
console.log(`➖ Resta:       ${resta}`);
console.log(`✖  Producto:   ${producto}`);
console.log(`➗ División:   ${division}`);

// if / else if / else — clasificar el resultado de la suma
console.log('--- Clasificación del resultado (suma) ---');
if (resultado > 100) {
    console.log(`📊 ${resultado} es un número GRANDE (mayor a 100)`);
} else if (resultado > 10) {
    console.log(`📊 ${resultado} es un número MEDIANO (entre 11 y 100)`);
} else {
    console.log(`📊 ${resultado} es un número PEQUEÑO (10 o menos)`);
}

// switch — detectar el día de la semana según num1 (1-7)
console.log('--- Día de la semana (basado en el primer número, 1 a 7) ---');
const diaSemana = Math.abs(Math.round(num1)) % 8 || 1; // asegura un valor entre 1 y 7
switch (diaSemana) {
    case 1:  console.log('📅 Día 1 → Lunes');     break;
    case 2:  console.log('📅 Día 2 → Martes');    break;
    case 3:  console.log('📅 Día 3 → Miércoles'); break;
    case 4:  console.log('📅 Día 4 → Jueves');    break;
    case 5:  console.log('📅 Día 5 → Viernes');   break;
    case 6:  console.log('📅 Día 6 → Sábado');    break;
    case 7:  console.log('📅 Día 7 → Domingo');   break;
    default: console.log('📅 Número fuera de rango (1–7)');
}
console.log('');

// ────────────────────────────────────────────────────────────
// LECCIÓN 3 — Arreglos y Ciclos
// Conceptos: [], for, for...of, while, filter(), push()
// ────────────────────────────────────────────────────────────
console.log('════════════════════════════════════════');
console.log('  📋 LECCIÓN 3 — Arreglos y Ciclos');
console.log('════════════════════════════════════════');

// Declarar un arreglo (array) de números
const numeros = [15, 3, 42, 8, 27, 11, 6, 33, 20, 5];
console.log('Arreglo original:', numeros);

// for clásico — recorrer con índice
console.log('--- for clásico: mostrar cada número ---');
for (let i = 0; i < numeros.length; i++) {
    console.log(`  índice ${i}: ${numeros[i]}`);
}

// for...of — recorrer directamente los valores (ES6)
console.log('--- for...of: mostrar cuadrados ---');
for (const num of numeros) {
    console.log(`  ${num}² = ${num * num}`);
}

// while — buscar el primer número mayor a 20
console.log('--- while: buscar el primer número mayor a 20 ---');
let pos = 0;
while (pos < numeros.length) {
    if (numeros[pos] > 20) {
        console.log(`  Primer número mayor a 20: ${numeros[pos]} (posición ${pos})`);
        break;
    }
    pos++;
}

// filter() — crear nuevo arreglo solo con números pares
const pares = numeros.filter(n => n % 2 === 0);
console.log('Números pares (filter):', pares);

// filter() — números mayores a 15
const mayores = numeros.filter(n => n > 15);
console.log('Números mayores a 15 (filter):', mayores);

// push() — construir un arreglo dinámicamente con los datos del usuario
console.log('--- push(): construir lista con datos del usuario ---');
const listaUsuario = [];
for (let i = 1; i <= 3; i++) {
    const valor = prompt(`✏️ Ingresa el elemento ${i} de tu lista:`);
    listaUsuario.push(valor);
}
console.log('Tu lista:', listaUsuario);
console.log('');

// ────────────────────────────────────────────────────────────
// LECCIÓN 4 — Funciones
// Conceptos: function, parámetros con default, return,
//            arrow functions, funciones dentro de funciones
// ────────────────────────────────────────────────────────────
console.log('════════════════════════════════════════');
console.log('  🔧 LECCIÓN 4 — Funciones');
console.log('════════════════════════════════════════');

// Función básica con parámetros y return
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Parámetro con valor por defecto: si no se envía b, usa 1
function dividir(a, b = 1) {
    if (b === 0) return 'Error: división por cero';
    return a / b;
}

console.log(`sumar(10, 5)       → ${sumar(10, 5)}`);
console.log(`restar(10, 5)      → ${restar(10, 5)}`);
console.log(`multiplicar(10, 5) → ${multiplicar(10, 5)}`);
console.log(`dividir(10, 5)     → ${dividir(10, 5)}`);
console.log(`dividir(10)        → ${dividir(10)}   (usa valor por defecto b=1)`);
console.log(`dividir(10, 0)     → ${dividir(10, 0)}`);

// Arrow functions (ES6) — forma compacta
const elevarAlCuadrado = (n) => n * n;
const esPar            = (n) => n % 2 === 0;
const saludar          = (nombre) => `¡Hola, ${nombre}! 👋`;

console.log(`elevarAlCuadrado(7) → ${elevarAlCuadrado(7)}`);
console.log(`esPar(8)            → ${esPar(8)}`);
console.log(`esPar(9)            → ${esPar(9)}`);
console.log(`saludar("${nombre}") → ${saludar(nombre)}`);

// Función que llama a otras funciones internamente
function calcularArea(base, altura) {
    // Llama a la función multiplicar definida más arriba
    return multiplicar(base, altura);
}

console.log(`calcularArea(8, 5)  → ${calcularArea(8, 5)}`);

// Función que devuelve un objeto con estadísticas del arreglo
function calcularEstadisticas(arr) {
    const total = arr.reduce((acc, n) => acc + n, 0);
    return {
        cantidad: arr.length,
        suma:     total,
        min:      Math.min(...arr),
        max:      Math.max(...arr),
        promedio: (total / arr.length).toFixed(2)
    };
}

const stats = calcularEstadisticas(numeros);
console.log('--- Estadísticas del arreglo numeros ---');
console.log(`  Cantidad: ${stats.cantidad}`);
console.log(`  Suma:     ${stats.suma}`);
console.log(`  Mínimo:   ${stats.min}`);
console.log(`  Máximo:   ${stats.max}`);
console.log(`  Promedio: ${stats.promedio}`);
console.log('');

// ────────────────────────────────────────────────────────────
// LECCIÓN 5 — Objetos
// Conceptos: {}, propiedades, métodos, this,
//            array de objetos, forEach(), map()
// ────────────────────────────────────────────────────────────
console.log('════════════════════════════════════════');
console.log('  🗂  LECCIÓN 5 — Objetos');
console.log('════════════════════════════════════════');

// Crear un objeto con propiedades y métodos
const estudiante = {
    nombre:   nombre,     // usa el nombre que ingresó el usuario
    modulo:   3,
    aprobado: true,
    notas:    [6.5, 5.8, 7.0, 6.2],

    // Método: función definida dentro del objeto
    presentarse: function () {
        return `Soy ${this.nombre}, estoy en el módulo ${this.modulo}.`;
    },

    // Método que usa this para calcular promedio de notas
    calcularPromedio: function () {
        const suma = this.notas.reduce((acc, n) => acc + n, 0);
        return (suma / this.notas.length).toFixed(1);
    }
};

// Acceder a propiedades con punto
console.log('Nombre del estudiante:', estudiante.nombre);
console.log('Módulo:', estudiante.modulo);
console.log('¿Aprobado?', estudiante.aprobado);
console.log('Notas:', estudiante.notas);

// Llamar a métodos del objeto
console.log(estudiante.presentarse());
console.log(`Promedio de notas: ${estudiante.calcularPromedio()}`);

// Array de objetos — lista de cursos
const cursos = [
    { id: 1, nombre: 'HTML & CSS',    completado: true,  duracion: 20 },
    { id: 2, nombre: 'JavaScript',    completado: false, duracion: 40 },
    { id: 3, nombre: 'Git & GitHub',  completado: true,  duracion: 10 },
    { id: 4, nombre: 'Node.js',       completado: false, duracion: 30 },
];

console.log('--- forEach(): mostrar cada curso ---');
// forEach: ejecuta algo por cada elemento (no devuelve un nuevo array)
cursos.forEach(curso => {
    const estado = curso.completado ? '✅' : '⏳';
    console.log(`  ${estado} [${curso.id}] ${curso.nombre} — ${curso.duracion}h`);
});

console.log('--- map(): extraer solo los nombres ---');
// map: transforma cada elemento y devuelve un NUEVO array
const nombresCursos = cursos.map(curso => curso.nombre);
console.log('Nombres:', nombresCursos);

console.log('--- map(): crear resumen con estado ---');
const resumenCursos = cursos.map(curso => ({
    curso:  curso.nombre,
    estado: curso.completado ? 'Completado' : 'Pendiente'
}));
console.log('Resumen de cursos:', resumenCursos);

// ────────────────────────────────────────────────────────────
// CIERRE
// ────────────────────────────────────────────────────────────
console.log('');
console.log('════════════════════════════════════════');
console.log(`  🎉 ¡Felicidades, ${nombre}!`);
console.log('  Completaste las 5 lecciones del Módulo 3.');
console.log('  ✅ Lección 1 — Introducción (console, prompt, alert)');
console.log('  ✅ Lección 2 — Variables y Condicionales (let, const, if, switch)');
console.log('  ✅ Lección 3 — Arreglos y Ciclos (for, while, filter, push)');
console.log('  ✅ Lección 4 — Funciones (function, arrow fn, return)');
console.log('  ✅ Lección 5 — Objetos ({}, this, forEach, map)');
console.log('════════════════════════════════════════');
alert(`¡Felicidades, ${nombre}! 🎉\nCompletaste las 5 lecciones del Módulo 3.`);