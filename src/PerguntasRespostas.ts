import { Jogador } from "./jogadores";
import PromptSync = require('prompt-sync');

/*
TODO: tratar erro quando o usuário digita um valor diferente das opções dadas, ele passa para próxima 
pergunta mesmo com valor inválido
*/

function PergEResp() {
    
const prompt = PromptSync();
const nomeJogador = prompt('Digite seu nome: ');
const jogador = new Jogador(nomeJogador);
let count:number = 0;

console.clear();
console.log('========== Questão 1 ==========\n');
console.log('O que as variáveis fazem?\n');
console.log('1) Armazenam várias informações em uma dimensão.');
console.log('2) Armazenam programas e arquivos abertos.');
console.log('3) Armazenam apenas uma informação.\n');

let opcao1 = Number(prompt('>>'));

switch (opcao1) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta correta!`);
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 2 ==========\n');
console.log('O que os vetores armazenam?\n');
console.log('1) Armazenam várias informações em uma dimensão.');
console.log('2) Armazenam apenas uma informação.');
console.log('3) Armazenam diversos valores.\n');

let opcao2 = Number(prompt('>>'));

switch (opcao2) {
    case 1:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++;
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 3 ==========\n');
console.log('O que as matrizes armazenam?\n');
console.log('1) Deletam informações de uma lista');
console.log('2) Armazenam apenas uma informação.\n');
console.log('3) Armazenam várias informações em várias dimensões.\n');

let opcao3 = Number(prompt('>>'));

switch (opcao3) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta correta!`);
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 4 ==========\n');
console.log('A metodologia Ágil possui quantos valores?\n');
console.log('1) Tem 5 valores.');
console.log('2) Tem 4 valores.');
console.log('3) Tem 2 valores.\n');

let opcao4 = Number(prompt('>>'));

switch (opcao4) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 5 ==========\n');
console.log('Quantos princípios a metodologia Ágil possui?\n');
console.log('1) Tem 9 princípios.');
console.log('2) Tem 5 princípios.');
console.log('3) Tem 12 princípios.\n');

let opcao5 = Number(prompt('>>'));

switch (opcao5) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta correta!`);
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 6 ==========\n');
console.log('Quais são os 3 papéis da metodologia ágil?\n');
console.log('1) Gerar intrigas.');
console.log('2) Product Ower(P.O), Scrum Master, Dev Team.');
console.log('3) Testar conhecimentos.\n');

let opcao6 = Number(prompt('>>'));

switch (opcao6) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 7 ==========\n');
console.log('O que é HTML?\n');
console.log('1) É uma linguagem de marcação de hipertexto.');
console.log('2) É uma linguagem de dinamismo.');
console.log('3) É uma linguagem de estilização.\n');

let opcao7 = Number(prompt('>>'));

switch (opcao7) {
    case 1:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 8 ==========\n');
console.log('O que é Hardware?\n');
console.log('1) É um meio de comunicação. do computador.');
console.log('2) É a parte física do computador.');
console.log('3) É um tipo de linguagem.\n');

let opcao8 = Number(prompt('>>'));

switch (opcao8) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 9 ==========\n');
console.log('O que é Software?\n');
console.log('1) É a parte lógica do computador.');
console.log('2) É uma peça do computador.');
console.log('3) É a parte física do computador.\n');

let opcao9 = Number(prompt('>>'));

switch (opcao9) {
    case 1:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++
        break;
    case 2:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        prompt('\nEnter para continuar...');
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('========== Questão 10 ==========\n');
console.log('Os exemplos de Hardware são:\n');
console.log('1) Software, Mouse e Teclado.');
console.log('2) Placa-mãe, Memória e Bateria.');
console.log('3) Internet.\n');

let opcao10 = Number(prompt('>>'));

switch (opcao10) {
    case 1:
        console.log('\nResposta incorreta!');
        prompt('\nEnter para continuar...');
        break;
    case 2:
        console.log('\nResposta correta!');
        prompt('\nEnter para continuar...');
        //jogador.pontuar(count++);
        count++;
        break;
    case 3:
        console.log(`\nResposta incorreta!`);
        prompt('\nEnter para continuar...');
        break;
    default:
        console.log(`\nOpção inválida!`);
        break;
}
console.clear();
console.log(`\nPontuação Total: ${count}\n`);
if(count <= 4){
    console.log(`Olá ${jogador.nome} !\nParabéns, você está no caminho correto !\n\nSeu nível é iniciante.\n\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
    prompt('\n');
  }else if(count >= 5 && count <= 7){
    console.log(`Olá ${jogador.nome} !\nParabéns, você está no caminho para se tornar um programador de sucesso !\nSeu nível é Programador.\n\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
    prompt('\n');
  }else if(count >= 8){
    console.log(`Olá ${jogador.nome} !\nParabéns, você está no caminho correto !\n\nSeu nível é expert.\n\n"A persistência é o caminho do êxito." ~Charles Chaplin`);
    prompt('\n');
  }

console.clear();
// ----------------------------------------------------------
/*
console.log('Os exemplos de Software são:');
console.log('1) Windows, Linux e Calculadora.');
console.log('2) Internet.');
console.log('3) Placa-mãe, Memória e Bateria.');

let opcao11 = Number(prompt('>>'));

switch (opcao11) {
    case 1:
        console.log('Resposta correta!');
        break;
    case 2:
        console.log('Resposta incorreta!');
        break;
    case 3:
        console.log(`Resposta incorreta!`);
        break;
    default:
        console.log(`Opção inválida!`);
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('Podemos definir informática como:');
console.log('1) Acesso a Internet.');
console.log('2) Montagem de computadores.');
console.log('3) A ciência que trata logicamente os dados');

let opcao12 = Number(prompt('>>'));

switch (opcao12) {
    case 1:
        console.log('Resposta incorreta!');
        break;
    case 2:
        console.log('Resposta incorreta!');
        break;
    case 3:
        console.log(`Resposta correta!`);
        break;
    default:
        console.log(`Opção inválida!`);
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('Qual a função da RAM?');
console.log('1) Armazenar temporariamente os programas e arquivos abertos para que o processador possa acessá-los.');
console.log('2) Digitar códigos.');
console.log('3) Acessar a Internet e jogar online.');

let opcao13 = Number(prompt('>>'));

switch (opcao13) {
    case 1:
        console.log('Resposta correta!');
        break;
    case 2:
        console.log('Resposta incorreta!');
        break;
    case 3:
        console.log(`Resposta incorreta!`);
        break;
    default:
        console.log(`Opção inválida!`);
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('Defina o sistema operacional.');
console.log('1) Aplicativo que interage entre o usuário e o sistema.');
console.log('2) Peça usada para armazenar dados.');
console.log('3) Programa usado para digitar códigos.');

let opcao14 = Number(prompt('>>'));

switch (opcao14) {
    case 1:
        console.log('Resposta correta!');
        break;
    case 2:
        console.log('Resposta incorreta!');
        break;
    case 3:
        console.log(`Resposta incorreta!`);
        break;
    default:
        console.log(`Opção inválida!`);
        break;
}
console.clear();
// ----------------------------------------------------------
console.log('O que é um banco de dados?');
console.log('1) São peças de um computador.');
console.log('2) São programas usados para armazenar dados.');
console.log('3) São coleções de informações que se relacionam de forma a criar um sentido.');

let opcao15 = Number(prompt('>>'));

switch (opcao15) {
    case 1:
        console.log('Resposta incorreta!');
        break;
    case 2:
        console.log('Resposta incorreta!');
        break;
    case 3:
        console.log(`Resposta correta!`);
        break;
    default:
        console.log(`Opção inválida!`);
        break;
}
console.clear();
*/
}
export { PergEResp }