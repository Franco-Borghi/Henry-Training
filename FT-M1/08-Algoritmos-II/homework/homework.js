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

  let leftArray;

  let rightArray;

  let returnArray;

  if (array.length > 1) {
    leftArray = array.slice(0, Math.floor(array.length / 2));
    rightArray = array.slice(Math.floor(array.length / 2));
  }

  if (leftArray > 1) {
    leftArray = mergeSort(leftArray);
  }

  if (rightArray > 1) {
    rightArray = mergeSort(rightArray);
  }

  
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
