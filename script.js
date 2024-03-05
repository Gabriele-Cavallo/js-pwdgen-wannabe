// Genera una password dopo aver chiesto all'utente nome, cognome, colore preferito e termina con 23

// 1-Chiedere all'utente il suo nome
const userName = prompt('Ciao, dimmi il tuo nome!');
// 2-Chiedere all'utente il suo cognome
const userSurname = prompt('Ciao, dimmi il tuo cognome!');
// 3-Chiedere all'utente il suo colore preferito
const userColor = prompt('Ciao, dimmi il tuo colore preferito!');
// 4-Chiedere all'utente un numero
const userNumber = prompt('Ciao, dimmi un numero!');
let userNumberAsValue = parseInt (userNumber);
const finalNumber = userNumberAsValue + 23;
// 5-Generare la password in base ai dati inseriti
const userPswd = `${userName}${userSurname}${userColor}${finalNumber}`;
// 6-Stampa a schermo la password
const userMessage = `${'Ecco la tua password personalizzata!! Password: '}${userPswd}`;
document.getElementById('pswdGen').innerHTML = userMessage;