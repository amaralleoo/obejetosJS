let projetos = []

for(let i = 0; i < 6; i++){
    let nome = prompt(`Informe o nome do projeto ${i+1}: `)
    let empresa = prompt(`Informe a empresa ${i+1}: `).toLowerCase
    let orcamento = Number(prompt(`Informe o orçamento ${i+1}: `))
    let tempoMeses = Number(prompt(`Informe a duração em mesês ${i+1}: `))

    let tecProjEmp = {
        nome: nome,
        empresa: empresa,
        orcamento: orcamento,
        tempoMeses: tempoMeses
    };
    projetos.push(tecProjEmp)
}
let soma = 0
let inova = 0
let maior = projetos[0]
let somaDuracao = 0
for (let i = 0; i < projetos.length; i++){
    if(projetos[i].tempoMeses > 12 && projetos[i].orcamento > 1000000.00){
        console.log(projetos[i])
    }
    if(projetos[i].orcamento > maior.orcamento){
        maior = projetos[i]
    }
    if(projetos.tempoMeses < 6){
        soma += projetos[i].orcamento
    }
    if(projetos[i].empresa == "inovatech"){
        inova++
    }
    somaDuracao += projetos.tempoMeses[i]
}
console.log(`Projeto com maior orçamento: ${maior.nome}`)
console.log(`Média de duração: ${somaDuracao / projetos.length}`)
console.log(`Quantidade de projetos feitos pela InovaTech: ${inova}`)
console.log(`Total gasto com projetos inferiores a 6 mesês: ${soma}`)