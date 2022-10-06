const { crearArchivo } = require('./helpers/resultisr')
const colors = require('colors')
const argv = require('./yargs/yargs')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
                .catch(err => console.log(err))