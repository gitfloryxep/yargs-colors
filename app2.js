const { crearArchivo } = require('./helpers/resultisr')
const colors = require('colors')
const argv = require('./yargs/yargs')

console.clear();

console.log(argv);

crearArchivo(argv.n, argv.e, argv.p, argv.m, argv.s, argv.i, argv.b, argv.a, argv.s, argv.c,)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch(err => console.log(err))