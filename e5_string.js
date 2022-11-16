// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.
// Afficher error et quitter le programme en cas de problèmes d’arguments.

// $ node e5_string.js bonjour jour
// true

// $ node e5_string.js bonjour soir
// false

// $ node e5_string.js hey
// error

let args = process.argv.slice(2);
let arg1 = args[0];
let arg2 = args[1];

function includesString(str1, str2) {
  if (!str2) {
    return "error";
  }
  if (str1.includes(str2)) {
    return true;
  }
  return false;
}
console.log(includesString(arg1, arg2));
