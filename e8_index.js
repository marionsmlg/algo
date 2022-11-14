// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau.
// Le tableau est constitué de tous les arguments sauf le dernier.
// L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

// $ node e8_index.js plaisir non partagé n'est plaisir qu'à moitié plaisir
// 0

// $ node e8_index.js Donner c\'est donner reprendre c\'est voler reprendre
// 3

// $ node e8_index.js Salut tout le monde haha
// -1

let args = process.argv.slice(2);
let wordToSearch = args.pop();
let index = args.findIndex((element) => element === wordToSearch);
console.log(index);
