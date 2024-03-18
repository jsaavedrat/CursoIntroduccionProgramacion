for (let i = 2; i < 8; i++) {
    // console.log("Iteración número " + i)
}

let contador = 0
while (contador < 0) {
    console.log("Contador: " + contador)
    contador++
}

let x = 2
do {
    // console.log("Valor de x: " + x)
    x++
} while (x < 8)

const nombres = ["Ana", "Juan", "María", "Andres"]
for (const n in nombres) {
    // console.log("Nombre: " + nombres[n])
}

persona = { nombre: "Carlos", edad: 30, cedula: 167283892 }
for (const propiedad in persona) {
    // console.log(propiedad + ": " + persona[propiedad])
}

for (let i = 1; i < 1000; i++) {
    if (i === 6) {
        break;
    }
    //console.log("Geeks" + i);
}

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    //console.log("Número: " + i);
}

function saludo(nombre) {
    // console.log(`¡Hola, ${nombre}!`);
}

let nombrePersona = "Andres"
saludo("Jose");
saludo("Maria");
saludo("Pedro");

saludo(nombrePersona);


function mostrarMensaje() {
   // console.log(`¡Hola, ${nombrePersona}!`);
    return nombrePersona
}

mostrarMensaje();



function suma(a, b) {
    return a + b;
}
const resultado = suma(5, 3);
const resultado2 = mostrarMensaje();
//console.log(resultado, resultado2); 
const sumaFunction = new Function('numero1', 'numero2', 'return numero1 * numero2');
const resultado3 = sumaFunction(10, 15);
//console.log(`El resultado de la suma es: ${resultado3}`);

const sumar = (num1, num2) => num1 + num2;
const resultado4 = sumar(2,4);

console.log(`El resultado de la suma es: ${resultado4}`);


