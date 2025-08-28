//cria os vetores e adiciona os valores
let regioes = []
let dias = []
for(let i = 0; i<5; i++){
    regioes.push(prompt(`Informe o nome da região ${i+1}`))
    for(let i = 0; i<5; i++){
        dias.push(Number(prompt(`Informe o dia ${i+1}`)))
    }
}
// cria a matriz e adiciona os niveis de poluição
let poluicao = []
for(let i=0; i<5; i++){
    poluicao[i] = [] //cria um vetor dentro do vetor
    for(let j=0; j<5; j++){
        poluicao[i] = parseInt((Math.random() * 501))
    }
}   
// exibir os valores da diagonal principal e calcular a média
somaDP = 0
for(let i=0; i<poluicao.length; i++){
    console.log(`Elemento da diagonal principal ${poluicao[i][i]}`)
    somaDP += poluicao [i][i]
}
console.log(`A media da DP é ${somaDP/poluicao.length}`)
// exibir os valores da diagonal secundária e calcular a média
somaDS = 0
for(let i=0; i<poluicao.length; i++){
    console.log(`Elemento da diagonal secundária ${poluicao[i][4 - i]}`)
    somaDS += poluicao [i][4 - i]
}
console.log(`A media da DS é ${somaDS/poluicao.length}`)
// exibir qual região (linha) teve o maior indice de poluição registrado e em qual dia (coluna) isso ocorreu.
let iMaior = 0; let jMaior = 0; let maior = poluicao[0][0]
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if(poluicao [i][j] > maior){
            maior = poluicao[i][j]
            iMaior = poluicao; jMaior = j
        }
    }
}
console.log(`O nível ${maior} ocorreu na região ${regioes[iMaior]} no dia ${dias[jMaior]}`)
let qtdNivelCritico = 0
for(let i=0; i<5; i++){ 
    for(let j=0; j<5; j++){
        if (poluicao [i][j] > 300)
            qtdNivelCritico++
    }
}
console.log(`Qtde de níveis críticos ${qtdNivelCritico}`)
let medias = []
for(let i=0; i<poluicao.length; i++){
    let somaLinhas = 0
    for(let j=0; j<poluicao.length; j++){
        somaLinhas += poluicao[i][j]
    }
    medias[i] = somaLinhas / poluicao.length
}
let menor = medias[0]
let posMenor = 0
for(let i=0; i<medias.length; i++){
    if(medias[i] < menor){
        menor = medias[i]
        posMenor[i]
    }
}
console.log(`A região com menor média ${menor} foi ${regioes[posMenor]}`)
