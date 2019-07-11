console.log ('Hello');
let nomeDoUsuario = prompt ('Qual o seu nome?');
let materia = prompt ('Qual a materia avaliada?');
let nota = prompt ('Qual sua nota?');

if (Number (nota) >= 6){
    alert('Parabéns, ' + nomeDoUsuario + ' foi aprovado em ' + materia);
}
else if (Number (nota) >= 5.5){
    alert('O aluno ' + nomeDoUsuario + ' foi aprovado ' + ' pelo sistema ');
}
else{
    alert(' Parece que a nota do ' + nomeDoUsuario + ' em ' + materia + ' foi insuficiente ');
}