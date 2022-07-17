/* eslint-disable no-unused-vars */
const valorA = 'teste 1';
const valorB = 'teste 1';

// console.log(valorA === valorB);

const referenciaA = {
  key1: 'teste1',
  key2: 'teste2',
  key3: 'teste3',
};
const referenciaB = {
  key1: 'teste1',
  key2: 'teste2',
  key3: 'teste3',
};
// console.log(referenciaA === referenciaB);

const referenciaC = referenciaA;
// console.log(referenciaA === referenciaC);

// referenciaC.key1 = 'teste1 alterado';

// console.log(referenciaA);
// console.log(referenciaC);

// const referenciaD = { ...referenciaA };

// referenciaD.key1 = 'teste1 alterado';

// console.log(referenciaA);
// console.log(referenciaD);

// const referenciaE = Object.assign({}, referenciaA);

// referenciaE.key1 = 'teste1 alterado';

// console.log(referenciaA);
// console.log(referenciaE);

const referencia1 = {
  key1: 'teste1',
  key2: 'teste2',
  key3: 'teste3',
  group: {
    key1: 'teste1',
    key2: 'teste2',
    key3: 'teste3',
  },
};

const referencia2 = { ...referencia1 };

// referencia2.group.key1 = 'novo teste1';

// console.log(referencia1);
// console.log(referencia2);

const referencia3 = { ...referencia1, group: { ...referencia1.group } };
const referencia4 = JSON.parse(JSON.stringify(referencia1));

referencia3.group.key1 = 'novo teste1';
referencia4.group.key2 = 'novo teste1';

console.log(referencia1);
console.log(referencia3);
console.log(referencia4);
