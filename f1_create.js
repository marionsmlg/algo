// import fs from "node:fs";

// fs.writeFile("f1_new.txt", "Je suis un nouveau fichier", (error) => {
//   console.log({ error });
// });
const fs = require("fs");

fs.writeFile("f1_new.txt", "Je suis un nouveau fichier", function (err) {
  if (err) throw err;
  console.log('Fichier "f1_new.txt" créé');
});
