function validacionRut(cedula) {
    num1 = 3 * parseInt(cedula[0]);
    num2 = 2 * parseInt(cedula[1]);
    num3 = 7 * parseInt(cedula[2]);
    num4 = 6 * parseInt(cedula[3]);
    num5 = 5 * parseInt(cedula[4]);
    num6 = 4 * parseInt(cedula[5]);
    num7 = 3 * parseInt(cedula[6]);
    num8 = 2 * parseInt(cedula[7]);

    var suma = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8;

    division = suma / 11;

    entero = parseInt(division);

    decimal = division - entero;

    digito = (11 - (11 * (decimal)));

    digitoFinal = Math.round(digito);

    return digitoFinal;
}