let mat = [];
let vet = [];
for(let i = 0; i<4; i++){
    mat[i] = [] //vetor
    vet[i] = prompt(`Informe o nome do vendedor`)
    for(let j=0; j<7; j++){
        mat[i][j] = parseInt(Math.random() * 100)
    }
}
console.log(vet)
console.log(mat)

//somar o total de vendas por vendedor
let soma = 0;
for(let i=0; i<4; i++){ //percorre os vendedores
    soma = 0 //temos aqui um novo vendedor
    for(let j=0; j<7; j++){ //percorre os dias da semana
        soma = soma + mat[i][j]
    }
    console.log(`Vendedor ${vet[i]}, vendeu ${soma}`)
}


//soma as vendas por dia
let somaPorDia = 0
for(let j = 0; j<7; j++){ // para cada dia
    somaPorDia = 0
    for(let i=0; i<4++; i++){ // para cada vendedor
        somaPorDia = somaPorDia + mat[i][j]
    }
    console.log(`Total de vendas no dia ${j} é ${somaPorDia}`)
}

//calcular a maior venda e a posição
let maior = mat[0][0]
let iMaior = 0
let jMaior = 0
for(let i=0; i<4; i++){ 
    for(let j=0; j<7; j++){
        if(mat[i][j] > maior){
            iMaior++
            jMaior++
        }
    }
}
console.log(`A maior venda foir ${maior} na posição [${iMaior}] coluna ${jMaior}`)

// media das vendas
let somaMedia = 0
for(let i=0; i<4; i++){
    for(let j=0; j<7; j++){
        somaMedia = somaMedia + mat[i][j]
    }
}
console.log(`A média das vendas é ${somaMedia / (Math.length * mat[0].length)}`)