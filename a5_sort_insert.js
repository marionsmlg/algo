// Créez un programme qui ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant.
// Le dernier argument est l’élément à ajouter.

// $ node a5_sort_insert.js 1 3 4 2
// 1 2 3 4

// $ node a5_sort_insert.js 10 20 30 40 50 60 70 90 33
// 10 20 30 33 40 50 60 70 90

// $ node a5_sort_insert.js 1 3 5 hello
// erreur

let args = process.argv.slice(2);

function insertAndSort(arr) {
  let newNbToAdd = arr.pop();
  if (isNaN(newNbToAdd)) {
    return "erreur";
  }

  arr.push(newNbToAdd);

  return arr.sort((a, b) => a - b).join(" ");
}

console.log(insertAndSort(args));
