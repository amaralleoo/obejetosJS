let funcionarios = []

for(let i = 0; i < 6; i++){
    let nome = prompt(`Informe o nome do funcionário: `)
    let cargo = prompt(`Informe o cargo do funcionário: `).toLowerCase
    let salario = Number(prompt(`Informe o salário do funcionário: `))
    let tempoServico = Number(prompt(`Informe o tempo de serviço do funcionário: `))

    let empresa = {
        nome: nome,
        cargo: cargo,
        salario: salario,
        tempoServico: tempoServico
    };
    funcionarios.push(empresa)
}
let soma = 0
let gerente = 0
let maior = funcionarios[0]
for (let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].salario > 5000 && funcionarios[i].tempoServico > 5){
        console.log(funcionarios[i])
    }
    if(funcionarios[i].salario > maior.salario){
        maior = funcionarios[i]
    }
    soma = funcionarios[i].salario + soma
    if(funcionarios[i].cargo == "gerente"){
        gerente++
    }
}
console.log(`Funcionário com maior salário: ${maior.nome}`)
console.log(`Média salarial: ${soma / funcionarios.length}`)
console.log(`Quantidade de Gerentes: ${gerente}`)