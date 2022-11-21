/* Ejercicio 31
Dado un numero, indicar que tipo de angulo es (recto, agudo, obtuso, etc..)
Referencia
    Agudos < 90
    Recto == 90
    Obtuso > 90
    Llano == 180
    Completo == 360
    Mayor a 180 < 180
    Input: 90
    Output: Angulo Recto
*/

const angulosCalc = (grados) => {
  let angulo = "";

  switch (grados) {
    case 90:
      angulo = "Recto";
      break;
    case 180:
      angulo = "Llano";
      break;
    case 360:
      angulo = "Completo";
      break;
    default:
      if (grados > 180 && grados < 360) {
        angulo = "Concavo";
      } else if (grados < 90) {
        angulo = "Agudo";
      } else {
        angulo = "Obtuso";
      }
      break;
  }

  return `Angulo ${angulo}`;
};

//------------------------------------------------------------------------

/* Ejercicio 32
Dado un array de numeros, devolver el mismo con sus numeros elevados al cuadrado, y se debe eliminar cualquier contenido que no sea numerico
Input: [5,6,7,"denu"]
Output: [25,36,49]
*/

const cuadradoCalc = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    const el = array[i];

    if (typeof element === "number") {
      newArr.push(Math.pow(element, 2));
    }
  }

  return newArr;
};

//------------------------------------------------------------------------

/* Ejercicio 33
Hacer un reloj que en tiempo real vaya mostrando la hora a cada segundo. Solo se puede usar Date para conseguir la hora una vez, pero no para actualizarla
Input:
    const myClock = new Clock();
    myClock.turnOn();
Output: 14:20:16 -- Actualizar en tiempo real HH:MM:SS
*/

class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  update(second) {
    this.seconds += second;

    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }

    if (this.hours >= 24) {
      this.hours = 0;
    }
  }

  showTime() {
    this.update(1);
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  turnOn() {
    setInterval(() => {
      this.showTime();
    }, 1000);
  }
}

const myClock = new Clock();

//------------------------------------------------------------------------

/* Ejercicio 34
Dados dos numeros, devolver los resultados de las operaciones basicas entre ellos (suma, resta, multiplicacion, division)
Input: (2,2)
Output:
2 + 2 = 4
2 - 2 = 0
2 * 2 = 4
2 / 2 = 1
*/

const operationsCalc = (n1, n2) => {
  return `${n1} + ${n2} = ${n1 + n2}\n${n1} - ${n2} = ${
    n1 - n2
  }\n${n1} * ${n2} = ${n1 * n2}\n${n1} / ${n2} = ${n1 / n2}\n`;
};

//------------------------------------------------------------------------

/* Ejercicio 35
Dado un array, crear otro array con el primer y ultimo elemento del array original
Input: [100,200,500,600]
Output: [100,600]
*/

const firstNLast = (array) => {
  return [array[0], array[array.length - 1]];
};

//------------------------------------------------------------------------

/* Ejercicio 36
Dado un String, devolver cuantas consonantes y vocales tiene.
Input: denu
Output: Consonantes: 2 Vocales: 2
*/

const letterTypes = (str) => {
  let vocal = 0,
    consonante = 0;
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    switch (letter) {
      case "a":
        vocal++;
        break;
      case "e":
        vocal++;
        break;
      case "i":
        vocal++;
        break;
      case "o":
        vocal++;
        break;
      case "u":
        vocal++;
        break;
      default:
        consonante++;
        break;
    }
  }
  return `Consonantes: ${consonante}, Vocales: ${vocal}`;
};

//------------------------------------------------------------------------

/* Ejercicio 37
Dado un Array o Texto devolver el elemento o palabras que mas aparecen dentro de estos.
Input: [denu, denu, lemon]
Output: denu
*/

const mostUsedStr = (array) => {
  let obj = {},
    mostUsed = "";
  array.forEach(function (x) {
    obj[x] = (obj[x] || 0) + 1;
  });
  for (const word in obj) {
    if (mostUsed === "") {
      mostUsed = word;
    }
    if (obj[word] > obj[mostUsed]) {
      mostUsed = word;
    }
  }
  return mostUsed;
};

//------------------------------------------------------------------------

/* Ejercicio 38
Dado un numero mostrar una lista de los cuadrados de todos los numeros naturales hasta llegar al mismo.
Input: 5
Output: [ 0, 1, 4, 9, 16 ]
*/

const squareTillNum = (num) => {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(Math.pow(i, 2));
  }

  return arr;
};
//------------------------------------------------------------------------

/* Ejercicio 39
Dado un texto comprobar que sea un email valido
Input: denu@gmail.com
Output: true
*/

const emailValidator = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

//------------------------------------------------------------------------

/* Ejercicio 40
Dado un array de numeros devolver el valor mas bajo y el valor mas alto
Input: [1,2,3,4,5]
Output: Bajo: 1 Alto:5
*/

const lowestAndHighest = (array) => {
  let lowest = 0,
    highest = 0;

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (lowest == 0 && !array.includes(lowest)) lowest = number;
    if (highest == 0 && !array.includes(highest)) highest = number;

    if (number < lowest) {
      lowest = number;
    } else if (number > highest) {
      highest = number;
    }
  }

  return `Bajo: ${lowest}, Alto: ${highest}`;
};

//------------------------------------------------------------------------

/* Ejercicio 41
Dado un numero, mostrar un triangulo de astericos con ese numero de filas, un arbolito de X filas.
Input: 4
Output:
   *
  ***
 *****
*******
*/

const drawTree = (treeHeight) => {
  // Redondeamos y sacamos el punto medio del triangulo
  let middle = Math.floor(treeHeight - 1);

  // Guardamos el arbol en un resultado retornable
  let result = "";

  // hacemos un bucle de filas
  for (let row = 0; row < treeHeight; row++) {
    let level = "";

    // dibujar astericos y espacios
    for (let column = 0; column < treeHeight * 2 - 1; column++) {
      middle - row <= column && middle + row >= column
        ? (level += "*")
        : (level += " ");
    }
    result += level + "\n";
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 42
Dado dos numeros, sacar un numero random entre ellos
Input: 1,100
Output: 46 -- Random
*/

const random = (num) => {
  return Math.round(Math.random() * num);
};

//------------------------------------------------------------------------

/* Ejercicio 43 
Dado un array de numeros, sacar la media de todos (la suma de todos los numeros dividido por la cantidad de elementos, el promedio)
Input: [1,2,3]
Output: 3
*/

const promedio = (arr) => {
  let suma = arr.reduce((acc, current) => acc + current, 0);
  return suma / arr.length;
};

//------------------------------------------------------------------------

/* Ejercicio 44
Dado un array de Strings, devolver otro con los valores que esten formados por mas de dos palabras
Input: ["hola denu", "pastel", "rosa"]
Output: ["hola denu"]
*/

const cadena = (arr) => {
  let finalArr = [];

  arr.forEach((el) => {
    if (el.split(" ").length > 1) {
      finalArr.push(el);
    }
  });

  return finalArr;
};

//------------------------------------------------------------------------

/* Ejercicio 45
Dado un array de alumnos, con su nombre y su calificacion, mostrar cuantos aprobaron y cuantos no. (Aprobás con 6)
Input: [["Denu", 4], ["Jorge", 2], ["Mafalda", 10]]
Output: 2 suspensos y 1 aprobado
*/

const notas = (notasArr) => {
  let desaprobados = 0, aprobados = 0;
  
  notasArr.forEach((el) => {
    (el[1] >= 6) ? aprobados++ : desaprobados++;
  });
  
  return `${desaprobados} suspensos y ${aprobados} aprobados`;
};

//------------------------------------------------------------------------
