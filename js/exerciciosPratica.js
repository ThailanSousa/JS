/* 
    DESAFIO 1: Acesso de Segurança
Use OPERADOR TERNÁRIO e TEMPLATE STRINGS.
*/

const nivelAcesso = 5; // Tente mudar para 5 depois
const nomeAgente = "Neo";

// TODO: Crie uma constante 'statusSistema'.
// Se o nivelAcesso for maior ou igual a 4, o texto deve ser "Acesso Liberado".
// Se for menor, deve ser "Acesso Negado - Protocolo de Bloqueio iniciado".
// USE TERNÁRIO ( ? : )

const statusSistema = nivelAcesso >= 4 ? "Acesso Liberado" : "Acesso Negado";

// TODO: Use Template String para mostrar: "Agente Neo, seu status é: [statusSistema]"
console.log(`Agente Neo, seu status e: ${statusSistema}`);

//-----------------------------------------------------------------------------------------------------------------

/*
   DESAFIO 2: Filtro de Integridade
   Use .FILTER() para limpar a lista.
*/

const androids = [
    { id: 101, modelo: "R2", infectado: false },
    { id: 102, modelo: "C3", infectado: true },
    { id: 103, modelo: "BB", infectado: false },
    { id: 104, modelo: "T-800", infectado: true }
];

// TODO: Crie uma lista 'seguros' que contém APENAS os androids que NÃO estão infectados.
// Dica: infectado === false
const seguros = androids.filter(android => android.infectado === false );

console.log("Androids seguros para operação:");
console.log(seguros);

//-----------------------------------------------------------------------------------------------------------------


