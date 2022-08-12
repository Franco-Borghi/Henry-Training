String.prototype.repeatify = function(num) {
  let string = this;
  let retur = "";
  for (let index = 0; index < num; index++) {
    retur = retur + string;
    
  }
  return retur;
  }

  console.log('hola'.repeatify(3)); 

// * Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

// Probá tu solución con el siguiente código:

// ```javascript
// var t = new Triangle(1, 2, 3);
// t instanceof Triangle
// true
// Shape.prototype.isPrototypeOf(t);
// true
// t.getPerimeter();
// 6
// t.getType();
// "Triangle"


function Shape(type, getType) {
  this.type = type;
  this.getType = getType;
}

function Triangle(a,b,c) {
  this.lado1 =a;
  this.lado2 =b;
  this.lado3 =c;
}

Triangle.prototype = new Shape(
  "Triangle", 
  function(){return this.type;
  });


Triangle.prototype.getPerimeter = function() {
  return this.lado1 + this.lado2 + this.lado3;
}



// * Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

// Probá tu solución con el siguiente código:

// ```javascript
// var c = new Circle(2);
// c instanceof Circle
// true
// Shape.prototype.isPrototypeOf(c);
// true
// c.getPerimeter();
// 12.566370614359172
// c.getType();
// "Circle"



function Circle(radio) {
  this.raido = radio;
  this.getPerimeter = function() {return 3.14 * radio ** 2}
}

Circle.prototype = new Shape(
  'Circle',
  function(){return this.type;
  });

