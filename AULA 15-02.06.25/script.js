// Exercicio 01 - Crie um programa que some dois números e exiba o resultado no console.
console.log()
console.log("Exercicio 01 - Crie um programa que some dois números e exiba o resultado no console.")
console.log()

let x = 10
let y = 40
let soma = x + y
console.log("Resultado da soma: " + soma)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 02 - Crie um programa que subtraia dois números e exiba o resultado no console.

console.log("Exercicio 02 - Crie um programa que subtraia dois números e exiba o resultado no console.")
console.log()

x = 40
y = 10
let subtracao = x - y
console.log("Resultado da subtração: " + subtracao)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 03 - Crie um programa que multiplique dois números e exiba o resultado no console.

console.log("Exercicio 03 - Crie um programa que multiplique dois números e exiba o resultado no console.")
console.log()

x = 40
y = 10
let multiplicacao = x * y
console.log("Resultado da multiplicação: " + multiplicacao)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 04 - Crie um programa que divida dois números e exiba o resultado no console.

console.log("Exercicio 04 - Crie um programa que divida dois números e exiba o resultado no console.")
console.log()

x = 40
y = 10
let divisao = x / y
console.log("Resultado da divisão: " + divisao)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 05 - Crie um programa que calcule o resto da divisão de dois números e exiba o resultado no console.

console.log("Exercicio 05 - Crie um programa que calcule o resto da divisão de dois números e exiba o resultado no console.")
console.log()

x = 30
y = 20
let resto = x % y
 
if (resto === 0){
    console.log("Erro: Não é possível dividir por zero.")
}else {
    console.log("O resto da divisão de: " + x + " por " + y + " é: " + resto)
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 06 - Crie um programa que calcule a média de dois números e exiba o resultado no console.

console.log("Exercicio 06 - Crie um programa que calcule a média de dois números e exiba o resultado no console.")
console.log()


x = 10
y = 5
soma = x + y
let media = soma / 2
console.log("A média é: " + media)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 07 - Crie um programa que verifique se um número é par e exiba o resultado no console.

console.log("Exercicio 07 - Crie um programa que verifique se um número é par e exiba o resultado no console.")
console.log()


x = 2

if (x % 2 === 0) {
    console.log("O número é PAR!")
}else {
    console.log("O número é IMPAR!")
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 08 - Crie um programa que verifique se um número é positivo, negativo ou zero e exiba o resultado no console.

console.log("Exercicio 08 - Crie um programa que verifique se um número é positivo, negativo ou zero e exiba o resultado no console.")
console.log()


x = 10

if (x > 0){
    console.log("O número " + x + " é POSITIVO!")
}else if (x < 0){
    console.log("O número " + x + " é NEGATIVO!")
}else {
    console.log("O número é ZERO!")
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 09 - Crie um programa que verifique se um número é maior, menor ou igual a outro número e exiba o resultado no console.

console.log("Exercicio 09 - Crie um programa que verifique se um número é maior, menor ou igual a outro número e exiba o resultado no console.")
console.log()


x = 10
y = 10

if (x > y) {
    console.log(x + " É maior que " + y)
}else if (x < y) {
    console.log(x + " É menor que " + y)
}else {
    console.log(x + " É igual a " + y)
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 10 - Crie um programa que verifique se um número é múltiplo de outro número e exiba o resultado no console.

console.log("Exercicio 10 - Crie um programa que verifique se um número é múltiplo de outro número e exiba o resultado no console.")
console.log()


x = 20
y = 0

if ( x % y == 0 ) {
    console.log("O número " + x + " é multiplo de " + y)
} else if ( x % y != 0 ) {
    console.log("O número " + x + " não é multiplo de " + y)
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 11 - Crie um programa que verifique se uma string contém uma determinada substring e exiba o resultado no console.

console.log("Exercicio 11 - Crie um programa que verifique se uma string contém uma determinada substring e exiba o resultado no console.")
console.log()


let textocompleto = "Fala rapaziada, tudo tranquilo?"
let pedacodotexto = "Fala"

if (textocompleto.includes(pedacodotexto)){
     console.log(textocompleto + " CONTÉM " + pedacodotexto)
}else {
    console.log(textocompleto + " NÃO CONTÉM " + pedacodotexto)
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 12 - Crie um um programa que receba o raio de uma circunferência e mostre o diâmetro, comprimento e área desta.

console.log("Exercicio 12 - Crie um um programa que receba o raio de uma circunferência e mostre o diâmetro, comprimento e área desta.")
console.log()


let raio = 5
let diametro = 2 * raio
let comprimentro = 2 * Math.PI * raio
let area = Math.PI * Math.pow(raio, 2)

console.log("Para um circuferência com RAIO = " + raio + ":")
console.log()
console.log("Diâmetro: " + diametro.toFixed(2))
console.log("Comprimento: " + comprimentro.toFixed(2))
console.log("Área: " + area.toFixed(2))
console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 13 - Crie um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução?

console.log("Exercicio 13 - Crie um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução?")
console.log()


x = 20
y = 30
z = 40

if (x > y && X > z){
    console.log("X é o maior")
}else if (y > x && y > z){
    console.log("Y é o maior")
}else {
    console.log("Z é o maior")
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 14 - Crie um programa que converta uma string para número e exiba o resultado no console.

console.log("Exercicio 14 - Crie um programa que converta uma string para número e exiba o resultado no console.")
console.log()


let numbernumero = "50"
let numero = parseInt(numbernumero)
console.log(numero + 50)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 15 - Crie um programa que recebe uma nota e checa se você passou direto, ficou de recuperação ou foi reprovado na matéria.

let nota = 10

if (nota >= 7){
    console.log("PASSOU DIRETO!")
}else if (nota >= 5 && nota < 7){
    console.log("RECUPERAÇÃO!")
}else {
    console.log("REPROVADO!")
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 16 - Crie um programa que converta um número para string e exiba o resultado no console.

console.log("Exercicio 16 - Crie um programa que converta um número para string e exiba o resultado no console.")
console.log()


numero = 30
numbernumero = numero.toString()
console.log(numbernumero)

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 17 - Crie um programa que verifique se uma string é um palíndromo e exiba o resultado no console.

console.log("Exercicio 17 - Crie um programa que verifique se uma string é um palíndromo e exiba o resultado no console.")
console.log()


let textorigin = "Arara"
let textolimpo = textorigin.toLowerCase().replace(/[^a-z0-9]/g, '')
let textoinvertido = textolimpo.split('').reverse().join('')

if (textolimpo === textoinvertido) {
    console.log(textorigin + " É um PALÍNDROMO.");
}else {
    console.log(textorigin + " Não é um PALÍNDROMO.");
}

console.log()
console.log("-----------------------------------------------")
console.log()

// Exercicio 18 - Crie um programa que verifique se uma string é um anagrama de outra string e exiba o resultado no console.

console.log("Exercicio 18 - Crie um programa que verifique se uma string é um anagrama de outra string e exiba o resultado no console.")
console.log()


let p1 = "lordw"
let p2 = "world"

let p1minuscula = p1.toLowerCase()
let p1limpa = p1minuscula.replace(/[^a-z0-9]/g, '') 
let p1separada = p1limpa.split('')
let p1ordenada = p1separada.sort()
let p1final = p1ordenada.join('')

let p2minuscula = p2.toLowerCase()
let p2limpa = p2minuscula.replace(/[^a-z0-9]/g, '') 
let p2separada = p2limpa.split('')
let p2ordenada = p2separada.sort()
let p2final = p2ordenada.join('')

if (p1final === p2final) {
    console.log(p1 + " e " + p2 + " são anagramas")
}else {
    console.log(p1 + " e " + p2 + " não são anagramas")
}

console.log()