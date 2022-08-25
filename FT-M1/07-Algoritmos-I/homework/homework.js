'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factorArray = [1];

  while (num > 1) {
    if (num%2 === 0) {
      factorArray.push(2);
      num = num/2;
    } else if (num%3 === 0) {
      factorArray.push(3); 
      num = num/3;
    } else if (num%5 === 0) {
      factorArray.push(5); 
      num = num/5;
    } else if (num%7 === 0) {
      factorArray.push(7); 
      num = num/7;
    }  else {
      factorArray.push(num);
      num = 1;
    }
  }

  factorArray.sort(function(a, b) {
    return a - b;
  });

  return factorArray;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let finish = 1;

  for (let i = 0; i < (array.length - 1); i++) {
    if (array[i] > array[i+1]) {
      let min = array[i+1];
      let max = array[i];
      array[i] = min
      array[i+1] = max;
      finish = 0;
    }
  }

  if (finish == 1) {
    return array
  } else {
    return bubbleSort(array);
  }
}
  


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){

    let current = array[i];
    let comparer = i-1;
    
    while (comparer >= 0 && array[comparer] > current) {
      array[comparer+1] = array[comparer];
      comparer--;
    }
    array[comparer+1] = current;

  }
  return array;
}


function selectionSort(array, heredable=0) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let current = array[heredable];
  let min = array[heredable];
  let i;

  for (let index = heredable; index < array.length; index++) {
    if (array[index] < min) {
      min = array[index];
      i = index;
    }  
  }

  if (i != heredable) {
    array[heredable] = min;
    array[i] = current;
  }

  if (heredable == (array.length-1)) {
    return array;
  } else {
    heredable++;
    return selectionSort(array, heredable);
  }
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
