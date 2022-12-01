// Créez un programme qui va créer un fichier "articles.json" contenant un array avec 5 articles.

// Vous allez devoir générer 5 articles de news brèves.

// Allez sur un site de news comme 20Minutes, LeMonde,… et récupérer les informations d'un article.

// Un article est un JSON constitué de:

// Titre

// Image d'illustration

// Contenu (2 - 3 lignes)

// Date de création (dans un objet Date)

// Auteur: objet contenant nom, prénom

// Date de mise à jour (s'il y en a une, dans un objet Date)

// $ node f3_news.js
// Fichier "f3_news.json" créé contenant 5 articles

// $ cat f3_news.json
// [(5 articles sous forme JSON)]

const fs = require("fs");

fs.writeFile("f3_news.json", "", function (err) {
  if (err) throw err;
  console.log('Fichier "f3_news.json" créé contenant 5 articles');
});
