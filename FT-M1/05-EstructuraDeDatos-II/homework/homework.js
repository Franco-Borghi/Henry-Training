"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {

  this.head = null;





  this.add = function(value) {

    let node = new Node(value);

    let currentNode = this.head;

    if(!this.head){
      this.head = node;
    } else{
      let addNext = function(arg){
        if(!arg.next){
          arg.next = node;
        } else {
          addNext(arg.next);
        }
      }
      addNext(currentNode);
    }
  }





  this.remove = function() {


    if(!this.head){
      return null;
    } else {

      let currentNode = this.head;

      if(!currentNode.next){
        let value = currentNode.value;
        this.head = null;
        return value;
      } else {
        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        let value = currentNode.next.value;
        currentNode.next = null;
        return value;
      }
    }
  }





  this.search = function(param) {

    let currentNode = this.head;

    if(!currentNode){
      return null;
    } 

    if(param instanceof Function) {
      if(param(currentNode.value)) {
        return currentNode.value;
      } else {
        while(currentNode.next) {
          currentNode = currentNode.next;
          if(param(currentNode.value)){
            return currentNode.value;
          }  
        }
      }
      return null;
    }

    if(!(param instanceof Function)){
      if(currentNode.value == param) {
        return currentNode.value;
      } else {
        while(currentNode.next) {
          currentNode = currentNode.next;
          if(currentNode.value == param){
            return currentNode.value;
          }  
        }
      }
      return null;
      
    }
  }

}





/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {

  constructor(){
    this.buckets = [];
    for (let index = 0; index < 35; index++) {
      this.buckets.push({});   
    }
    this.numBuckets = this.buckets.length;
  }

  hash(input){
    
    let calc = 0;

    for (let index = 0; index < input.length; index++) {
      calc = calc + input.charCodeAt(index);
    }
    return (calc % this.buckets.length);
  }

  set(key,value){
    if(typeof(key) != 'string'){throw new TypeError('Oops!! Error');}
    let index = this.hash(key);
    let bucket = this.buckets[index];
    bucket[key] = value;
  }

  get(key){

    let index = this.hash(key);

    let bucket = this.buckets[index];

    return bucket[key];
    
  }

  hasKey(key){
    let index = this.hash(key);
    let bucket = this.buckets[index];
    if(bucket[key]) {
      return true;
    } else {
      return false;
    }
  }

}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
