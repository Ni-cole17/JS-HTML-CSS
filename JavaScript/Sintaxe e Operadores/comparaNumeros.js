function compara(num1,num2){
    num1 == num2 ? console.log("Os números são iguais") : console.log("Os números não são iguais");
    soma = num1 + num2;
    if (soma > 20){
        s = ' ,que é maior que 10 e maior que 20';
    }
    else if(soma < 20 && soma>10){
        s = ' ,que é maior que 10 e menor que 20';
    }
    else{
        s = ' ,que é menor que 10 e menor que 20';
    }
    console.log("Sua soma é",soma+s);
}

compara(1,1);
