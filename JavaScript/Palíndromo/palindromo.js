//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
function palindromo(palavra1){
    var palavra_inversa = "";
    for(var i = palavra1.length - 1; i >= 0; i--){
        palavra_inversa = palavra_inversa + palavra1[i];
    }
    resultado = palavra1 === palavra_inversa;
    return resultado;
}

function novaPalavra(){
    let opcao = prompt('Deseja inserir uma outra frase/palavra? \n 1 - Sim\n 2 - Não');
    if(opcao ==1){
        verif_palindromo();
    } else if(opcao ==2){
        alert('Até mais!')
    } else{
        alert('Digite uma opção válida!')
        novaPalavra();
    }
}

function verif_palindromo(){
var palavra;

palavra = String(prompt('Digite uma frase ou palavra: '));

palavra_split = palavra.toLowerCase().split(" ")
if(palavra_split.length == 1){
    resultado = palindromo(palavra_split.join(""));
}else{
    palavra_join = palavra_split.join("")
    resultado = palindromo(palavra_join);
}
if(resultado == true){
    alert('É Palíndromo!');
}
else{
    alert('Não é Palíndromo');
}
novaPalavra();
}
verif_palindromo();
