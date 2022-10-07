

const argv = require('yargs')
                .option('n',{
                    alias: 'nombre',
                    type: 'string',
                    demandOption: true,
                    describe: 'Nombre del Trabajador'
                })
                .option('e',{
                    alias: 'apellido',
                    type: 'string',
                    demandOption: true,
                    describe: 'Apellido del trabajador'
                })
                .option('p',{
                    alias: 'puesto',
                    type: 'string',
                    demandOption: true,
                    describe: 'Puesto del trabajador'
                })
                .option('m',{
                    alias: 'mes',
                    type: 'number',
                    demandOption: true,
                    describe: 'Mes de trabajo'
                })
                .option('s',{
                    alias: 'sueldo',
                    type: 'number',
                    demandOption: true,
                    describe: 'Sueldo del trabajador mensual'
                })
                .option('i',{
                    alias: 'incentivo',
                    type: 'number',
                    demandOption: true,
                    describe: 'La bonificación incentivo por mes'
                })
                .option('b',{
                    alias: 'bono',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Bono 14'
                })
                .option('a',{
                    alias: 'Aginaldo',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Aginaldo'
                })
                .option('d',{
                    alias: 'sincom',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Deducciones sin comprovantes'
                })
                .option('c',{
                    alias: 'ccomprov',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Deducciones con comprovantes'
                })
                .option('l',{
                    alias: 'lista',
                    type: 'boolean',
                    demandOption: true,
                    describe: 'muestra la la lista y los calculos en consola'
                })
              
                .check((argv, option) => {
                    if(isNaN(argv.b)){
                        throw 'Todos los datos deben ser numeros'

                    }
                    return true;
                })
                .argv

module.exports = argv;