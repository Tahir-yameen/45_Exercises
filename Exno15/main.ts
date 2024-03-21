let guestslist = ["Akber", "Anwar", "Amjad", "Azhar", "Akhtar"];

let notComing = guestslist[0];

console.log(notComing, "could not come for dinner.");

guestslist.splice(0, 1, "Hassan");

guestslist.forEach(individualguest => console.log(`Hi ${individualguest}, Would you like to come for dinner at my home.?`));