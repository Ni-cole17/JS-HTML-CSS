console.log('TypeScript')

//TYPES E INTERFACES
function soma(a: number, b: number){
    return a + b;
}

// Types

// Interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarSom(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false,
    executarSom: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal_2: IDomestico = {
    domestico: true,
    nome: 'Cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    executarSom: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

//INPUT
 const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event)=> {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
});

//Generic Types
function adicionaApendiceALista <T>(array: T[], valor: T){
    return array.map(() => valor);
}
adicionaApendiceALista([1,2,3],3);


//Mais sobre interfaces
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'supervisor' | 'coordenador'; //Variável opcional
}

function redirecione(usuario: IUsuario ){
    if(usuario.cargo){
        //redirecionar para usuario.cargo
    }
        //redirecionar para a área do usuário
}
interface Cachorro {
     nome: string,
     idade: number,
     parque?: string;
}
type CachorroSomenteLeitura = {
    readonly[K in keyof Cachorro]-?: Cachorro[K]; //Remove os valores adicionais
}

class MeuCachorro implements Cachorro{
    idade;
    nome;
    parque;

    constructor(idade,nome){
        this.idade = idade;
        this.nome = nome;
    }
}

const cao = new MeuCachorro('Apolo',14);
console.log(cao);


