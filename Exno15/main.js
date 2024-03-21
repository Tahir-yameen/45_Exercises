var guestslist = ["Akber", "Anwar", "Amjad", "Azhar", "Akhtar"];
var notComing = guestslist[0];
console.log(notComing, "could not come for dinner.");
guestslist.splice(0, 1, "Hassan");
guestslist.forEach(function (individualguest) { return console.log("Hi ".concat(individualguest, ", Would you like to come for dinner at my home.?")); });
