// Função se retorno
function soma(x, y){
    let resultado = x + y
    console.log(resultado)
}

soma(3,6)

// Função com retorno
function somaRetorna(x , y){
    let resultado = x + y
    return resultado
}

let valor = somaRetorna(5, 10)
console.log(valor)
console.log(somaRetorna(10, 20))

function idades(x){
    let anoatual = 2025
    let anodenascimento = x
    let idade = anoatual - anodenascimento
    return idade
    
}

let idade = idades(1989)
console.log(idade)