console.log('Hello world');

let nomeDoUsuario = prompt ('qual o seu nome')
let idade = prompt ('quantos anos voce tem?')
let programador = confirm('você é um programador?');

//console.log('Ola ' + nomeDoUsuario);
alert('Olá ' + nomeDoUsuario + ' você tem ' + idade + ' anos');
//console.log(idade);
//console.log(vivo);

console.log ('Trocando nome do usuario');
nomeDoUsuario = 'Raquel';
console.log(nomeDoUsuario);

//if (programador === true){
if (programador){
    alert('você é um programador, parabéns!')
} else if(Number (idade) >= 16 && Number(idade) <= 25){
    alert('Que pena, você ja ouviu falar da Estação Hack?')
}
else{
    alert('Que pena, você deveria aprender JavaScript')
}