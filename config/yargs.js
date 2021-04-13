const argv = require("yargs")
  .option("b", {
    alias: "base",
    describe: "Número para realizar la multiplicación",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    describe: "Enlista la información en pantalla",
    type: "boolean",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    describe: "Hasta que número debe multiplicar la base.",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número.";
    }
    else if (isNaN(argv.h)) {
      throw "Debe ser un número.";
    }
    return true;
  }).argv;

module.exports = argv;
