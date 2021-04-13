const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
var colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((result) => {
    console.log(result, colors.america("¡Genial!"));
    console.log('')
  })
  .catch((err) => {
    console.log(err);
  });
