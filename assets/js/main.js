const btn = document.querySelector('[type=submit]');
const btnReset = document.querySelector('[type=reset]');

btn.addEventListener('click', (e) => {

    e.preventDefault();

    let userName = document.querySelector('#name').value;
    let kmUserWant = document.querySelector('#km').value;
    let userAge = document.querySelector('#age').value;
    const alertElement = document.querySelector('.alert');
    
    if (isNaN(kmUserWant)) {

    alertElement.textContent = 'Non hai inserito un numero nella richiesta dei Km da percorrere,per favore inserisci un numero';
    return;

    } else if (kmUserWant < 1 || kmUserWant > 1500) {

    alertElement.textContent = 'non hai inserito un numero valido nella richiesta dei chilometri che vuoi percorrere,per favore inserisci un numero compreso tra 1 e 1500';
    return;

    } else {
        alertElement.textContent = ''
    }

    const ticketPrice = kmUserWant * 0.21;

    let ticketRebate;
    let finalPrice;
    const infoRebate = document.querySelector('.ticket_rebate');
    
    
    if (userAge === 'junior') {

        ticketRebate = ticketPrice * 20 / 100;
        finalPrice =(ticketPrice - ticketRebate).toFixed(2);
        infoRebate.classList.remove('text-danger');
        infoRebate.classList.add('text-success');
        infoRebate.textContent = 'Lo sconto applicato è del 20%'
        console.log(finalPrice);

    } else if (userAge === 'senior') {

        ticketRebate = ticketPrice * 40 / 100;
        finalPrice = (ticketPrice - ticketRebate).toFixed(2);
        console.log(finalPrice);
        infoRebate.classList.remove('text-danger');
        infoRebate.classList.add('text-success');
        infoRebate.textContent = 'Lo sconto applicato è del 40%'
        console.log(finalPrice);

    } else {

        finalPrice = ticketPrice.toFixed(2);
        console.log(finalPrice);
        infoRebate.classList.remove('text-success');
        infoRebate.classList.add('text-danger');
        infoRebate.textContent = 'Nessuno sconto è stato applicato'
        console.log(finalPrice);

    };


    const userNameTicket = document.querySelector('.user_name');
    userNameTicket.textContent = userName;

    const userTicketPrice = document.querySelector('.ticket_price');
    userTicketPrice.textContent = finalPrice + ' €';

    const cabElement = document.querySelector('.cab');
    const numberCab = Math.ceil(Math.random()*8);
    cabElement.textContent = numberCab;

})

btnReset.addEventListener('click', () => {
    window.location.reload();
})


