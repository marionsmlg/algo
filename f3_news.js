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

const article1 = {
  title:
    "La France « continue d’exporter des pesticides interdits », selon deux ONG",
  illustration:
    "https://img.20mn.fr/yMKxQU0oSVu24XkAY9t9DSk/830x532_la-picoxystrobine-interdite-en-2017-represente-pres-de-40-de-ce-volume-photo-d-illustration",
  content:
    "Il y aurait de nombreuses « failles » dans les lois. La France a autorisé entre janvier et septembre 2022 l’exportation de près de 7.500 tonnes de pesticides interdits sur le territoire français, selon une enquête de deux ONG publiée ce mercredi. ",
  date: new Date("2022-11-30 20:33"),
  author: {
    name: "20 Minutes avec AFP",
    lastName: null,
  },
  updateDate: new Date("2022-11-30 20:39"),
};

const article2 = {
  title:
    "Météo : Les 4 chiffres à retenir du bilan climatologique de la France en 2022",
  illustration:
    "https://img.20mn.fr/Y7owBVk7RUOiFT91gvIKAik/960x614_view-of-the-garonne-river-with-the-pont-des-catalans-and-the-dome-of-the-chapelle-saint-joseph-de-la-grave-the-level-of-the-river-is-at-its-lowest-due-to-the-lack-of-rainfall-in-recent-months-which-is-developing-a-historic-drought-october-30-2022-toulouse-france-vue-sur-le-fleuve-la-garonne-avec-le-pont-des-catalans-et-le-dome-de-la-chapelle-saint-joseph-de-la-grave-le-niveau-du-fleuve-est-au-plus-bas-en-raison-du-manque-de-precipitations-depuis-ces-dernieres-mois-qui-developpe-une-secheresse-historique-30-octobre-2022-toulouse-france-scheiber-la4255-credit-fred-scheiber-sipa-2211011625-credit-fred-scheiber-sipa-2211011632",
  content:
    "Depuis trois ans, Météo-France dresse le bilan climatologique de l’année qui s'achève. Normalement, le rendez-vous est fixé à la presse courant décembre. Pas besoin d’attendre jusque-là cette fois-ci.",
  date: new Date("2022-11-30 17:24"),
  author: {
    name: "Fabrice",
    lastName: "Pouliquen",
  },
  updateDate: new Date("2022-11-30 18:40"),
};

const article3 = {
  title: "Des océans dans l’espace ? « Ils sont bien plus gros que sur Terre »",
  illustration:
    "https://img.20mn.fr/GfbVhSkiRBKnSS3gSbFVNSk/830x532_droit-international-peine-mettre-accord-legislations-entourant-exploitation-icebergs",
  content:
    "La présence d’eau dans notre système solaire, sous forme de vapeur ou de glace, est démontrée et communiquée depuis longtemps par les scientifiques. Mais saviez-vous qu’il y avait aussi de l’eau liquide ?",
  date: new Date("2022-12-01 07:02"),
  author: {
    name: "Frederic",
    lastName: "Brenon",
  },
  updateDate: null,
};

const article4 = {
  title:
    "Sécheresse dans les Alpes-Maritimes : Les mesures de restrictions d’eau prolongées jusqu’au 15 décembre",
  illustration: "https://img.20mn.fr/zOtBzBZPQdOu-_ws4djC8ik/1200x768_le-lac",
  content:
    "Pour la huitième fois cette année, la préfecture des Alpes-Maritimes reconduit un arrêté avec des restrictions d’eau jusqu’au 15 décembre à cause de la situation de « sécheresse exceptionnelle » qui touche le département depuis le mois de mars.",
  date: new Date("2022-11-18 16:13"),
  author: {
    name: "Elise",
    lastName: "Martin",
  },
  updateDate: new Date("2022-11-18 17:28"),
};

const article5 = {
  title:
    "Espace : Des souvenirs de gosse au rêve d’adulte, pourquoi les voyages sur la Lune ou Mars nous passionnent-ils autant ?",
  illustration:
    "https://img.20mn.fr/PlHbi1WlTcaK-EiIPCmBQA/830x532_astronaute-charles-duke-jr-rover-lunaire-1972",
  content:
    "Le premier pas de l’homme sur la Lune, les aventures de notre héros Thomas Pesquet, ou encore les rêves fous d’ Elon Musk… Quand il s’agit de parler de notre galaxie et de toutes les possibilités qui s’offrent à nous, on a bien souvent des étoiles dans les yeux.",
  date: new Date("2022-06-13 15:35"),
  author: {
    name: "Anna",
    lastName: "Geslin",
  },
  updateDate: null,
};

const arrOfArticles = [article1, article2, article3, article4, article5];

let strOfArticles = JSON.stringify(arrOfArticles, null, "\t");

fs.writeFile("f3_news.json", strOfArticles, function (err) {
  if (err) throw err;
  console.log('Fichier "f3_news.json" créé contenant 5 articles');
});
