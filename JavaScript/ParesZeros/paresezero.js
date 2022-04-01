//Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

var vetor = [1, 3, 4, 6, 80, 33, 23, 90];

var vetor2 = vetor.map(item => item%2 == 0 ? 0 : item);

alert(`${vetor2}`);
