var jogador1 = 6;
var jogador2 = 4;
var placar;

if(jogador1>0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto"');
    placar = jogador1 > jogador2;
} else if(jogador2 > 0){
    console.log("Jogador2 marcou ponto!")
    placar = jogador2 > jogador1;
}else{
    console.log('Ninguém marcou ponto');
}

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log("Jogadores Inválidos");

//switch/case
switch(placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Ninguém ganhou");
}