'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:



  let indexOfPivot = Math.floor(Math.random()*array.length); // Calculo el indice del pivote con Math.random

  let pivot = [array[indexOfPivot]]; // Declaro el pivote y se asigno el valor que se encuentra en el indice calculado

  array.splice(indexOfPivot, 1); // Elimino el pivote del array padre

  let minArray = []; 
  let maxArray = [];

  if (array.length > 0) { // Envio elementos mayores a pivote a maxArray y menores a pivote a minArray
    array.forEach(element => {
      if (element  < pivot) {
        minArray.push(element);
      }

      if (element >= pivot) {
        maxArray.push(element);
      }
    });
  }

  if (minArray.length > 1) { // Si minArray contiene mas de 1 elemento aplico recursion
    minArray = quickSort(minArray);
  }

  if (maxArray.length > 1) { // Si maxArray contiene mas de 1 elemento aplico recursion
    maxArray = quickSort(maxArray);
  }
  
  return minArray.concat(pivot.concat(maxArray)); // Retorno los 3 arrays concatenados en orden
}






function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  // Creamos una variable array vacio
  let leftArray= [];  

  // Creamos una variable array vacio
  let rightArray = [];

  // Creamos una variable array vacio, que vamos a retornar al final de nuestra funcion
  let returnArray = [];   


  // Si el array enviado tiene longitud mayor a 1, lo dividimos y guardamos los valores en leftArray y rightArray, si la longitud es igual a 1, enviamos el elemento a leftArray
  if (array.length > 1) {  

    leftArray = array.slice(0, Math.floor(array.length / 2));

    rightArray = array.slice(Math.floor(array.length / 2));

  } else if (array.length == 1) {

    leftArray.push(array[0]);
    
  }


  //Si tenemos elementos en leftArray, lo dividimos y lo retornamos ordenado, y lo guardamos en leftArray
  if (leftArray.length > 1) {
    leftArray = mergeSort(leftArray);
  }

  //Si tenemos elementos en rightArray, lo dividimos y lo retornamos ordenado, y lo guardamos en rightArray
  if (rightArray.length > 1) {
    rightArray = mergeSort(rightArray);
  }
  
  //Creamos la variable loop, que sera el numero de iteraciones de nuestro ciclo for
  let loop = (leftArray.length + rightArray.length);

  //Ordenamos los arrays separados en un unico array en orden
  for (let i = 0; i < loop; i++) {
    if (leftArray[0] < rightArray[0]) {
      returnArray.push(leftArray.shift());
      
    } else if (rightArray[0] <= leftArray[0]) {
      returnArray.push(rightArray.shift());
      
    } else if (rightArray.length === 0 && leftArray.length !== 0) {
      returnArray.push(leftArray.shift());
      
    } else if (rightArray.length !== 0 && leftArray.length === 0) {
      returnArray.push(rightArray.shift());
      
    }    
  }

  //Retornamos array ordenado
  return returnArray;
}






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};