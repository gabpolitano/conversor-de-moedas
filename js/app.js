let valorEmDolarTexto = prompt("Qual valor em dolar que você quer converter?");

let valorEmDolarNumero = parseFloat(valorEmDolarTexto);

let valorEmReal = valorEmDolarNumero * 5.50;
let valorEmRealFixado = valorEmReal.toFixed(2);

alert(valorEmRealFixado);

//Revisão
//Variáveis -- let  int - float - string
//alert -- parseInt - parseFloat - prompt
//Operações -- + somar * multiplicar
//Comentários