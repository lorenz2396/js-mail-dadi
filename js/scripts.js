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
 
 