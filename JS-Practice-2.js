/* Ejercicio 16
Dado una cadena de texto, devolver cuantas vocales tiene la misma.
Input: denu
Output: 2
*/

const vocalCounter = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i].toLowerCase();
    switch (element) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
      default:
        break;
    }
  }
  return count;
};

//------------------------------------------------------------------------

/* Ejercicio 17
Dado un numero, mostrar los numeros de 1 hasta el numero. Para multiplos de tres, escribir "denu" en lugar del numero, para los multiplos de cinco, "lemon", y si es multiplo de tres y cinco, "denolemon"
Input: 6
Output: 1 2 denu 4 lemon denu
*/

const denuLemon = (num) => {
  let result = [];

  for (let i = 0; i < num; i++) {
    const number = i + 1;

    if (!(number % 3) && !(number % 5)) {
      result.push("denulemon");
    } else if (!(number % 3)) {
      result.push("denu");
    } else if (!(number % 5)) {
      result.push("lemon");
    } else {
      result.push(number);
    }
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 18
Dado un numero, mostrar sus divisores (hasta el número)
Input: 5
Output: 1 5
*/

const divisores = (num) => {
  let result = [];

  for (let i = 0; i < num; i++) {
    const number = i + 1;

    if (!(num % number)) result.push(number);
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 19
Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.
Input: [{"el señor de los anillos", "denu lemon", true}, {"avatar", "denu lemon", false}]
Output: I have seen "El señor de los anillos 2" directed by Deno Lemon I have not seen "El señor de los anillos 3" directed by Deno Lemon"
*/

const movieWatched = (movies) => {
  let result = [];

  for (let movie of movies) {
    const { title, directedBy, seen } = movie;

    seen
      ? result.push(`I have seen ${title} directed by ${directedBy}`)
      : result.push(`I have not seen ${title} directed by ${directedBy}`);
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 20
Dados dos String crear un algoritmo que compruebe si son anagramas entre si (Si ambos usan los mismos caracteres en una misma cantidad)
Input: (Riesgo, Sergio)
Output: true
*/

const anagramas = (str1, str2) => {
  let anagrama = false;
  str1 = str1.trim();
  str2 = str2.trim();

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      const char1 = str1[i].toLowerCase();

      if (str2.toLowerCase().includes(char1)) {
        anagrama = true;
      } else {
        return false;
      }
    }
  }

  return anagrama;
};

//------------------------------------------------------------------------

/* Ejercicio 21
Dada un String y un numero, cortar el string mostrando X cantidad de caracteres dependiendo del numero enviado.
Input: (Denu, 2)
Output: De
*/

const stringSlice = (str, num) => {
  return str.slice(0, num);
};

//------------------------------------------------------------------------

/* Ejercicio 22
Dados dos numeros indicar cual es mayor y cual es menor.
Input: (2, 5)
Output: 2 is less than 5
*/

const lesserThan = (n1, n2) => {
  return n1 < n2 ? `${n1} is less than ${n2}` : `${n2} is less than ${n1}`;
};

//------------------------------------------------------------------------

/* Ejercicio 23
Dado un String poner en mayuscula la primera letra de cada palabra en la cadena y devolverla.
Input: hola soy denu lemon
Output: Hola Soy Denu Lemon
*/

const upperCase = (text) => {
  let finalText = [];

  for (const word of text.split(" ")) {
    finalText.push(`${word[0].toUpperCase()}${word.slice(1)}`);
  }

  return finalText.join(" ");
};

//------------------------------------------------------------------------

/* Ejercicio 24
Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado.
Permutacion: Secuencia de numeros en orden sin que falte ninguno entre ellos
Input: ([1,2,3,4,5], 5)
Output: true
*/

const permutacion = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number !== i + 1) {
      return false;
    } else if (number === num) {
      return true;
    }
  }
};
//------------------------------------------------------------------------

/* Ejercicio 25
Dado un String, si hay mas mayusculas, pasar todo a mayuscula, y viceversa.
Input: "DENu"
Output: DENU
*/

const caseFormatter = (str) => {
  let upper = 0,
    lower = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    char === char.toLowerCase() ? lower++ : upper++;
  }

  return upper > lower ? str.toUpperCase() : str.toLowerCase();
};

//------------------------------------------------------------------------

/* Ejercicio 26
Dado un numero mostrar la serie de fibonacci y el resultado de la misma
Input: 10
Output: Serie completa: 0,1,1,2,3,5,8,13,21,34,55) Resultado: 55
*/

const fibonacci = (num) => {
  let i = 0,
    result = 1,
    lastNum = 0,
    aux = 0;

  while (i < num) {
    aux = result;
    result += lastNum;
    lastNum = aux;
    i++;
  }

  return lastNum;
};

//------------------------------------------------------------------------

/* Ejercicio 27
Dado un numero mostrar a cuantos años, meses y dias equivale.
Input: 920
Output: 2 años, 6 meses y 2 dias
*/

const dateCalculator = (daysToCalculate) => {
  let years = Math.floor(daysToCalculate / 365);
  let months = Math.floor((daysToCalculate % 365) / 30);
  let days = Math.floor((daysToCalculate % 365) % 30);

  return `${years} años, ${months} meses, ${days} dias`;
};

//------------------------------------------------------------------------

/* Ejercicio 28
Dado un numero devolver su factorial (La multiplifacion de todos los numeros hasta llegar a el)
Input: 3
Output: 6 (1x2x3)
*/

const factorial = (num) => {
  let result = 1;

  for (let i = 0; i < num; i++) {
    result *= i + 1;
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 29
Dado un numero indicar si es capicua o no (se leen igual de izquierda a derecha y viceversa)
Input: 2002
Output: true
*/

const capicua = (num) => {
  return Number(num.toString().split("").reverse().join("")) === num;
};

//------------------------------------------------------------------------

/* Ejercicio 30
Dado un array de numeros, devolver el array sin elementos duplicados. Lo mismo si hay algun String, debemos borrarlo
Input: [1,1,2,2,3,3,'denu']
Output: [1,2,3]
*/

const arrayCleaner = (array) => {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (newArr.includes(element) || typeof element === "string") {
      continue;
    } else {
      newArr.push(element);
    }
  }

  return newArr;
};

//------------------------------------------------------------------------