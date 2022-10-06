const { option } = require("yargs");
const yargs = require("yargs");

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l',{
                    alias: 'lista',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })
                .check((argv, option) => {
                    if(isNaN(argv.b)){
                        throw 'la bse tiene que ser un numero'

                    }
                    return true;
                })
                .argv

module.exports = argv;