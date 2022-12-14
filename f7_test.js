const simpledate = require("./f7_simpledate.js");

const tomorrow = simpledate.tomorrow(new Date());
console.log(tomorrow);

const today = simpledate.yesterday(tomorrow);
console.log(today);

const todayFrenchDisplay = simpledate.display("fr", today);
console.log(todayFrenchDisplay);
