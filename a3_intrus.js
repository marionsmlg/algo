// Créez un programme qui retourne la valeur qui n’a pas de paire.

// $ node a3_intrus.js carreau trefle trefle coeur carreau
// Intrus détecté: coeur

// $ node a3_intrus.js 1 2 3 4 5 4 3 2 1
// Intrus détecté: 5

// $ node a3_intrus.js 1 2 1 2
// Aucun intrus détecté

let args = process.argv.slice(2);

// function isSingle(arr) {
//   return arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
// }

function isSingle(arr) {
  return arr.some((x) => arr.indexOf(x) === arr.lastIndexOf(x));
}

function hasIntruder(arr) {
  let intruder = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
  if (isSingle(arr)) {
    return `Intrus détecté: ${intruder}`;
  }
  return "Aucun intrus détecté";
}
console.log(hasIntruder(args));

// function hasIntruder(arr) {
//     let intruder = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
//     if (intruder === undefined) {
//       return "Aucun intrus détecté";
//     }

//     return `Intrus détecté: ${intruder}`;
//   }
//   console.log(hasIntruder(arr));
