// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// $ node e6_nbOnly.js 4445353
// true

// $ node e6_nbOnly.js 233 111 23
// false

// $ node e6_nbOnly.js je suis dans mon jacuzzi
// false

let args = process.argv.slice(2);
let inputArg = String(args);

function hasNumber(str) {
  if (!isNaN(str)) {
    return true;
  }
  return false;
}
console.log(hasNumber(inputArg));
