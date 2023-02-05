const cas = 80;
const timeInDay = 5;
const timeZakaz = 40;
const dayExit = 11;
let totalRub = cas * timeZakaz;
let dayWorked = 11 - 2;
let actual = (dayWorked * timeInDay) >= timeZakaz;
console.log("Всего к оплате" + totalRub);
console.log("Нужно ли брать работу?" + actual)
