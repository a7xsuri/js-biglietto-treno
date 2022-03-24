const prezzo = 0.21;

let km = prompt('quanti chilometri vuoi percorrere?');
console.log(km);

let età = prompt('quanti anni hai?');

let risultato;

risultato = prezzo * km;

if ( età < 18 ) {
    risultato = risultato - (risultato * 0.2);
    document.getElementById('ris').innerHTML = 'Il prezzo del biglietto è: ' + (Math.round(risultato * 100) / 100 ) + '€';
    console.log(risultato);
}
else if ( età>=65 ) {
    risultato = risultato - (risultato * 0.4);
    document.getElementById('ris').innerHTML = 'Il prezzo del biglietto è: ' + (Math.round(risultato * 100) / 100 ) + '€';
    console.log(risultato);
}
else {
    document.getElementById('ris').innerHTML = 'Il prezzo del biglietto è: ' + risultato + '€';
    console.log(risultato)
}