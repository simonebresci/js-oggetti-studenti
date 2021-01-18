// repo/cartella js-oggetti-studenti
// 1) Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// 2) Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Daje! :slightly_smiling_face:


/* Migliorie future
- validazione input utente

*/

// FUNZIONI ********************************************************************
// Stampa tutte le proprietà di un oggetto
function printObject(object){
  for (var key in object) {
    console.log(key + ' : ' + object[key]);
  }
}
// /FUNZIONI ********************************************************************

// Oggetto studente
var studenteVuoto = {
  'nome' : 'Franco',
  'cognome' : 'Franchi',
  'eta' : '58',
}

var studente1 = {
  'nome' : 'Franco',
  'cognome' : 'Franchi',
  'eta' : '58',
}

var studente2 = {
  'nome' : 'Marco',
  'cognome' : 'Castagna',
  'eta' : '22',
}

var studente3 = {
  'nome' : 'Eliso',
  'cognome' : 'Noccherini',
  'eta' : '33',
}
var studente4 = {
  'nome' : 'Ugo',
  'cognome' : 'Fantozzi',
  'eta' : '89',
}
// /Oggetto studente

// Stampa oggetto
console.log('PARTE 1 - STUDENTE SINGOLO *************************************');
printObject(studente1);
console.log(''); //Riga vuota



console.log('PARTE 2 - ARRAY DI STUDENTI ************************************');
// Array di studenti
var studenti = [];

//Popola array di studenti
studenti.push(studente1);
studenti.push(studente2);
studenti.push(studente3);
studenti.push(studente4);

// Stampa nome e cognome di tutti gli studenti
for (var i = 0; i < studenti.length; i++) {
  for (var prop in studenti[i]) {
    if (prop === 'nome' || prop === 'cognome'){
      console.log(prop + ' : ' + studenti[i][prop]);
    }
  }
  console.log(''); //Riga vuota
}
console.log(''); //Riga vuota



console.log('PARTE 3 - INSERIMENTO NUOVO UTENTE *******************************');

var studenteAppo = studenteVuoto;

for (var p in studenteAppo) {
  studenteAppo[p] = prompt('Inserisci ' + p + ' dell \'utente:');
}

//Aggiungi studente creato all'array
studenti.push(studenteAppo);

console.log('Ultimo utente inserito');

// Stampa a video ultimo utente inserito
printObject(studenti[4]);
