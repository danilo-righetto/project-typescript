function getHello(name) {
    return 'Hello' + name;
}
var name = "Danilo";
document.body.innerHTML = getHello(name);
var Car = (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    //console.log(car.brand, car.name);
};
var Camaro = new Car();
Camaro.brand = "Chevrolet";
Camaro.name = "Camaro";
Camaro.power = 45;
getCar(Camaro);
/*Usando tipos do Typescript */
// Criando uma variavel do tipo Boolean
var test; // aceita apenas os valores: true ou false
var id = 2; //aceita valores numericos
var decimal = 5.4; // aceita valores decimais
var hex = 0xf00d; // aceita valor hexadecimais
var bin = 10; // aceita valores binarios
var octal = 484; // aceita valores octadecimal
var name = "Danilo";
var carro = 'Camaro';
// Vamos criar uma variavel que pega todos os valores e salva como String
var text = " <h1> name: " + name + " Carro: " + carro + " </h1>";
// Adicionando a variavel 'text' para o nosso HTML
document.body.innerHTML = text;
/* Vamos ver como funciona os Arrays */
/* Em Typescript podemos criar Array Generico */
var fruits = ["Apple", "Watermellon", "lemon"];
console.log(fruits);
/* Em Typescript podemos criar Array Generico */
var fruits = ["Apple", "Watermellon", "lemon"];
console.log(fruits);
/*Trabalhando com 'enum' - Variaveis com varios tipos de estados */
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
console.log(Color.blue); //Para imprimir o valor de um 'enum' podemos usar essa forma
/* Caso quisermos mudar a ordem do enum podemos fazer assim: */
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["green"] = 2] = "green";
    Color2[Color2["blue"] = 3] = "blue";
})(Color2 || (Color2 = {}));
;
console.log(Color.blue);
/* E assim ele muda a ordem começando pelo numero 1 */
//Para pegar o valor String do Enum
console.log(Color2[2]);
/* Variavel any - pode receber qualquer tipo de valor */
var list = 23;
console.log(list);
list = "Minha string ....";
console.log(list);
/* Função VOID */
function printNumber(num) {
    alert(num);
    //Função sem retorno
}
/* Declaração de variaveis de escopo */
var car = "Ferrari";
function getCarro(value) {
    // 'var car' é uma variavel de escopo
    var car = value;
    return car;
}
console.log(getCarro("Camaro"));
// Cuidado com o momento que você ter pegar o valor de uma variavel
function testeA() {
    var a = 1;
    a = 2;
    var b = testeB();
    a = 3;
    return b;
    function testeB() {
        return a;
    }
}
function f(value) {
    // let usando para variaveis locais
    // var usado para variaveis globais
    var a = 100;
    if (value) {
        var b = a + 1;
    }
    // não podemos usar o 'return b;' pois nesta parte o b não existe
}
/* Criando uma função no estilo Typescript */
function g(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(g(false, 0));
