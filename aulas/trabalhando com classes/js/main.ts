function getHello(name:string) {
    return 'Hello' + name;
}

var name = "Danilo";

document.body.innerHTML = getHello(name);

interface iCar{
    brand:string;
    name:string;
    power:number;
}

class Car {
    brand:string;
    name:string;
    power:number;
}

var getCar = function(car:iCar) {
    //console.log(car.brand, car.name);
};

var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 45;

getCar(Camaro);


/*Usando tipos do Typescript */

// Criando uma variavel do tipo Boolean
var test:boolean; // aceita apenas os valores: true ou false
var id:number = 2; //aceita valores numericos

var decimal:number = 5.4; // aceita valores decimais
var hex:number = 0xf00d; // aceita valor hexadecimais
var bin:number = 0b1010; // aceita valores binarios
var octal:number = 0o744; // aceita valores octadecimal

var name:string = "Danilo";
var carro:string = 'Camaro';

// Vamos criar uma variavel que pega todos os valores e salva como String

var text = ` <h1> name: ${name} Carro: ${carro} </h1>`;

// Adicionando a variavel 'text' para o nosso HTML
document.body.innerHTML = text;

/* Vamos ver como funciona os Arrays */

/* Em Typescript podemos criar Array Generico */

var fruits:string[] = ["Apple","Watermellon", "lemon"];
console.log(fruits);

/* Em Typescript podemos criar Array Generico */
var fruits:Array<string> = ["Apple","Watermellon", "lemon"];
console.log(fruits);

/*Trabalhando com 'enum' - Variaveis com varios tipos de estados */

enum Color {red, green, blue};
console.log(Color.blue); //Para imprimir o valor de um 'enum' podemos usar essa forma

/* Caso quisermos mudar a ordem do enum podemos fazer assim: */
enum Color2 {red = 1, green, blue};
console.log(Color.blue);
/* E assim ele muda a ordem começando pelo numero 1 */

//Para pegar o valor String do Enum
console.log(Color2[2]);

/* Variavel any - pode receber qualquer tipo de valor */
var list:any = 23;
console.log(list);
list = "Minha string ....";
console.log(list);

/* Função VOID */

function printNumber(num:number):void {
    alert(num);
    //Função sem retorno
}


/* Declaração de variaveis de escopo */

var car:string = "Ferrari";

function getCarro(value:string):string{
    // 'var car' é uma variavel de escopo
    var car = value;
    return car;
}

console.log(getCarro("Camaro"));

// Cuidado com o momento que você ter pegar o valor de uma variavel
function testeA(){
    var a = 1;
    a = 2;
    var b = testeB();
        a = 3;
        return b;
    function testeB() {
        return a; 
    }
    
}

function f(value:boolean) {
    // let usando para variaveis locais
    // var usado para variaveis globais
    let a = 100;
    if (value) {
        let b = a + 1;
    }

    // não podemos usar o 'return b;' pois nesta parte o b não existe
}

/* Criando uma função no estilo Typescript */

function g(condition:boolean, x:number):number {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
console.log(g(false,0));

/* Trabalhando com Classes */

class MeuCarro{
    constructor(
        public name:string, 
        public color:string, 
        public power:number)
        {};
    // metodos da classe
    printMeuCarro():void{
        console.log(this.name, this.color, this.power);
    };
}

var ferrari = new MeuCarro("Ferrari","Vermelha", 50);
ferrari.printMeuCarro(); // Executando o metodo

/* Criando atributos privados */

class MeuCarro2{
    private _name:string;
    private _color:string;
    private _power:number;

    //Criando um atributo estatico
    public static list:Array<string> = [];

    constructor(name:string, color:string, power:number){
        this._name = name;
        this._color = color;
        this._power = power;

        MeuCarro2.list.push(name);
    };
    /* Getters and Setters */
    get name():string{
        return this._name;
        // podemos usar o getName
    }

    set name(value:string){
        this._name = value; 
        // podemos usar o setName
    }
}

var corsa = new MeuCarro2("Corsa", "Preto", 40);
corsa.name = "Corsa2";
console.log(corsa.name); // Ele já reconhece que trata-se
// de um getName
console.log(corsa);
console.log(MeuCarro2.list); // Acessando a lista estatica

