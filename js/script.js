//INICIO DO SCRIPT JS 

const nome = "Thailan";
const vaga = "Desenvolvedor fullstack";
let idade = 22;


//console.log( `Eu sou ${nome} e serei ${vaga}` );

//-------------------------------------------------------------------------------------------------------------------------------------

const horasEstudadas = 2;

//Horas estudadas é maior que 0? Se sim, a pessoa está "focada". Senão, "precisa estudar".
const status = horasEstudadas > 0 ? "focado" : "precisa estudar";

//console.log(`Status atual: ${status}`);

//-------------------------------------------------------------------------------------------------------------------------------------

const tecnologias = ["HTML", "CSS", "JS"];

// Adicioanr u item novo no final.
tecnologias.push("vue.js");
tecnologias.push("node.js");
tecnologias.push("react");


//console.log(`MInha meta principal agora e: ${tecnologias[3]}, ${tecnologias[5]}`);


const real = tecnologias[1] == "CSS" ? "gosta de CSS" : "não gosta de CSS";
const teste = tecnologias[1] != "CSS" ? "não e CSS" : "e CSS.";

// console.log(real,);
// console.log(`o valor e : ${teste}`);

//-------------------------------------------------------------------------------------------------------------------------------------

//Aprendendo arrays e objetos dentro da lista esta os objetos.

//Isso e um objeto{
const produto = {

    nome: "tablet",
    preco: 1000,
    fragil: true
}

const clientes = [
    { nome: "thailan", idade: 26, humor: "feliz", divida: 3000 },
    { nome: "ana", idade: 22, humor: "triste", divida: 150 },
    { nome: "'felipe", idade: 30, humor: "irritado", divida: 100000 },
    { nome: "maria", idade: 28, humor: "feliz", divida: 5000 },
    { nome: "joao", idade: 18, humor: "neutro", divida: 0 }
]


/*
A Fórmula Mágica

A estrutura é sempre assim: ListaOriginal.filter( ApelidoDoItem => RegraDeSimOuNao )

Traduzindo para o seu código:

ListaOriginal: clientes

.filter: Chame o fiscal.

ApelidoDoItem: cliente (o cara da vez).

=>: Aponta para a regra.

Regra: cliente.divida > 0 (O campo 'divida' desse 'cliente' é maior que zero?). 
*/


// O Filtro: Pega cada 'cliente' e verifica se a divida é maior que 0
const cobrar = clientes.filter(cliente => cliente.divida > 0); // lista com clientes que devem dinheiro
const atendimento = clientes.filter(cliente => cliente.humor == "feliz"); // lista com clientes que estão felizes

// console.log(`cobrar de:`, cobrar); 
// console.log(`atendimento especial para:`, atendimento);

const mensagens = cobrar.map(cliente => `Ei ${cliente.nome}, pague seus R$ ${cliente.divida}!`);//
const agradecer = atendimento.map(cliente => `Ei ${cliente.nome}, você é muito gentil, obrigado pela educação!`);

// console.log(`mensagens de cobrança:`, mensagens);
// console.log(`mensagens de agradecimento:`, agradecer);

//--------------------------------------------------------------------------------------------------------------------------------

//desafios para praticar !!!!







//FIM DO SCRIPT JS