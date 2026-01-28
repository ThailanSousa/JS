const nome = "Thailan";
const vaga = "Desenvolvedor fullstack";
let idade = 22;


//console.log( `Eu sou ${nome} e serei ${vaga}` );



const horasEstudadas = 2;

//Horas estudadas é maior que 0? Se sim, a pessoa está "focada". Senão, "precisa estudar".
const status = horasEstudadas > 0 ? "focado" : "precisa estudar";

//console.log(`Status atual: ${status}`);


const tecnologias = ["HTML", "CSS", "JS"];

// Adicioanr u item novo no final.
tecnologias.push("vue.js");
tecnologias.push("node.js");
tecnologias.push("react");


//console.log(`MInha meta principal agora e: ${tecnologias[3]}, ${tecnologias[5]}`);


const real  = tecnologias[1] == "CSS" ? "gosta de CSS" : "não gosta de CSS";
const teste = tecnologias[1] != "CSS" ? "não e CSS" : "e CSS.";

console.log(real,);
console.log(`o valor e : ${teste}`);