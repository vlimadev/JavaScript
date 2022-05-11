const lista = [
    {
        nome : 'suco de uva',
        preco : '10'
    },
    {
        nome : 'cereal',           //const Lista passa uma lista de produtos e seus preços
        preco :'12'
    },
    {
        nome : 'bolo',
        preco : '7'
    }
]

const saldoDisponivel = 100;      // disponivel para "gastar"

function calcularSaldo (saldoDisponivel, lista){    //  calcularSaldo recebe o saldoDisponivel e recebe lista.
    return lista.reduce (function(prev, current){   //  retorna a lista reduzida com o valor inicial (saldoDisponivel) e o valor atual (current).
    return prev - current.preco;    //  valor inicia menos o valor atual | ultiiza-se o . para especificar o item do objeto a ser retornado
    },saldoDisponivel); // passa como parametro inicia (prev) o saldoDisponivel.
}

console.log(calcularSaldo(saldoDisponivel, lista))