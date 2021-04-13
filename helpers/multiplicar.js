const fs = require("fs");
var colors = require('colors');

const crearArchivo = async (base = 0, listar = false, hasta = 10) => {
  try {
    const separa = "=============================";

    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${'x'} ${i} = ${base *i} \n`;
      consola += `${colors.cyan(base)} ${colors.cyan('x')} ${colors.cyan(i)} = ${colors.yellow(base *i)} \n`;
    }

    if (listar === true) {
      console.log(separa.green);
      console.log(colors.cyan("Tabla del"), colors.yellow(base));
      console.log(separa.green);
      console.log(consola);
    }

    /* fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
            if (err) throw err;
                console.log(`Tabla-${base}.txt creada.`);
            
        }); */

    fs.writeFileSync(`./salida/tabla-${base}-hasta-${hasta}.txt`, salida);

    return colors.rainbow(`Tabla-${base}-hasta-${hasta}.txt creada.`);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
