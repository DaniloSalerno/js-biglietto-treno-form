const btn = document.querySelector('[type=submit]');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let userName = document.querySelector('#name').value;
    let kmUserWant = document.querySelector('#km').value;
    let userAge = document.querySelector('#age').value;
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


const userNameTicket = document.querySelector('.user_name');
userNameTicket.textContent = userName;

const userTicketPrice = document.querySelector('.ticket_price');
userTicketPrice.textContent = finalPrice + ' €';
})

/* btn.addEventListener('click', (e) => {
    e.preventDefault();
}) */

/* if (isNaN(kmUserWant)) {

    alert('non hai inserito un numero nella richiesta dei chilometri che vuoi percorrere,per favore inserisci un numero valido');
    window.location.reload();

} else if (kmUserWant < 1 || kmUserWant > 1500) {

    alert('non hai inserito un numero valido nella richiesta dei chilometri che vuoi percorrere,per favore inserisci un numero compreso tra 1 e 1500');
    window.location.reload();

} */


