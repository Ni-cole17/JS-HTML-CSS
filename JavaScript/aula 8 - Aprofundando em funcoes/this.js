//Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
//Crie seus próprios objetos para esta atividade!
const pessoa =
{
nome: 'Nicole',
idade: 22,
};
const pessoa2=
{
nome: 'Eunice',
idade: 34,
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(pessoa,12));
console.log(calculaIdade.apply(pessoa2,[12]));
