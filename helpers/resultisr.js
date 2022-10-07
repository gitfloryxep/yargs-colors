const fs = require('fs')



const crearArchivo = async(nombre, apellido, puesto, mes, sueldo, incentivo, bono, aginaldo, sincom, ccomprov, listar=false) =>{
        try{



            

    
            let mtrabajo ='';
            let smensual = '';
            let bincentivo ='';
            let bono14 = '';
            let aguinald ='';
            let totalingreso = '';
            let dbono ='';
            let daguinald = '';
            let igss ='';
            let dedsin = '';
            let dedcon ='';
            let totdeducciones = '';
            let rentafect ='';
            let isrp = '';

            for(let i = 0.0483; v = 0.05; ){
                mtrabajo = `${mes}\n`;
                smensual =`${sueldo}\n`;
                bincentivo =`${incentivo}\n`;
                bono14 =`${bono}\n`;
                aguinald =`${aginaldo}\n`;
                totalingreso =`${mes} * ${sueldo} + ${incentivo} + ${bono} + ${aginaldo}\n`;
                dbono =`${bono}\n`;
                daguinald =`${aginaldo}\n`;
                igss =`${i} * ${sueldo} * ${mes}\n`;
                dedsin =`${sincom}\n`;
                dedcon =`${ccomprov}\n`;
                totdeducciones =`${igss} + ${bono} + ${aginaldo} + ${sincom} + ${ccomprov}\n`;
                rentafect =`${totalingreso} - ${totdeducciones}\n`;
                isrp =`${rentafect} * ${v}\n`;

                

            }
            if (listar){
                console.log('=====================');
                console.log('   ISR PROYECTADO    ');
                console.log('=====================');
                console.log('  Nombre  ',nombre );
                console.log('  Apellido ', apellido);
                console.log('  Puesto  ', puesto);
                console.log('  Mes de Trabajo  ', mtrabajo);
                console.log('  Sueldo Mensual  ', smensual);
                console.log('  Bonificacion Incentivo ', bincentivo);
                console.log('  Bono 14  ', bono14);
                console.log('  Aguinaldo  ', aguinald);
                console.log('  Total de ingreso  ', totalingreso);
                console.log('  Deducciones  ');
                console.log('  Bono 14  ', dbono);
                console.log('  Aguinaldo  ', daguinald);
                console.log('  IGSS  ', igss);
                console.log('  Deducciones sin comprobante  ', dedsin);
                console.log('  Deducciones Concomprobante  ', dedcon);
                console.log('  Total de deducciónes  ', totdeducciones);
                console.log('  Renta afectada  ', rentafect);
                console.log('  ISR  ', isrp);
            }

            fs.writeFileSync(`ISR-${listar}.txt`, salida);

            return `ISR-${listar}.txt`;

        } catch (err){
            throw err
        }
}

module.exports = {
    crearArchivo
}