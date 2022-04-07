//Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
//Dentro de ContaBancaria, construa o getter e o setter de saldo;
//Dentro de ContaBancaria, crie os métodos sacar e depositar;
//Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
//Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
//Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
//Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.

class ContaBancaria{

    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo =0;
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(sald){
        this._saldo = sald;
    }

    sacar(val){
        if(val > this.saldo){
            console.log("Não tem saldo suficiente para realizar a operação!");
        }else{
        this._saldo -= val;
        }
        return this._saldo;
    } 
    depositar(val){
        this._saldo += val;
        return this._saldo;
    }

}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,tipo,cartaocredito){
        super(agencia,numero,tipo);
        this.tipo = "Conta corrente";
    }
    get cartaocredito(){
        return this._cartaocredito;
    }
    set cartaocredito(valor){
        this._cartaocredito = valor;
    }


}
class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero,tipo){
        super(agencia,numero,tipo);
        this.tipo = "Conta Poupança";
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    

}
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero,tipo){
        super(agencia,numero,tipo);
        this.tipo = "Conta Universitária";
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if(valor < 500){
        this.saldo = this.saldo + valor; 
        }
        else{
            console.log("Não é possível sacar valores maiores que 500 reais!");
        }
    }
    

}
