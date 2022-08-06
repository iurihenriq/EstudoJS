// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
 console.log(cor, marca, portas);
 }
 //R: as variaveis foram declaradas dentro de um bloco, desse modo não é possivel acessá-las fora

 // Como corrigir o erro abaixo?
 const dois = 2;
 function somarDois(x) {
  return x + dois;
 }
 function dividirDois(x) {
  return x / dois;
 }
somarDois(4);
dividirDois(6);

const numero = 50;
for(let numero = 0; numero < 10; numero++) {
 console.log(numero);
}
const total = 10 * numero;
console.log(total);