// Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.

// $ node a4_chacun.js 1 2 3 4 5 +2
// 3 4 5 6 7

// $ node a4_chacun.js 10 11 12 20 -5
// 5 6 7 15

// $ node a4_chacun.js 10 11 12 20 2
// erreur, il manque le signe de l'opération à effectuer

// $ node a4_chacun.js 1 oui 3 +1
// erreur, l'élément 'oui' n'est pas un élément valide de la liste

let args = process.argv.slice(2);

function addOrSubForEach(arr) {
  let newArray = [];
  let sign = arr.pop();
  if (sign.includes("-") || sign.includes("+")) {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return `erreur, l'élément '${arr[i]}' n'est pas un élément valide de la liste`;
      }
      newArray.push(Number(arr[i]) + Number(sign));
    }
    return newArray.join(" ");
  }
  return "erreur, il manque le signe de l'opération à effectuer";
}
console.log(addOrSubForEach(args));
