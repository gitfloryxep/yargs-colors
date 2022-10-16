var pdf = require('html-pdf');
const { crearArchivo } = require ('./helpers/Calculo_Isr')
const colors = require('colors')
const argv = require('./config/yargs')
if(argv.t <= 5){
console.clear();

console.log(argv);



crearArchivo(argv.t, argv.s, argv.n, argv.a, argv.l)
                .then(console.log('Realizado exitosamente'))
                .catch(err => console.log(err))

   
}else{
    console.log('Calculo maximo 5 años');
}