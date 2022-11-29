// Créez un programme qui affiche le contenu d’un fichier donné en argument.

// $ cat f1_new.txt
// Je suis un nouveau fichier

// $ node f2_read.js f1_new.txt
// Je suis un nouveau fichier

// $ node f2_read.js pere_noel.txt
// Erreur: le fichier 'pere_noel.txt' n'existe pas

const fs = require("fs");
const file = "f1_new.txt";

fs.readFile(file, "utf8", function (err, data) {
  const content = data;
  if (content === undefined) {
    console.log(`Erreur: le fichier '${file}' n'existe pas`);
  } else {
    console.log(content);
  }
});
