 // Lista delle email consentite
 var listEmailAllow = [
    "email1@gmail.com",
    "email2@gmail.com",
    "email3@gmail.com",
    "email1@outlook.com",
    "email2@outlook.com",
    "email3@outlook.com",
    "email1@libero.it",
    "email2@libero.it",
    "email3@libero.it",
];

const form = document.getElementById('test-email');

form.addEventListener('submit',
function(event) {
    event.preventDefault();
    // Ottenere il valore dell'email inserita dall'utente
    var emailChecked = document.getElementById("email").value;
 
    // Controlla se l'email è nella lista di email consentite
    if (listEmailAllow.includes(emailChecked)) {
      // L'email è consentita
      document.getElementById("risultato").textContent = "Accesso consentito!";
    } else {
      // L'email non è consentita
      document.getElementById("risultato").textContent = "Accesso negato!";
    }
 
    // Resetta il campo dell'email
    document.getElementById("email").value = "";

  });
 
/* 
    -----------------------------------------------------------------------------
*/

const form1 = document.getElementById('random-dadi');

form1.addEventListener('submit',
    function(evento) {
        evento.preventDefault();
    // Genera un numero casuale per il giocatore
    let punteggioGiocatore = Math.round(Math.random() * 5) + 1;

    // Genera un numero casuale per il computer
    let punteggioComputer = Math.round(Math.random() * 5) + 1;

    // Mostra i punteggi del giocatore e del computer
    document.getElementById("punteggioGiocatore").innerHTML = punteggioGiocatore;
    document.getElementById("punteggioComputer").innerHTML = punteggioComputer;

    // Determina il vincitore
    if (punteggioGiocatore > punteggioComputer) {
      document.getElementById("risultato1").textContent = "Complimenti, hai vinto!";
    } else if (punteggioGiocatore < punteggioComputer) {
      document.getElementById("risultato1").textContent = "Hai perso. Riprova!";
    } else {
      document.getElementById("risultato1").textContent = "Pareggio. Giocate ancora!";
    }
  })






 