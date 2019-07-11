
//console.log ('Entrou no laço');

//let contador = 0;
//while(contador < 10){
  //  console.log(contador);
   // contador = contador + 1;
    // contador += 1; (somar um ao contador)
    // contador ++; (aumentar de um em um)
//}

//console.log ('saiu do laço');

let promptLancesDeEscada = prompt ('Quantos lances de escada você gostaria?');
let lancesDeEscada = Number(promptLancesDeEscada);
let material = prompt ('Qual o material da sua escada?');
let desenho = '';

let i = 0;

while(isNaN(lancesDeEscada)){
    lancesDeEscada = Number(prompt('Você digitou ' + promptLancesDeEscada + '. O programa só aceita valores numéricos.Digite um numero por favor.'))
}

while (i < lancesDeEscada){
    desenho = desenho + material;
    console.log (desenho);
    i++;
}