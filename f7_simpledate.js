// Créer une petite librairie permettant de simplifier l'utilisation des date en JavaScript.

// Votre librairie exportera les méthodes suivantes:

// tomorrow
// yesterday
// display

// Un utilisateur pourrait alors utiliser votre librairie comme ceci:

// const simpledate = require("./f7_simpledate.js")

// const tomorrow = simpledate.tomorrow(new Date())
// console.log(tomorrow) // 2022-11-16T13:30:05.643Z

// const today = simpledate.yesterday(tomorrow)
// console.log(today) // 2022-11-15T13:30:05.643Z

// const todayFrenchDisplay = simpledate.display("fr", today)
// console.log(todayFrenchDisplay) // 15 Novembre 2022

const simpledate = {
  tomorrow: function (date) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + 1);

    return currentDate;
  },
  yesterday: function (date) {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() - 1);

    return currentDate;
  },
  display: function (language, date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateFormat = new Date(date).toLocaleDateString(language, options);

    return dateFormat;
  },
};

module.exports = simpledate;
