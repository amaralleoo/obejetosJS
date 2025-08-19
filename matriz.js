    let matriz = [];
    for(let i = 0; i < 3; i++){
        // i = linha, j = coluna
        matriz[i] = [];
        for(let j = 0; j < 3; j++){
            matriz[i][j] = parseInt(Math.random() * 10) // Math.random para gerar números aleatórios, parseInt para transformalos em inteiros, * 10 pois estava gerando nmrs de 0.1 a 0.9
        }
    }
    let soma = 0;
    let par = 0;
    for(let i = 0; i < matriz.length; i++ ){
        for(let j = 0; j < matriz[i].length; j++){
            soma += matriz[i][j];
        }
    }
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
             if(matriz[i][j] % 2 == 0){
                par++
            }
        }
    }
    console.log(`Soma total:  ${soma}`)
    console.log(`Quantidade de números pares: ${par}`)
    
    for(let i = 0; i < matriz.length; i++){
        console.log(`Diagonal secundária: ${matriz[i][matriz.length - 1 - i]}`)
    }

