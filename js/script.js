// Gioco dei dadi Generare un numero random da 1 a 6,
// sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var giocatore = Math.floor(Math.random() * 7);

var computer = Math.floor(Math.random() * 7);

console.log('giocatore' + giocatore);

console.log('computer' + computer);

if (giocatore > computer) {
    
    alert('vince giocatore');

} else if (computer > giocatore) {

    alert('vince computer');

} else {

    alert('pareggio');

}


