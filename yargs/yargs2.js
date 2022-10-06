
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'lista',
                    type: 'boolean',
                    demandOption: true,
                    describe: 'muestra la tabla en consola'
                })
                .check((argv, option) => {
                    if(isNaN(argv.b)){
                        throw 'la bse tiene que ser un numero'

                    }
                    return true;
                })
                .argv

module.exports = argv;