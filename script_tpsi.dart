const fermate = {
  "Linea 1": ["08:00", "09:00", "10:00"],
  "Linea 2": ["08:15", "09:15", "10:15"],
  "Linea 3": ["08:30", "09:30", "10:30"],
};

// Funzione per aggiungere una fermata e mostrare gli orari
function aggiungiFermata() {
  // Recupera il valore dell'input
  const input = document.getElementById("input");
  const nuovaFermata = input.value.trim();

  // Controlla che il valore non sia vuoto
  if (nuovaFermata === "") {
    alert("Inserisci una linea valida!");
    return;
  }

  // Recupera il contenitore delle fermate
  const fermateContainer = document.getElementById("fermate-container");

  // Rimuove i risultati vecchi
  fermateContainer.innerHTML = "";

  // Controlla se la fermata esiste nei dati
  if (fermate[nuovaFermata]) {
    // Crea una nuova riga per la fermata
    const nuovaRiga = document.createElement("div");
    nuovaRiga.classList.add("riga-fermata");

    // Aggiunge il numero della linea
    const numeroLinea = document.createElement("p");
    numeroLinea.textContent = nuovaFermata;
    numeroLinea.classList.add("numero-linea");

    // Aggiunge gli orari
    const orari = document.createElement("p");
    orari.textContent = "Orari: " + fermate[nuovaFermata].join(", ");
    orari.classList.add("orari");

    // Aggiunge gli elementi alla riga
    nuovaRiga.appendChild(numeroLinea);
    nuovaRiga.appendChild(orari);

    // Aggiunge la riga al contenitore
    fermateContainer.appendChild(nuovaRiga);
  } else {
    // Mostra un messaggio se la fermata non esiste
    fermateContainer.textContent = "Fermata non trovata!";
  }

  // Pulisce il campo di input
  input.value = "";
}
