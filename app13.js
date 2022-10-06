const{ crearArchivo } = require('./helpers/multiplicar4')
const argv = require('./yargs')

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
                .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
                .catch(err => console.log(err))