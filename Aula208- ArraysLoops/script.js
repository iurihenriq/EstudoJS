// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${a
for (let index = 0; index < copas.length; index++) {
  console.log(`o Brasil ganhou a copa de ${copas[index]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Per
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']  
for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
  if (frutas[index] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array
var frutinha = frutas[frutas.length - 1];
console.log(frutinha);