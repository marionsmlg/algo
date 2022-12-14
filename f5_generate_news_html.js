// Vous travaillez sur le site d'un journal local "Journal du Bataillon".

// Il vous est donné la tâche de faire la page d'accueil des news du jour contenant
// 5 articles qui se trouvent dans le fichier de l'algo 3 "f3_news.json".

// Générez un fichier HTML contenant une structure HTML (sans classes et sans CSS) qui pourrait
// afficher ceci tout en respectant les bons tags html: h1, h2, h3, ul, li, p, div, span,…

// Les news devront être affichées du plus récent au moins récent.

// $ node f5_generate_news_html.js
// Fichier "f5_index.html" créé

// $ cat f5_index.html
// <h1>JOURNAL DU BATAILLON</h1>
// ...

const fs = require("fs");

function addZero(n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
}

function addHtmlTags(txt, tag) {
  if (tag === "img") {
    return `<img src="${txt}"/>`;
  } else {
    return `<${tag}>${txt}</${tag}>`;
  }
}

function getDateAndTimeFormatFr(date) {
  let dateFormat = new Date(date);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateFormatFr = dateFormat.toLocaleDateString("fr", options);
  let time = `${addZero(dateFormat.getHours())}h${addZero(
    dateFormat.getMinutes()
  )}`;

  return `le ${dateFormatFr} à ${time}`;
}

fs.readFile("f3_news.json", "utf8", function (err, data) {
  const content = data;
  if (err) {
    console.log(err);
    return;
  }

  const arrOfArticles = JSON.parse(content);
  arrOfArticles.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  let diary = `${addHtmlTags("JOURNAL DU BATAILLON", "h1")} \n\n`;

  for (let i = 0; i < arrOfArticles.length; i++) {
    diary += addHtmlTags(`News n°${i + 1}`, "h2") + "\n";
    diary += addHtmlTags(arrOfArticles[i].title, "h3") + "\n";
    diary += addHtmlTags(arrOfArticles[i].illustration, "img") + "\n";
    diary += addHtmlTags(arrOfArticles[i].content, "p") + "\n";

    if (arrOfArticles[i].author.lastName === null) {
      diary +=
        addHtmlTags(`Écrit par ${arrOfArticles[i].author.name}`, "div") + "\n";
    } else {
      diary +=
        addHtmlTags(
          `Écrit par ${arrOfArticles[i].author.name} ${arrOfArticles[i].author.lastName}`,
          "div"
        ) + "\n";
    }
    if (arrOfArticles[i].updateDate === null) {
      diary +=
        addHtmlTags(
          `Publié ${getDateAndTimeFormatFr(arrOfArticles[i].date)}`,
          "div"
        ) +
        "\n" +
        "\n";
    } else {
      diary +=
        addHtmlTags(
          `Publié ${getDateAndTimeFormatFr(
            arrOfArticles[i].date
          )} — Mis à jour ${getDateAndTimeFormatFr(
            arrOfArticles[i].updateDate
          )}`,
          "div"
        ) +
        "\n" +
        "\n";
    }
  }

  fs.writeFile("f5_index.html", diary, function (err) {
    if (err) throw err;
    console.log('Fichier "f5_index.html" créé');
  });
});
