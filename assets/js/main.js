const userName = document.querySelector('#name').value;
const kmUserWant = document.querySelector('#km').value;
const userAge = document.querySelector('#age').value;
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    window.location.reload();
})

console.log(userName,kmUserWant, userAge);




const ticketPrice = kmUserWant * 0.21;

let ticketRebate;
let finalPrice;

if (userAge === 'junior') {

    ticketRebate = ticketPrice * 20 / 100;
    finalPrice =(ticketPrice - ticketRebate).toFixed(2);
    console.log(finalPrice);

} else if (userAge === 'senior') {

    ticketRebate = ticketPrice * 40 / 100;
    finalPrice = (ticketPrice - ticketRebate).toFixed(2);
    console.log(finalPrice);

} else {

    finalPrice = ticketPrice.toFixed(2);
    console.log(finalPrice);

};


