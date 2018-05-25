// Math.random() devuelve número aleatorio entre 0 y 1.
const number = Math.random();

let str = ' mayor que 0,5';

if (number <= 0.5) {
  str = ' menor que 0,5';
}

console.log(`${number} es ${str}`);
