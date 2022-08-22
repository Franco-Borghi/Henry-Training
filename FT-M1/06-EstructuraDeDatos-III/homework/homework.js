"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {

  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    // this.length = 1;
  }

  // size() {
  //   return this.length;
  // }

  size() {
    let counter = 0;
    if(this.value) {
      if(this.left){
        counter = counter + this.left.size();
      }
      if(this.right){
        counter = counter + this.right.size();
      }
      counter++;
    }
    return counter;
  }

  insert(value) {

    // this.length++;

    if(this.value > value) {
      if(this.left === null) {
        this.left =  new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if(this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  
  contains(value) {
      
    if(this.value === value){
      return true;
    }
    if(value < this.value && this.left !== null){
      return this.left.contains(value);
    }else if(value > this.value && this.right !== null){
      return this.right.contains(value)
    }else{
      return false;
    }

  }

  height(){ 
    if(!this.left && !this.right){
      return 0;
    }else{
      if(this.left && !this.right){
        return this.left.height() + 1;
      }else if(!this.left && this.right){
        return this.right.height() + 1;
      }else{
        return max(this.left.height() + 1, this.right.height() + 1 );
      }
    }
  }

  // "post-order", "pre-order", o "in-order"

  depthFirstForEach(funct, param) {
    
    if(param == 'post-order') {
      if(this.left){
        this.left.depthFirstForEach(funct, param);
      }
      if(this.right){
        this.right.depthFirstForEach(funct, param);
      }
      funct(this.value);
    }
    if(param == "pre-order") {
      funct(this.value);
      if(this.left){
        this.left.depthFirstForEach(funct, param);
      }
      if(this.right){
        this.right.depthFirstForEach(funct, param);
      }
    }
    if((param == 'in-order') || (!param)) {
      if(this.left){
        this.left.depthFirstForEach(funct, param);
      }
      funct(this.value);
      if(this.right){
        this.right.depthFirstForEach(funct, param);
      }

    }
  }

  breadthFirstForEach(cb, memorieArray=[]) {

    
    
    if (this.left !== null) {
      memorieArray.push(this.left);
    }
    if (this.right !== null) {
      memorieArray.push(this.right);
    }

    cb(this.value);

    if(memorieArray.length > 0){
      let indexSuprimed = memorieArray.shift();
      indexSuprimed.breadthFirstForEach(cb, memorieArray);}

  }

}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
