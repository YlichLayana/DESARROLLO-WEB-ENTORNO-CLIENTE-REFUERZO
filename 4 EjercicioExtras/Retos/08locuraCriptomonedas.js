//Todo: Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

//Todo: La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

const pricesBtc = [39, 18, 29, 25, 34, 32, 5, 12, 28];
const pricesBtc1 = [39, 18, 29, 25, 34, 32, 5]; // -> 16 (compra a 18, vende a 34)
const pricesEth = [10, 20, 30, 40, 50, 60, 70]; // -> 60 (compra a 10, vende a 70)
const pricesDoge = [18, 15, 12, 11, 9, 7]; // -> -1 (no hay ganancia posible)
const pricesAda = [3, 3, 3, 3, 3]; // -> -1 (no hay ganancia posible)

function maxProfit(precios) {
  let resultadoGanacia = -1;
  let mitadTamanioArrayRecibido = Math.floor(precios.length / 2);

  let mitadArrayInicialCompra = precios.slice(0, mitadTamanioArrayRecibido);
  let mitadArrayRestanteVenta = precios.slice(mitadTamanioArrayRecibido);

  let valorDeCompra = Math.min.apply(null, mitadArrayInicialCompra);
  let valorDeVenta = Math.max.apply(null, mitadArrayRestanteVenta);

  if(valorDeCompra < valorDeVenta){
    let preciosCompraYventa = new Array(valorDeCompra, valorDeVenta)
    resultadoGanacia = preciosCompraYventa.reduceRight((acumulador, currentValue) => acumulador - currentValue);
  }

  return console.log(resultadoGanacia)
}


maxProfit(pricesBtc);
maxProfit(pricesBtc1);
maxProfit(pricesEth);
maxProfit(pricesDoge);
maxProfit(pricesAda);
