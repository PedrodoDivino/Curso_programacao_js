alert("Bem-vindo(a)!!, responda as perguntas a seguir!");

let namev= prompt("Informe seu nome pessoa mais velha:");
let agev = prompt("Informe sua idade:");
let namen = prompt("Informe seu nome pessoa mais nova:");
let agen = prompt("Informe sua idade:");

function resultado(namev, agev, namen, agen) {
    alert(`Nome pessoa mais velha: ${namev}\n Idade Pessoa Velha: ${agev} anos\n
           Nome pessoa mais nova: ${namen}\n Idade Pessoa Nova: ${agen} anos\n
           Diferença de idade: ${agev - agen} anos
          `);
}

if(agev != null && namen != null && agev != null && agen != null) {
    resultado(namev, agev, namen, agen);
} else {
    alert("Não foi possivel calcular a diferença de idade\n tente novamente!");
    console.error("Pessoa não respondeu as perguntas.");
}if (salario < 1000) 
 imp = 0;
