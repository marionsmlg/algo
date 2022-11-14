// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// $ node e6_nbOnly.js 4445353
// true

// $ node e6_nbOnly.js 233 111 23
// false

// $ node e6_nbOnly.js je suis dans mon jacuzzi
// false

let args = process.argv.slice(2);

function hasNumber(str) {
  if (str.length > 1) {
    return false;
  }
  for (let i = 0; i <= str.length; i++) {
    if (!isNaN(str[i])) {
      return true;
    }
    return false;
  }
}
console.log(hasNumber(args));
