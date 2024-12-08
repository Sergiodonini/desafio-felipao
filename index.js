
/*O que deve ser utilizado

- Variáveis
- Operadores
-Laços de repetição
-Estrutura de decisão

## Objetivo

Creie uma variável para armazenar o nome e a quantidade de experiencia(xp) de um heroi, depois utilize uma estrutura de decisão para apresentar alguma das mensagen abaixo:

Se XP for menor que  1.000 = Ferro
Se XP for entre 1.001 e  2.000 = Bronze
Se XP for entre 2.001 e  5.000 = Prata 
Se XP for entre 5.001 e  7.000 = Ouro
Se XP for entre 7.001 e  8.000 = Platina 
Se XP for entre 8.001 e  9.000 = Ascendente
Se XP for entre 9.001 e  10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída


Ao final deve se exibir uma mensagem:

"O heroi de nome **{nome}** está no nível de **{nivel}**"

*/


let nomePokemon = ["Picaku", "Charizard", "Bulbasaur", "Squirtle", "Eevve", "Snorlax", "Gengar", "Jigglypuff", "Meowth", "Machamp", "Psyduck", "Abra", "Dragonite" ]

let nivelPokemon = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante" ]


function determinarNivel(XP) {
    let nivel;

    if (XP < 1000) {
        nivel = "Ferro";
    } else if (XP >= 1001 && XP <= 2000) {
        nivel = "Bronze";
    } else if (XP >= 2001 && XP <= 5000) {
        nivel = "Prata";
    } else if (XP >= 5001 && XP <= 7000) {
        nivel = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        nivel = "Platina";
    } else if (XP >= 8001 && XP <= 9000) {
        nivel = "Ascendente";
    } else if (XP >= 9001 && XP <= 10000) {
        nivel = "Imortal";
    } else if (XP >= 10001) {
        nivel = "Radiante";
    } else {
        nivel = "XP inválido";
    }

    return nivel;
}


// aleatorio nome do pokemon
let aleatorioPokemon = nomePokemon[Math.floor(Math.random() * nomePokemon.length)];


// Numero aletorio do nivel do Pokemom
let numeroAleatorio = Math.floor(Math.random() * 12001);


// Testando a função
let XP = numeroAleatorio; // Alterar este valor para testar diferentes níveis

console.log(" ")
console.log(`O heroi de nome ${aleatorioPokemon} está no nível de ${determinarNivel(XP)}`)






