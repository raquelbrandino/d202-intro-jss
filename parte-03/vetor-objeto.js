
//console.log ('Entrou no laço');

//let contador = 0;
//while(contador < 10){
  //  console.log(contador);
   // contador = contador + 1;
    // contador += 1; (somar um ao contador)
    // contador ++; (aumentar de um em um)
//}

//console.log ('saiu do laço');

let lancesDeEscada = Number(prompt ('Quantos lances de escada você gostaria?'))
let material = prompt ('Qual o material da sua escada?');
let desenho = '';
let i = 0;
while (i < lancesDeEscada){
    desenho = desenho + material;
    console.log (desenho);
    i++;
}