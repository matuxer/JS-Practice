/* Ejercicio 1
Dado un numero devolver su tabla de multiplicar completa. Por ejemplo:
Tabla del 5
5 x 1 = 5
5 x 2 = 10
(...) 
*/

const tablaMult = (n) => {
  let msg = `Tabla del ${n}:\n`;

  for (let i = 0; i < 10; i++) {
    let result = n * (i + 1);

    msg += `${n} x ${i + 1} = ${result}\n`;
  }

  return msg;
};

//------------------------------------------------------------------------

/* Ejercicio 2
Dado un String comprobar si es un palindromo o no (se leen igual del derecho y del revés), por ejemplo Bob, Pop, etc... No tener en cuenta espacios ni simbolos.
Input: "otto"
Output: true
*/

const palindromo = (str) => {
  let pal = str.split("").reverse().join("");

  return str.toLowerCase().trim() === pal.toLowerCase().trim();
};

//------------------------------------------------------------------------

/* Ejercicio 3
Dado un String y una frase decir cuantas veces se repite la palabra en esa frase dada.
Input: ("Hola", "Hola cómo andas?")
Output: 1
*/

const findWord = (word, phrase) => {
  let count = 0;

  let cleaner = new RegExp("[^a-zA-Z ]", "g");

  phrase = phrase.toLowerCase().replace(cleaner, "").split(" ");

  phrase.map((el) => {
    if (word.toLowerCase() === el) {
      count++;
    }
  });

  return count;
};

//------------------------------------------------------------------------

/* Ejercicio 4
Dado un String, darle la vuelta, invertir el orden de sus caracteres. No se pueden usar metodos del lenguaje, solo estructuras de control.
Input: "hola"
Output: aloh
*/

const reverse = (word) => {
  let reversed = [];

  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];

    reversed.push(element);
  }

  return reversed.join("");
};

//------------------------------------------------------------------------

/* Ejercicio 5
Sacar el porcentaje de un numero. Mandamos tanto el porcentaje como el numero por parametros.
Input: (20, 100) -- El 20% de 100
Output: 20
*/

const percentage = (percent, n) => {
  return (percent * n) / 100;
};

//------------------------------------------------------------------------

/* Ejercicio 6 
Dibujar un cuadrado hueco con astericos en consola con el tamaño de lados que definamos nosotros
Input: 4
Output:
  * ** *
  *    *
  *    * 
  *    * 
  * ** * 
*/

const hollowSquare = (n) => {
  let square = "";
  let arr = new Array(n).fill("*".repeat(n));

  for (let i = 0; i < arr.length; i++) {
    const section = arr[i];

    if (i !== 0 && i !== arr.length - 1) {
      let middle = [];

      section.split("").map((el, j) => {
        j !== 0 && j !== section.length - 1
          ? middle.push(" ")
          : middle.push(el);
      });

      square += middle.join("") + "\n";
    } else {
      square += section + "\n";
    }
  }

  return square;
};

//------------------------------------------------------------------------

/* Ejercicio 7
Dados dos numeros, devolver cuantos numeros impares hay ENTRE ellos
Input: (1, 100)
Output: 49
*/

const oddCounter = (n1, n2) => {
  let counter = 0;

  for (let i = n1; i < n2; i++) {
    if (i % 2 !== 0) counter++;
  }

  return counter;
};

//------------------------------------------------------------------------

/* Ejercicio 8
Con un numero entero, invertirlo y devolverlo dado vuelta.
Input: 56
Output: 65
*/

const numberInverter = (num) => {
  return Number(num.toString().split("").reverse().join(""));
};

//------------------------------------------------------------------------

/* Ejercicio 9
Dados dos array devolver un array con los elementos comunes entre ambos sin duplicados
Input: ([1,2,3], [3,2,5,6])
Output: [2,3]
*/

const numberMatch = (arr1, arr2) => {
  let matches = [];

  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i];

    for (let j = 0; j < arr2.length; j++) {
      const num2 = arr2[j];

      if (num === num2 && !matches.includes(num)) matches.push(num);
    }
  }

  return matches;
};

//------------------------------------------------------------------------

/* Ejercicio 10
Dado un numero mostrar una escalera con escalones de guiones usando el numero para los niveles de la escalera.
Input: 4
Output:
  [-]
  [-][-]
  [-][-][-]
  [-][-][-][-]
*/

const stairs = (n) => {
  let stair = "[-]",
    result = "";

  for (let i = 0; i < n; i++) {
    result += stair.repeat(i + 1) + "\n";
  }

  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 11
Dado un String y una busqueda, censurar las coincidencias de la busqueda en el String con [-CENSURADO-] Si ambos llegan vacios, devolver un "No se puede leer el texto y la busqueda". Y si llega un solo parametro, devolver "No se puede hacer la busqueda"
Input: ('holi como va', 'holi') -- Frase y palabra a censurar
Output: [-CENSURADO-] como va
*/

const censurar = (frase, palabra) => {
  let fraseCensurada = [];
  frase = frase.split(" ");

  for (let i = 0; i < frase.length; i++) {
    const el = frase[i];

    el.toLowerCase() === palabra.toLowerCase()
      ? fraseCensurada.push("[-CENSURADO-]")
      : fraseCensurada.push(el);
  }

  return fraseCensurada.join(" ");
};

//------------------------------------------------------------------------

/* Ejercicio 12
Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por "n"
Input: 100
Output:
-n 100
-n 92
-n 84
etc..
*/

const eightJump = (n) => {
  if (n <= 0) {
    return `-n ${0}\n`;
  }

  return `-n ${n}\n` + eightJump(n - 8);
};

//------------------------------------------------------------------------

/* Ejercicio 13
Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.
Input: ([1,2,3,4], 2) -- Array y tamaño de divisiones
Output: ([1,2], [3,4])
*/

const arrayDivider = (array, n) => {
  let result = [],
    holder = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (holder.length === n) {
      result.push(holder);
      holder = [];
    }

    holder.push(element);
  }

  result.push(holder);
  return result;
};

//------------------------------------------------------------------------

/* Ejercicio 14
Dado un String y un numero, repetir el String las veces que diga el numero
Input: ('denu', 2) -- Palabra y veces que se debe repetir
Output: 'denu' 'denu'
*/

const repeat = (str, num) => {
  return (str + " ").repeat(num);
};

//------------------------------------------------------------------------

/* Ejercicio 15
Dado un String devolver el caracter mas usado.
Input: denuuu
Output: u
*/

const commonChar = (str) => {
  let char = "",
    mostCommon = 0;

  for (let i = 0; i < str.length; i++) {
    const char1 = str[i].toLowerCase();
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      const char2 = str[j].toLowerCase();

      if (char1 === char2) {
        count++;
      }
    }
    if (count > mostCommon) {
      mostCommon = count;
      char = char1;
    }
  }
  return char;
};

//------------------------------------------------------------------------
