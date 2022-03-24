//Booleanos
var VouF = false;
console.log(typeof(VouF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//declaração
var nome;
nome = 'Nicole';
console.log(nome);

let variavel2 = 'Nicole';
console.log(variavel2);

//Variáveis do tipo const precisam ser inicializadas com algum valor e não podem ser reatribuídas.

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopolocalinterno = 'local';
}

escopoLocal();