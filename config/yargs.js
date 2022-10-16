var colors = require('colors');
const argv = require('yargs')
                .option('t', {
                    alias: 'tiempo',
                    type: 'number',
                    demandOption: true,
                    describe: 'Tiempo'
                })
                .option('s', {
                    alias: 'sueldo',
                    type: 'number',
                    demandOption: true,
                    describe: 'sueldo base'.blue
                })
                .option('n', {
                    alias: 'nombre',
                    type: 'string',
                    demandOption: true,
                    describe: 'Nombre'
                })
                .option('a', {
                    alias: 'apellido',
                    type: 'string',
                    demandOption: true,
                    describe: 'Apellido'.blue
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    describe: 'Muestra la tabla en consola'.blue
                })
                .check((argv, options) => {
                    if( isNaN(argv.t)){
                        throw 'La base tiene que ser un número'.red
                    }
                    return true;
                })
                .argv
module.exports = argv;