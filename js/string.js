import { skaicius, x, a, b, c, d, i, f, g ,k } from "./numbers.js";

const lentele = `${skaicius} * ${x} = ${skaicius}
${skaicius} * ${a} = ${skaicius * a}
${skaicius} * ${b} = ${skaicius * b}
${skaicius} * ${c} = ${skaicius * c}
${skaicius} * ${d} = ${skaicius * d}
${skaicius} * ${i} = ${skaicius * i}
${skaicius} * ${f} = ${skaicius * f}
${skaicius} * ${g} = ${skaicius * g}
${skaicius} * ${k} = ${skaicius * k}`;

const daugyba = skaicius + " * " + x + " = " + skaicius + '\n' + skaicius + " * " + a + " = " + skaicius * a + '\n'+ skaicius + " * " + b + " = " + skaicius * b + "\n"+ skaicius + " * " + c + " = " + skaicius * c + "\n"+ skaicius + " * " + d + " = " + skaicius * d + "\n"+ skaicius + " * " + i + " = " + skaicius * i + "\n"+ skaicius + " * " + f + " = " + skaicius * f + "\n"+ skaicius + " * " + g + " = " + skaicius * g + "\n"+ skaicius + " * " + k + " = " + skaicius * k ; 


console.log(lentele);
console.log();
console.log(daugyba);

export { lentele, daugyba };
