//Crie uma função que recebe o array alunos e um número que irá representar a média final;
//Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
//Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Nicole',
        nota: 10,
        turma: '1B',
    },
    {
        nome: 'Jacó',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Beatriz',
        nota: 6.5,
        turma: '1B',
    },
    {
        nome: 'Mariana',
        nota: 9.2,
        turma: '1B',
    },
];

function media_final(alunos,mediafinal){
    var aprovados = []
    for (var i = 0; i < alunos.length;i++){
        const {nome,nota} = alunos[i];
        if(nota >= mediafinal){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
resultado_final = media_final(alunos,7)
console.log(resultado_final);