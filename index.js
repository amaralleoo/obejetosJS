let anime = {
    titulo: "Boku no Hero",
    autor: "Kohei Horikoshi",
    ano: "2016",
    estudio: "Bones Inc.",
    temporadas: "7"
}

console.log(anime.titulo)
console.log(anime.autor)
console.log(anime.ano)
console.log(anime.estudio)
console.log(anime.temporadas)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let fichaTecnica = [
    {
        marca: "Audi",
        modelo: "A3",
        ano: 2003,
        cv: 125,
        torque: 17.4
    },
    {
        marca: "Volkswagen",
        modelo: "Jetta",
        ano: 2012,
        cv: 200,
        torque: 28.5,
    },
    {
        marca: "Toyota",
        modelo: "Yaris sedan",
        ano: 2022,
        cv: 103,
        torque: 14.9
    }
]
// fichaTecnica é um vetor
console.log(fichaTecnica[2].modelo)
for(let i = 0; i < fichaTecnica.length; i++){
    console.log(`Ano: ${fichaTecnica[i].ano}`)
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let catalogo = [];

for(let i = 0; i < 3; i++){
    let marca = prompt(`Informe a marca do veiculo ${i+1}: `)
    let modelo = prompt(`Informe o modelo do veiculo ${i+1}: `)
    let ano = Number(prompt(`Informe o ano do veiculo ${i+1}: `))
    let cv = Number(prompt(`Informe o CV's do veiculo ${i+1}: `))
    let torque = Number(prompt(`Informe o torque do veiculo ${i+1}: `))

    let car1 = {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cv: cv, 
        torque: torque
    };

    catalogo.push[car1];
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let biblioteca = []

for(let i = 0; i < 5; i++){
    let titulo = prompt(`Informe o título do livro ${i+1}: `)
    let autor = prompt(`Informe o autor do livro ${i+1}: `)
    let anoPubli = Number(prompt(`Informe o ano de publicação do livro ${i+1}: `))
    let qntPag = Number(prompt(`Informe a quantidade de paginas do livro ${i+1}: `))

    let livro = {
        titulo: titulo,
        autor: autor,
        anoPubli: anoPubli,
        qntPag: qntPag
    };

    biblioteca.push(livro);
}

let pag300
let maior = biblioteca[0]
let soma = 0
for(let i = 0; i < biblioteca.length; i++){
    if(biblioteca[i].pag300 > 300){
        console.log(biblioteca[i])
    }
    if(biblioteca[i].pag300 > maior.pag300){
        maior = biblioteca[i]
    }
    soma = soma + biblioteca[i].pag300
}
console.log(`O titulo do livro com mais páginas é ${maior.titulo}`)
console.log(`A média de páginas dos livros é ${soma / 5}`)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


