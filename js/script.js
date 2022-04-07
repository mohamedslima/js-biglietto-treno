
// DATI IN POSSESSO

let price = 0.21;

// ELABORO DATI UTENTE

const distanceKm = prompt("Quanti kilometri vuoi percorrere?");
const yourAge = prompt("Quanti anni hai?");
console.log(distanceKm, yourAge);

// Calcolo distanza km

let userPrice = price * distanceKm;


// Sconti

if (yourAge < 18) {
    userPrice = userPrice - (userPrice * 20 / 100);
} else if (yourAge > 64) {
    userPrice = userPrice - (userPrice * 40 / 100);
}

console.log(userPrice)

// OUTPUT

document.getElementById('total-price').innerHTML = userPrice;
